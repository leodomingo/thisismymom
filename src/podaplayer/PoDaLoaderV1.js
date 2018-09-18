"use strict";

import { loadScript, loadCSS, hasFontAwesome } from './PoDaTools.js';
import { CONFIG } from './PoDaSupply.js';
import { PODA_BOOT } from './PoDaBoot.js';

// Load necessary styles
if (!window.podaBootLoaded) {
    if (!hasFontAwesome()) {
        loadCSS('https://use.fontawesome.com/releases/v5.3.1/css/all.css');
    }
    window.podaBootLoaded = true;
    var poda_player_container = document.querySelectorAll(".poda-player-container")[0];
    var ORG = poda_player_container.getAttribute("data-org");
    var PODA_STYLE_VERSION = ORG.slice(-7);
    loadScript((PODA_STYLE_VERSION == "sandbox" ? CONFIG.PODA_STYLE.SANDBOX : CONFIG.PODA_STYLE.PROD), console.log("Loaded PODA_STYLE"));
    PODA_BOOT(ORG);
}