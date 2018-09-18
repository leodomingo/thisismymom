import {
    truncateTitle,
    composeOmnitureData,
    composeEventData,
    formatTime
} from './PoDaTools.js';
import {
    addClass,
    removeClass,
} from './PoDaPack.js';
import { PODA_TRACK } from './PoDaOnOff.js';
import { PODAPLAYER_EVENTS } from './PoDaSupply.js';

let _podaTrack = new WeakMap();
export class AudioPlayer {
    constructor(container, podcast, series) {

        let podaTrack = new PODA_TRACK();
        _podaTrack.set(this, podaTrack);

        window.podas = window.podas || {};
        truncateTitle(container);

        this.mouseMoveHandler = (e) => {
            e.preventDefault();
            this.state.click = false;
            var timeDenom;
            var offset;
            if (
                e.target.className == "buffer-bar" ||
                e.target.className == "podcast-progress-point"
            ) {
                offset = e.offsetX + e.target.offsetLeft;
                // Click event establishes the inside span as a target and throws off the math without adding its position to the offset
            } else {
                offset = e.offsetX;
            }
            this.updateProgressBar(offset);
            this.audio.currentTime =
                this.audio.duration *
                (offset / this.progressBarContainerWidth);
        };


        this.podcast = podcast;
        this.series = series;
        this.container = container;
        this.color = series.color;
        this.state = {
            click: false,
            sentPause: false,
            quartile: {
                q25: false,
                q50: false,
                q75: false,
                q100: false
            },
            prePlay: true
        };
        this.audio = (() => {
            var audioElement = container.querySelectorAll("#" + podcast.slug)[0];
            audioElement.addEventListener("timeupdate",
                () => {
                    return this.updateProgressBar();
                });
            audioElement.addEventListener(
                "ended",
                () => {
                    this.setPrePlayState();
                    this.sendQuartile(this.podcast, "100-quartile", "event-134");
                    this.trigger(PODAPLAYER_EVENTS.PLAYBACK_COMPLETE, composeEventData(series, podcast, PODAPLAYER_EVENTS.PLAYBACK_COMPLETE));

                });
            audioElement.addEventListener(
                "progress",
                (ev) => {
                    return this.updateProgress(ev);
                });
            audioElement.addEventListener(
                "pause",
                (ev) => {
                    removeClass(this.playButton
                        .children[0], 'fa-pause');
                    removeClass(this.playButton
                        .children[0], 'pause-button');
                    addClass(this.playButton
                        .children[0], 'fa-play');
                    addClass(this.playButton
                        .children[0], 'play-button');
                });
            audioElement.addEventListener(
                "play",
                (ev) => {
                    addClass(this.playButton
                        .children[0], 'fa-pause');
                    addClass(this.playButton
                        .children[0], 'pause-button');
                    removeClass(this.playButton
                        .children[0], 'fa-play');
                    removeClass(this.playButton
                        .children[0], 'play-button');
                });
            return audioElement;
        })();
        this.publicationDate = (() => {
            var unixTime = podcast.publicationDate;
            var date = new Date(unixTime * 1);
            var year = date.getFullYear().toString();
            var month = date.getMonth().toString();
            var day = date.getDate().toString();

            if (month < 10) {
                month = "0" + month;
            }
            if (day < 10) {
                day = "0" + day;
            }
            return year + month + day;
        })();
        this.skipForwardButton = (() => {
            var skipForwardButton = container.querySelectorAll(".skip-forward-button")[0];

            skipForwardButton.addEventListener("click", () => {
                var data = composeOmnitureData(series, podcast, this.publicationDate);
                if (typeof window.sendDataToOmniture === "function") {
                    window.sendDataToOmniture("podcast-skip-ahead", "event14", data);
                }
                this.trigger(PODAPLAYER_EVENTS.SKIP_AHEAD, composeEventData(series, podcast, PODAPLAYER_EVENTS.SKIP_AHEAD));
                this.skip(true);
            });
            return skipForwardButton;
        })();
        this.skipBackwardButton = (() => {
            var skipBackwardButton = container.querySelectorAll(".skip-back-button")[0];

            skipBackwardButton.addEventListener("click", () => {
                var data = composeOmnitureData(series, podcast, this.publicationDate);
                if (typeof window.sendDataToOmniture === "function") {
                    window.sendDataToOmniture("podcast-skip-back", "event15", data);
                }
                this.trigger(PODAPLAYER_EVENTS.SKIP_BACKWARD, composeEventData(series, podcast, PODAPLAYER_EVENTS.SKIP_BACKWARD));
                this.skip(false);
            });
            return skipBackwardButton;
        })();
        this.progressBarContainer = (() => {
            var progressUI = container.querySelectorAll(".progress-bar-container")[0];
            progressUI.addEventListener("mousedown", (ev) => {
                return this.updatePlayHead(ev, this);
            });
            return progressUI;
        })();
        this.progressBarContainerWidth = (() => {
            return this.progressBarContainer.getBoundingClientRect().width;
        })();
        this.playBarScreen = (() => {
            var playBarScreen = container.querySelectorAll(".play-bar-screen")[0];
            return playBarScreen;
        })();

        this.progressBar = (() => {
            var progressBar = container.querySelectorAll(".podcast-progress-bar")[0];
            progressBar.style["background-color"] = series.color;
            return progressBar;
        })();
        this.timeStamp = (() => {
            var timeUI = container.querySelectorAll(".podcast-elapsed")[0];
            return timeUI;
        })();
        this.durationStamp = (() => {
            var durationUI = container.querySelectorAll(".podcast-duration")[0];
            return durationUI;
        })();
        this.playButton = (() => {
            var playButton = container.querySelectorAll(".play-button-container")[0];
            playButton.style["background-color"] = series.color;
            playButton.style["border"] = series.color;
            return playButton;
        })();

        this.subscriptionOverlay = (() => {
            var subscriptionOverlayButtons = [
                "alexa",
                "applePodcasts",
                "googlePlay",
                "spotify",
                "stitcher",
                "tuneIn",
                "radioPublic",
                "iheartRadio",
                "rss"
            ];

            var topThree = 0;
            for (var button in subscriptionOverlayButtons) {
                var sub = subscriptionOverlayButtons[button];
                var subUI = container.querySelectorAll("#" + subscriptionOverlayButtons[button])[0];
                if (series.subscriptionLinks[sub]) {
                    if (sub in ["alexa", "applePodcasts", "googlePlay"]) {
                        topThree += 1;
                    }
                    subUI.href = series.subscriptionLinks[sub];
                    subUI.addEventListener("click", (button) => {
                        if (typeof window.sendDataToOmniture === "function") {
                            var data = {
                                pageName: window.s.pageName,
                                eVar1: window.s.pageName,
                                eVar8: window.s.eVar8,
                                eVar26: "podsubscribe-" + this.series.slug + "_" + button.target.id,
                                eVar61: window.s.eVar2 +
                                    ":" +
                                    this.series.slug +
                                    ":" +
                                    this.publicationDate +
                                    ":" +
                                    this.podcast.slug.substring(0, 255),
                                prop5: window.s.prop5
                            };
                            window.sendDataToOmniture("podcast-subscribe", "event80", data);
                        }
                        this.trigger(PODAPLAYER_EVENTS.POD_SUBSCRIBE[sub], composeEventData(series, podcast, PODAPLAYER_EVENTS.POD_SUBSCRIBE[sub]));
                    });
                } else {
                    subUI.remove();
                }
            }
            if (topThree == 1) {
                container.querySelectorAll(".subscription-overlay-button")[0].style["border-radius"] = "5px";
            }

            var subscriptionOverlay = container.querySelectorAll(".subscription-overlay")[0];
            return subscriptionOverlay;
        })();
        this.openSubscriptionOverlayButton = (() => {
            var openButton = container.querySelectorAll(".open-subscription-overlay-button")[0];
            openButton.addEventListener("click", () => {
                this.subscriptionOverlay.style["opacity"] = 1;
                this.subscriptionOverlay.style["z-index"] = 200;
            });
            return openButton;
        })();
        this.exitSubscriptionOverlayButton = (() => {
            var exitSubscriptionOverlay = container.querySelectorAll('.subscription-overlay-exit')[0];
            exitSubscriptionOverlay.addEventListener('click', () => {
                this.subscriptionOverlay.style["opacity"] = 0;
                this.subscriptionOverlay.style["z-index"] = -1;
            });
            return exitSubscriptionOverlay;
        })();
    }
    play() {
        var isPlaying =
            this.audio.currentTime > -1 &&
            !this.audio.paused &&
            !this.audio.ended &&
            this.audio.readyState > 2;
        if (!isPlaying) {
            if (this.state.prePlay) {
                this.setPlayState();
            }
            this.audio.play();
        }
    }
    pause() {
        var isPlaying =
            this.audio.currentTime > -1 &&
            !this.audio.paused &&
            !this.audio.ended;
        if (this.audio.currentTime > 1) {
            this.state.sentPause = true;
        }
        if (isPlaying) {
            this.audio.pause();
        }
    }
    skip(forward) {
        var isPlaying =
            this.audio.currentTime > 0 &&
            !this.audio.paused &&
            !this.audio.ended &&
            this.audio.readyState > 2;
        var currentTime = this.audio.currentTime;
        var newTime = currentTime;
        if (forward) {
            newTime += 15;
        } else {
            newTime -= 15;
        }
        var overFlow = newTime > this.audio.duration;
        var underFlow = newTime < 0;

        if (!overFlow && !underFlow) {
            this.audio.currentTime = newTime;
        } else if (overFlow) {
            this.setPrePlayState();
            this.sendQuartile(this.podcast, "100-quartile", "event-134");
            this.trigger(PODAPLAYER_EVENTS.PLAYBACK_COMPLETE, composeEventData(series, podcast, PODAPLAYER_EVENTS.PLAYBACK_COMPLETE));

        } else {
            this.audio.currentTime = 0;
        }
    }


    setPrePlayState() {
        this.state.prePlay = true;
        this.playBarScreen.style.display = "block";
        this.skipForwardButton.style["color"] = "#e9e9e9";
        this.skipBackwardButton.style["color"] = "#e9e9e9";
        this.container.querySelectorAll(".skip-button")[0].style.color = "#e9e9e9";
        this.audio.currentTime = 0;
        this.pause();
        this.container.querySelectorAll(".buffer-bar")[0].remove();

    }
    setPlayState() {
        this.skipForwardButton.style["color"] = this.color;
        this.skipBackwardButton.style["color"] = this.color;
        this.container.querySelectorAll(".skip-button")[0].style.color = this.color;
        this.playBarScreen.style.display = "none";
        this.state.prePlay = false;
    }
    findQuartile(quartile) {
        var q_1 = "25-quartile";
        var q_2 = "50-quartile";
        var q_3 = "75-quartile";
        var q_4 = "100-quartile";
        var event_1 = "event131";
        var event_2 = "event132";
        var event_3 = "event133";
        var event_4 = "event134";

        if (quartile >= 1) {
            if (!this.state.quartile.q100) {
                this.state.quartile.q100 = true;
                this.sendQuartile(this.series, this.podcast, q_4, event_4);
                this.trigger(PODAPLAYER_EVENTS.PLAYBACK_COMPLETE, composeEventData(this.series, this.podcast, PODAPLAYER_EVENTS.PLAYBACK_COMPLETE));


            }
        } else if (quartile >= 0.75) {
            if (!this.state.quartile.q75) {
                this.state.quartile.q75 = true;
                this.sendQuartile(this.series, this.podcast, q_3, event_3);
                this.trigger(PODAPLAYER_EVENTS.QUARTILE_75, composeEventData(this.series, this.podcast, PODAPLAYER_EVENTS.QUARTILE_75));

            }
        } else if (quartile >= 0.5) {
            if (!this.state.quartile.q50) {
                this.state.quartile.q50 = true;
                this.sendQuartile(this.series, this.podcast, q_2, event_2);
                this.trigger(PODAPLAYER_EVENTS.QUARTILE_50, composeEventData(this.series, this.podcast, PODAPLAYER_EVENTS.QUARTILE_50));

            }
        } else if (quartile >= 0.25) {
            if (!this.state.quartile.q25) {
                this.state.quartile.q25 = true;
                this.sendQuartile(this.series, this.podcast, q_1, event_1);
                this.trigger(PODAPLAYER_EVENTS.QUARTILE_25, composeEventData(this.series, this.podcast, PODAPLAYER_EVENTS.QUARTILE_25));

            }
        }
    }
    sendQuartile(series, podcast, quartile, event) {
        if (typeof window.sendDataToOmniture === "function") {
            var data = composeOmnitureData(series, podcast, this.publicationDate);
            window.sendDataToOmniture(quartile, event, data);
        }
    }
    updateProgressBar(override) {
        var playPercentage = override;
        if (!playPercentage) {
            var elapsedTime = Math.round(this.audio.currentTime);
            var elapsedTimeStamp = formatTime(elapsedTime);
            this.timeStamp.innerHTML = elapsedTimeStamp;

            playPercentage = Math.round(
                elapsedTime /
                this.audio.duration *
                (this.progressBarContainerWidth - 18)
            );
            var checkQuartile = elapsedTime / this.audio.duration;
            this.findQuartile(checkQuartile);
        }
        this.progressBar.style["width"] = playPercentage + 18 + "px";
    }
    updateProgress() {
        var _audio = this.audio;
        var latest =
            _audio.buffered.length != 0 ? _audio.buffered.length - 1 : 0;
        if (_audio.buffered.length != 0) {
            var $bufferBar = this.container.querySelectorAll('.buffer-bar')[0];
            $bufferBar.style["width"] = (_audio.buffered.end(latest) / _audio.duration) * 100 + "%";
        }
    }
    updatePlayHead(ev) {
        ev.preventDefault();

        // this.pause();
        var click = true;
        var localClick = true;
        this.state.click = true;
        var target = ev.target;


        document.addEventListener("mouseup", (e) => {
            e.preventDefault()
            this.progressBarContainer.removeEventListener("mousemove", this.mouseMoveHandler);
            if (localClick) {
                if (click) {
                    if (target.className == 'buffer-bar' || e.target.className == "podcast-progress-point") {
                        this.updateProgressBar(e.offsetX + e.target.offsetLeft);
                        // Click event establishes the inside span as a target and throws off the math without adding its position to the offset
                        var loadedTime =
                            this.audio.duration *
                            ((e.offsetX + e.target.offsetLeft) /
                                this.progressBarContainerWidth);
                        this.progressBarContainer.removeEventListener("mousemove", this.mouseMoveHandler);

                        this.audio.currentTime = loadedTime;
                        localClick = false;
                    } else {
                        var playedRange = this.audio.played;
                        if (playedRange.length > 0) {
                            this.audio.currentTime =
                                this.audio.duration *
                                (e.offsetX / this.progressBarContainerWidth);
                            this.progressBarContainer.removeEventListener("mousemove", this.mouseMoveHandler);

                            localClick = false;
                        } else {
                            this.updateProgressBar(e.offsetX);
                            this.progressBarContainer.removeEventListener("mousemove", this.mouseMoveHandler);
                            var timeDenom =
                                e.offsetX / this.progressBarContainerWidth;
                            this.audio.addEventListener('waiting', function() {});
                            this.audio.addEventListener(
                                'loadedmetadata',
                                function() {
                                    var loadedTime = this.audio.duration * timeDenom;
                                    this.audio.currentTime = loadedTime;
                                    localClick = false;
                                },
                                true
                            );
                        }
                    }
                }
            }
        });
        this.progressBarContainer.addEventListener("mousemove", this.mouseMoveHandler);
    }
    restartAudio() {
        this.audio.currentTime = 0;
        this.pause();
    }
    on(event, handler, context) {
        _podaTrack.get(this).on(event, handler);
    }
    off(event, handler, context) {
        _podaTrack.get(this).off(event, handler);
    }
    trigger(event, handler, context) {
        _podaTrack.get(this).trigger(event, handler);
    }


};

export class AudioPlayerContainer {
    constructor() {
        this.players = [];
    }

    addPlayer(newPlayer, podcast, series, imageUrls) {
        var $pushedPlayer = new AudioPlayer(
            newPlayer,
            podcast,
            series,
            imageUrls
        );
        $pushedPlayer.progressBarContainer.addEventListener('updatedPlayHead', (
            ev
        ) => {
            return this.pauseAll(ev);
        });


        $pushedPlayer.playButton.addEventListener("click", () => {
            var data = composeOmnitureData(series, podcast, $pushedPlayer.publicationDate);
            if (!$pushedPlayer.audio.paused) {
                $pushedPlayer.pause();
                if ($pushedPlayer.state.sentPause == false) {
                    $pushedPlayer.state.sentPause = true;
                }
                if (typeof window.sendDataToOmniture === "function") {
                    window.sendDataToOmniture(
                        "podcast-pause-playback",
                        "event135",
                        data
                    );
                }
                $pushedPlayer.trigger(PODAPLAYER_EVENTS.PAUSE_PLAYBACK, composeEventData($pushedPlayer.series, podcast, PODAPLAYER_EVENTS.PAUSE_PLAYBACK));

            } else if ($pushedPlayer.audio.paused) {
                this.pauseAll();
                $pushedPlayer.play();

                var event_title = "podcast-begin-playback";
                var event = "event130";
                if ($pushedPlayer.state.sentPause) {
                    event_title = "podcast-unpause-playback";
                    event = "event138";
                    $pushedPlayer.trigger(PODAPLAYER_EVENTS.RESTART_PLAYBACK, composeEventData($pushedPlayer.series, podcast));

                } else {
                    $pushedPlayer.trigger(PODAPLAYER_EVENTS.BEGIN_PLAYBACK, composeEventData($pushedPlayer.series, podcast));
                }
                if (typeof window.sendDataToOmniture === "function") {
                    window.sendDataToOmniture(event_title, event, data);
                }
            }
        });
        this.players.push($pushedPlayer);
        window.podas[podcast.slug] = $pushedPlayer;
    }
    pauseAll() {
        this.players.forEach(function(player) {
            player.pause();
        });
    }
    get() {
        return this._players;
    }
    set(playerArray) {
        this._players = playerArray;
    }

    get() {
        return this._state;
    }
    set(newState) {
        this._state = newState;
    }
}