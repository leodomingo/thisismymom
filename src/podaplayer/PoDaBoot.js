import {
    truncateTitle,
    switchToDesktop,
    switchToMobile
} from './PoDaTools.js';

import {
    addClass,
    removeClass,
} from './PoDaPack.js';
import { PODA_BUILD } from './PoDaBuild.js';
import { AudioPlayerContainer } from './PoDaClass.js';
import { CONFIG } from './PoDaSupply.js';




//dev endpoints
export function PODA_BOOT(org) {
    var mobile = false;
    var playerController = new AudioPlayerContainer();
    var podcast_container = document.querySelectorAll(".poda-player-container")[0];
    var window_width = podcast_container.getBoundingClientRect().width;
    var podcast_base_url = CONFIG.ORG_SETTINGS[org].api + "findBySlug/";
    var podcast_latest_url = CONFIG.ORG_SETTINGS[org].api + "findBySeriesSlug/";
    var series_base_url = CONFIG.ORG_SETTINGS[org].api + "series/";

    getPodcast(podcast_container);
    window.addEventListener('resize',
        function() {
            var window_width = podcast_container.getBoundingClientRect().width;

            if (!mobile) {
                setTimeout(truncateTitle(podcast_container), 400);
            }
            if (window_width > 528 && mobile) {
                mobile = false;
                switchToDesktop(podcast_container);
                //  setTimeout(truncateTitle(container), 400);
            } else if (window_width < 528 && !mobile) {
                mobile = true;
                addClass(podcast_container, "mobile");
                switchToMobile(podcast_container);
            }
        }, 500);


    function getPodcast(player_container) {
        fetch("/src/playerjson/episode.json")
            .then(function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json()
                    .then(function(podcast) {
                        getSeries(podcast, player_container);
                    })
            });
    }

    function getSeries(podcast, player_container) {
        fetch("/src/playerjson/series.json")
            .then(function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json()
                    .then(function(series) {
                        getImages(podcast, series, player_container);
                    })
            });
    }

    function getImages(podcast, series, player_container) {
        var coverImage = "https://www.washingtonpost.com/resizer/8rAXBgb_JkqRdzbF1QckSslfuPY=/600x600/podcast.posttv.com/series/20180716/t_1531710060137_name_rpod_tubman.jpg"
        var playerTemplate = PODA_BUILD(podcast, series, coverImage, org);
        player_container.innerHTML = playerTemplate;
        if (window_width < 528) {
            mobile = true;
            setTimeout(truncateTitle(player_container), 400);
            switchToMobile(player_container);
        } else {
            switchToDesktop(player_container);
        }
        playerController.addPlayer(player_container, podcast, series, coverImage);
    }

}