import {
    addClass,
    removeClass,
} from './PoDaPack.js';
export function extend(obj, ...sources) {
    return Object.assign({}, obj, ...sources);
}

export function loadScript(url) {
    var callback =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {};
    var errorback =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function() {};

    var script = document.createElement("script");
    var node = document.getElementsByTagName("script")[0];

    node.parentNode.insertBefore(script, node);

    script.onerror = errorback;
    script.onload = callback;

    script.type = "text/javascript";
    script.async = true;

    script.src = url;
}
export function loadCSS(url, callback = () => { console.log("loaded icons") }, errorback = () => { console.log("error loading icons") }) {

    let style = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];

    head.appendChild(style);

    style.onerror = errorback;
    style.onload = callback;

    style.type = 'text/css';
    style.rel = 'stylesheet';

    style.href = url;
}


export function formatTime(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds =
        duration % 60 < 10 ?
        "0" + Math.round(duration % 60).toString() :
        Math.round(duration % 60);
    return minutes + ":" + seconds;
}

export function composeOmnitureData(series, podcast, publicationDate) {
    var tracking = window.s || {};
    var data = {
        pageName: tracking.pageName,
        eVar1: tracking.pageName,
        eVar8: tracking.eVar8,
        eVar61: tracking.eVar2 +
            ":" +
            series.slug +
            ":" +
            publicationDate +
            ":" +
            podcast.slug.substring(0, 255),
        prop5: tracking.prop5
    };
    return data;
}
export function composeEventData(series, podcast) {
    return {
        "slug": podcast.slug,
        "series": series.slug,
        "publicationDate": podcast.publicationDisplayDate,
        "timestamp": Date.now()
    }
}
export function truncateTitle(container) {
    var titleId = "#" + container.getAttribute("data-slug") + "-title";
    var bounds = container.getBoundingClientRect();
    if (bounds.width > 528) {
        var titleUI = document.querySelectorAll(titleId)[0];
        if (titleUI) {
            titleUI.text = titleUI.getAttribute("data-title");
            var total = bounds.height;
            var lines = Math.floor(total / 25);
            while (lines > 3) {
                var titleText = titleUI.text.split(" ");
                var truncatedText = titleText.slice(0, titleText.length - 1).join(" ") + "...";
                titleUI.text = truncatedText;
                lines = Math.floor(titleUI.getBoundingClientRect().height / 25);
            }
        }
    }
}
export function hasFontAwesome() {
    let el = document.createElement('span');
    el.className = 'fa';
    el.style.display = 'none';
    document.body.insertBefore(el, document.body.firstChild);

    let fontAwesomeLoaded = getComputedStyle(el).fontFamily === 'FontAwesome';

    document.body.removeChild(el);

    return fontAwesomeLoaded;
}
export function switchToMobile(container) {
    var mobilize = [
        ".podcast-image",
        ".open-subscription-overlay-button",
        ".podcast-title",
        ".podcast-series",
        ".podcast-image",
        ".podcast-image-container",
        ".podcast-audio-container",
        ".podcast-title-container",
        ".subscription-overlay",
        ".subscription-overlay-button-container",
        ".subscription-overlay-link-container",
        ".subscription-overlay-exit",
        ".progress-bar-container",
        ".play-bar"
    ];
    addClass(container, "mobile");
    document.querySelectorAll('.open-subscription-overlay-button').forEach(function(node) { node.text = "Subscribe to Podcast"; });
    document.querySelectorAll('.podcast-image-container').forEach(function(node) { node.style.display = 'none' });
    document.querySelectorAll('.podcast-mobile-cover-image').forEach(function(node) { node.style.display = 'block' });
    mobilize.forEach(function(className) {
        var foundClasses = document.querySelectorAll(className);
        foundClasses.forEach(function(node) {
            addClass(node, "mobile");
        });
    });
}

export function switchToDesktop(container) {
    var mobilize = [
        ".podcast-image",
        ".open-subscription-overlay-button",
        ".podcast-title",
        ".podcast-series",
        ".podcast-image",
        ".podcast-image-container",
        ".podcast-audio-container",
        ".podcast-title-container",
        ".subscription-overlay",
        ".subscription-overlay-button-container",
        ".subscription-overlay-link-container",
        ".subscription-overlay-exit",
        ".progress-bar-container",
        ".play-bar",
    ];
    removeClass(container, "mobile");
    document.querySelectorAll('.open-subscription-overlay-button').forEach(function(node) { node.text = "Subscribe"; });
    document.querySelectorAll('.podcast-image-container').forEach(function(node) { node.style.display = 'block' });
    document.querySelectorAll('.podcast-mobile-cover-image').forEach(function(node) { node.style.display = 'none' });
    mobilize.forEach(function(className) {
        var foundClasses = document.querySelectorAll(className);
        foundClasses.forEach(function(node) {
            removeClass(node, "mobile");
        });
    });
}