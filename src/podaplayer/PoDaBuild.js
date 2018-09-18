import { formatTime } from './PoDaTools.js';
import { CONFIG } from './PoDaSupply.js';

export function PODA_BUILD(podcast, series, coverImage, org) {
    var audioSrc = podcast.audio.url.substring(podcast.audio.url.indexOf('//') + 2, podcast.audio.url.length);
    var playerTemplate =
        `<audio id="${podcast.slug}" src="${"//"+audioSrc}" type="audio/mp3" preload="none"></audio>
            <div class="subscription-overlay">
                    <div class="subscription-overlay-title">Subscribe on: </div>
                    <div class="subscription-overlay-exit"><i class="fa fa-times"></i></div>
                    <div class="subscription-overlay-link-container"> <a id="alexa" class="subscription-overlay-link" target="_blank">Alexa</a> <a id="applePodcasts" class="subscription-overlay-link" target="_blank">Apple Podcasts</a><a id="googlePlay" class="subscription-overlay-link" target="_blank">Google Podcasts</a>
                        <a id="spotify" class="subscription-overlay-link" target="_blank">Spotify</a> <a id="stitcher" class="subscription-overlay-link" target="_blank">Stitcher</a> <a id="tuneIn" class="subscription-overlay-link" target="_blank">TuneIn</a>
                        <a id="radioPublic" class="subscription-overlay-link" target="_blank">RadioPublic</a> <a id="iheartRadio" class="subscription-overlay-link" target="_blank">iHeartRadio</a> <a id="rss" class="subscription-overlay-link" target="_blank">RSS</a> </div>
                </div>
                <div class="podcast-image-container "> <img id="cover" class="podcast-image" src="${coverImage}"> </div>
                <div class="podcast-audio-container">
                    <div class="podcast-audio">
<div class="podcast-series"><a class="series-link" href="https://www.washingtonpost.com/podcasts/${series.slug}/?tid=pod_navfromplayer"> ${series.title} | Podcast</a> </div>
                        <div class="podcast-title-container">
                            <div id="${podcast.slug}-title" class="podcast-title"  data-title="${podcast.title}">${podcast.title}</div><img class="podcast-mobile-cover-image" src="${coverImage}"></div>
                        <div class="open-subscription-overlay-button">Subscribe</div>
                        <div class="play-bar-screen"></div>
                        <div class="play-bar">
                            <div class="podcast-elapsed">0:00</div>
                            <div class="skip-back-button clickable">
                                <div class="skip-button"><i class="fa fa-undo-alt"></i></div>
                                <div class="skip-button-text">15</div>
                            </div>
                            <div class="play-button-container clickable"> <i class="play-button fa fa-play"></i> </div>
                            <div class="skip-forward-button clickable">
                                <div class="skip-button"><i class="fa fa-redo-alt"></i></div>
                                <div class="skip-button-text">15</div>
                            </div>
                            <div class="podcast-duration">${formatTime(podcast.duration)}</div>
                        </div>
                        <div class="podcast-progress-bar-screen"></div>
                        <div id="progress-bar-container" class="progress-bar-container">
                            <div class="podcast-progress-bar">
                                <div class="podcast-progress-point"></div>
                            </div> <span id="buffer-bar" class="buffer-bar"></span> </div>
                    </div>
                </div>`;
    return playerTemplate;
}