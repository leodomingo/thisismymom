export const CONFIG = {
    PODA_STYLE: {
        SANDBOX: "//d2lhouwh993x2g.cloudfront.net/sandbox/style.js",
        PROD: "//d2lhouwh993x2g.cloudfront.net/prod/style.js",
    },
    ORG_SETTINGS: {
        "washpost-sandbox": {
            api: "https://audio-api.sandbox.washpost.arcpublishing.com/api/v1/audio/",
            podtrac: true
        },
        "washpost": {
            api: "https://audio-api.washpost.arcpublishing.com/api/v1/audio/",
            podtrac: true
        },
        "tgam": {
            api: "https://audio-api.tgam.arcpublishing.com/api/v1/audio/",
            podtrac: false
        },
        "tgam-sandbox": {
            api: "https://audio-api.sandbox.tgam.arcpublishing.com/api/v1/audio/",
            podtrac: false
        }
    }
}


//  Events, my dear boy, events
export const PODAPLAYER_EVENTS = {
    BEGIN_PLAYBACK: "podaBeginPlayback",
    PAUSE_PLAYBACK: "podaPausePlayback",
    RESTART_PLAYBACK: "podaRestartPlayback",
    SKIP_AHEAD: "podaSkipAhead",
    SKIP_BACKWARD: "podaSkipBackward",
    QUARTILE_25: "podaQuartile25",
    QUARTILE_50: "podaQuartile50",
    QUARTILE_75: "podaQuartile75",
    PLAYBACK_COMPLETE: "podaPlayBackComplete",
    POD_SUBSCRIBE: {
        alexa: "podaSubAlexa",
        applePodcasts: "podaSubApplePodcasts",
        googlePlay: "podaGooglePlay",
        spotify: "podaSubSpotify",
        tuneIn: "podaSubTuneIn",
        radioPublic: "podaSubRadioPublic",
        iHeartRadio: "podaSubIHeartRadio",
        rss: "podaSubRSS"
    }
}