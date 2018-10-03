!function(e){var t={};function a(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=7)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extend=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];return Object.assign.apply(Object,[{},e].concat(a))},t.loadScript=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=document.createElement("script"),o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(i,o),i.onerror=a,i.onload=t,i.type="text/javascript",i.async=!0,i.src=e},t.loadCSS=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){console.log("loaded icons")},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){console.log("error loading icons")},i=document.createElement("link");document.getElementsByTagName("head")[0].appendChild(i),i.onerror=a,i.onload=t,i.type="text/css",i.rel="stylesheet",i.href=e},t.formatTime=function(e){var t=Math.floor(e/60),a=e%60<10?"0"+Math.round(e%60).toString():Math.round(e%60);return t+":"+a},t.composeOmnitureData=function(e,t,a){var i=window.s||{};return{pageName:i.pageName,eVar1:i.pageName,eVar8:i.eVar8,eVar61:i.eVar2+":"+e.slug+":"+a+":"+t.slug.substring(0,255),prop5:i.prop5}},t.composeEventData=function(e,t){return{slug:t.slug,series:e.slug,publicationDate:t.publicationDisplayDate,timestamp:Date.now()}},t.truncateTitle=function(e){var t="#"+e.getAttribute("data-slug")+"-title",a=e.getBoundingClientRect();if(a.width>528){var i=document.querySelectorAll(t)[0];if(i){i.text=i.getAttribute("data-title");for(var o=a.height,n=Math.floor(o/25);n>3;){var s=i.text.split(" "),r=s.slice(0,s.length-1).join(" ")+"...";i.text=r,n=Math.floor(i.getBoundingClientRect().height/25)}}}},t.hasFontAwesome=function(){var e=document.createElement("span");e.className="fa",e.style.display="none",document.body.insertBefore(e,document.body.firstChild);var t="FontAwesome"===getComputedStyle(e).fontFamily;return document.body.removeChild(e),t},t.switchToMobile=function(e){(0,i.addClass)(e,"mobile"),document.querySelectorAll(".open-subscription-overlay-button").forEach(function(e){e.text="Subscribe to Podcast"}),document.querySelectorAll(".podcast-image-container").forEach(function(e){e.style.display="none"}),document.querySelectorAll(".podcast-mobile-cover-image").forEach(function(e){e.style.display="block"}),[".podcast-image",".open-subscription-overlay-button",".podcast-title",".podcast-series",".podcast-image",".podcast-image-container",".podcast-audio-container",".podcast-title-container",".subscription-overlay",".subscription-overlay-button-container",".subscription-overlay-link-container",".subscription-overlay-exit",".progress-bar-container",".play-bar"].forEach(function(e){var t=document.querySelectorAll(e);t.forEach(function(e){(0,i.addClass)(e,"mobile")})})},t.switchToDesktop=function(e){(0,i.removeClass)(e,"mobile"),document.querySelectorAll(".open-subscription-overlay-button").forEach(function(e){e.text="Subscribe"}),document.querySelectorAll(".podcast-image-container").forEach(function(e){e.style.display="block"}),document.querySelectorAll(".podcast-mobile-cover-image").forEach(function(e){e.style.display="none"}),[".podcast-image",".open-subscription-overlay-button",".podcast-title",".podcast-series",".podcast-image",".podcast-image-container",".podcast-audio-container",".podcast-title-container",".subscription-overlay",".subscription-overlay-button-container",".subscription-overlay-link-container",".subscription-overlay-exit",".progress-bar-container",".play-bar"].forEach(function(e){var t=document.querySelectorAll(e);t.forEach(function(e){(0,i.removeClass)(e,"mobile")})})};var i=a(2)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONFIG={PODA_STYLE:{SANDBOX:"//d2lhouwh993x2g.cloudfront.net/sandbox/style.js",PROD:"//d2lhouwh993x2g.cloudfront.net/prod/style.js"},ORG_SETTINGS:{"washpost-sandbox":{api:"https://audio-api.sandbox.washpost.arcpublishing.com/api/v1/audio/",podtrac:!0},washpost:{api:"https://audio-api.washpost.arcpublishing.com/api/v1/audio/",podtrac:!0},tgam:{api:"https://audio-api.tgam.arcpublishing.com/api/v1/audio/",podtrac:!1},"tgam-sandbox":{api:"https://audio-api.sandbox.tgam.arcpublishing.com/api/v1/audio/",podtrac:!1}}},t.PODAPLAYER_EVENTS={BEGIN_PLAYBACK:"podaBeginPlayback",PAUSE_PLAYBACK:"podaPausePlayback",RESTART_PLAYBACK:"podaRestartPlayback",SKIP_AHEAD:"podaSkipAhead",SKIP_BACKWARD:"podaSkipBackward",QUARTILE_25:"podaQuartile25",QUARTILE_50:"podaQuartile50",QUARTILE_75:"podaQuartile75",PLAYBACK_COMPLETE:"podaPlayBackComplete",POD_SUBSCRIBE:{alexa:"podaSubAlexa",applePodcasts:"podaSubApplePodcasts",googlePlay:"podaGooglePlay",spotify:"podaSubSpotify",tuneIn:"podaSubTuneIn",radioPublic:"podaSubRadioPublic",iHeartRadio:"podaSubIHeartRadio",rss:"podaSubRSS"}}},function(e,t,a){"use strict";function i(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasClass=i,t.addClass=function(e,t){i(e,t)||(e.classList?e.classList.add(t):i(e,t)||(e.className+=" "+t))},t.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PODA_BOOT=function(e){var t=!1,a=new s.AudioPlayerContainer,u=document.querySelectorAll(".poda-player-container")[0],l=u.getBoundingClientRect().width;r.CONFIG.ORG_SETTINGS[e].api,r.CONFIG.ORG_SETTINGS[e].api,r.CONFIG.ORG_SETTINGS[e].api;function c(o,s){fetch("/src/playerjson/series.json").then(function(r){200===r.status?r.json().then(function(r){!function(o,s,r){var u="https://podcast.posttv.com/series/20180716/t_1531710060137_name_rpod_tubman.jpg",c=(0,n.PODA_BUILD)(o,s,u,e);r.innerHTML=c,l<528?(t=!0,setTimeout((0,i.truncateTitle)(r),400),(0,i.switchToMobile)(r)):(0,i.switchToDesktop)(r);a.addPlayer(r,o,s,u)}(o,r,s)}):console.log(r.status)})}(function(e){fetch("/src/playerjson/episode.json").then(function(t){200===t.status?t.json().then(function(t){c(t,e)}):console.log(t.status)})})(u),window.addEventListener("resize",function(){var e=u.getBoundingClientRect().width;t||setTimeout((0,i.truncateTitle)(u),400),e>528&&t?(t=!1,(0,i.switchToDesktop)(u)):e<528&&!t&&(t=!0,(0,o.addClass)(u,"mobile"),(0,i.switchToMobile)(u))},500)};var i=a(0),o=a(2),n=a(4),s=a(5),r=a(1)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PODA_BUILD=function(e,t,a,o){var n=e.audio.url.substring(e.audio.url.indexOf("//")+2,e.audio.url.length);return'<audio id="'+e.slug+'" src="//'+n+'" type="audio/mp3" preload="none"></audio>\n            <div class="subscription-overlay">\n                    <div class="subscription-overlay-title">Subscribe on: </div>\n                    <div class="subscription-overlay-exit"><i class="fa fa-times"></i></div>\n                    <div class="subscription-overlay-link-container"> <a id="alexa" class="subscription-overlay-link" target="_blank">Alexa</a> <a id="applePodcasts" class="subscription-overlay-link" target="_blank">Apple Podcasts</a><a id="googlePlay" class="subscription-overlay-link" target="_blank">Google Podcasts</a>\n                        <a id="spotify" class="subscription-overlay-link" target="_blank">Spotify</a> <a id="stitcher" class="subscription-overlay-link" target="_blank">Stitcher</a> <a id="tuneIn" class="subscription-overlay-link" target="_blank">TuneIn</a>\n                        <a id="radioPublic" class="subscription-overlay-link" target="_blank">RadioPublic</a> <a id="iheartRadio" class="subscription-overlay-link" target="_blank">iHeartRadio</a> <a id="rss" class="subscription-overlay-link" target="_blank">RSS</a> </div>\n                </div>\n                <div class="podcast-image-container "> <img id="cover" class="podcast-image" src="'+a+'"> </div>\n                <div class="podcast-audio-container">\n                    <div class="podcast-audio">\n<div class="podcast-series"><a class="series-link" href="https://www.washingtonpost.com/podcasts/'+t.slug+'/?tid=pod_navfromplayer"> '+t.title+' | Podcast</a> </div>\n                        <div class="podcast-title-container">\n                            <div id="'+e.slug+'-title" class="podcast-title"  data-title="'+e.title+'">'+e.title+'</div><img class="podcast-mobile-cover-image" src="'+a+'"></div>\n                        <div class="open-subscription-overlay-button">Subscribe</div>\n                        <div class="play-bar-screen"></div>\n                        <div class="play-bar">\n                            <div class="podcast-elapsed">0:00</div>\n                            <div class="skip-back-button clickable">\n                                <div class="skip-button"><i class="fa fa-undo-alt"></i></div>\n                                <div class="skip-button-text">15</div>\n                            </div>\n                            <div class="play-button-container clickable"> <i class="play-button fa fa-play"></i> </div>\n                            <div class="skip-forward-button clickable">\n                                <div class="skip-button"><i class="fa fa-redo-alt"></i></div>\n                                <div class="skip-button-text">15</div>\n                            </div>\n                            <div class="podcast-duration">'+(0,i.formatTime)(e.duration)+'</div>\n                        </div>\n                        <div class="podcast-progress-bar-screen"></div>\n                        <div id="progress-bar-container" class="progress-bar-container">\n                            <div class="podcast-progress-bar">\n                                <div class="podcast-progress-point"></div>\n                            </div> <span id="buffer-bar" class="buffer-bar"></span> </div>\n                    </div>\n                </div>'};var i=a(0);a(1)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayerContainer=t.AudioPlayer=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),o=a(0),n=a(2),s=a(6),r=a(1);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=new WeakMap,c=t.AudioPlayer=function(){function e(t,a,i){var c=this;u(this,e);var d=new s.PODA_TRACK;l.set(this,d),window.podas=window.podas||{},(0,o.truncateTitle)(t),this.mouseMoveHandler=function(e){var t;e.preventDefault(),c.state.click=!1,t="buffer-bar"==e.target.className||"podcast-progress-point"==e.target.className?e.offsetX+e.target.offsetLeft:e.offsetX,c.updateProgressBar(t),c.audio.currentTime=c.audio.duration*(t/c.progressBarContainerWidth)},this.podcast=a,this.series=i,this.container=t,this.color=i.color,this.state={click:!1,sentPause:!1,quartile:{q25:!1,q50:!1,q75:!1,q100:!1},prePlay:!0},this.audio=function(){var e=t.querySelectorAll("#"+a.slug)[0];return e.addEventListener("timeupdate",function(){return c.updateProgressBar()}),e.addEventListener("ended",function(){c.setPrePlayState(),c.sendQuartile(c.podcast,"100-quartile","event-134"),c.trigger(r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE,(0,o.composeEventData)(i,a,r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE))}),e.addEventListener("progress",function(e){return c.updateProgress(e)}),e.addEventListener("pause",function(e){(0,n.removeClass)(c.playButton.children[0],"fa-pause"),(0,n.removeClass)(c.playButton.children[0],"pause-button"),(0,n.addClass)(c.playButton.children[0],"fa-play"),(0,n.addClass)(c.playButton.children[0],"play-button")}),e.addEventListener("play",function(e){(0,n.addClass)(c.playButton.children[0],"fa-pause"),(0,n.addClass)(c.playButton.children[0],"pause-button"),(0,n.removeClass)(c.playButton.children[0],"fa-play"),(0,n.removeClass)(c.playButton.children[0],"play-button")}),e}(),this.publicationDate=function(){var e=a.publicationDate,t=new Date(1*e),i=t.getFullYear().toString(),o=t.getMonth().toString(),n=t.getDate().toString();return o<10&&(o="0"+o),n<10&&(n="0"+n),i+o+n}(),this.skipForwardButton=function(){var e=t.querySelectorAll(".skip-forward-button")[0];return e.addEventListener("click",function(){var e=(0,o.composeOmnitureData)(i,a,c.publicationDate);"function"==typeof window.sendDataToOmniture&&window.sendDataToOmniture("podcast-skip-ahead","event14",e),c.trigger(r.PODAPLAYER_EVENTS.SKIP_AHEAD,(0,o.composeEventData)(i,a,r.PODAPLAYER_EVENTS.SKIP_AHEAD)),c.skip(!0)}),e}(),this.skipBackwardButton=function(){var e=t.querySelectorAll(".skip-back-button")[0];return e.addEventListener("click",function(){var e=(0,o.composeOmnitureData)(i,a,c.publicationDate);"function"==typeof window.sendDataToOmniture&&window.sendDataToOmniture("podcast-skip-back","event15",e),c.trigger(r.PODAPLAYER_EVENTS.SKIP_BACKWARD,(0,o.composeEventData)(i,a,r.PODAPLAYER_EVENTS.SKIP_BACKWARD)),c.skip(!1)}),e}(),this.progressBarContainer=function(){var e=t.querySelectorAll(".progress-bar-container")[0];return e.addEventListener("mousedown",function(e){return c.updatePlayHead(e,c)}),e}(),this.progressBarContainerWidth=c.progressBarContainer.getBoundingClientRect().width,this.playBarScreen=t.querySelectorAll(".play-bar-screen")[0],this.progressBar=function(){var e=t.querySelectorAll(".podcast-progress-bar")[0];return e.style["background-color"]=i.color,e}(),this.timeStamp=t.querySelectorAll(".podcast-elapsed")[0],this.durationStamp=t.querySelectorAll(".podcast-duration")[0],this.playButton=function(){var e=t.querySelectorAll(".play-button-container")[0];return e.style["background-color"]=i.color,e.style.border=i.color,e}(),this.subscriptionOverlay=function(){var e=["alexa","applePodcasts","googlePlay","spotify","stitcher","tuneIn","radioPublic","iheartRadio","rss"],n=0;for(var s in e){var u=e[s],l=t.querySelectorAll("#"+e[s])[0];i.subscriptionLinks[u]?(u in["alexa","applePodcasts","googlePlay"]&&(n+=1),l.href=i.subscriptionLinks[u],l.addEventListener("click",function(e){if("function"==typeof window.sendDataToOmniture){var t={pageName:window.s.pageName,eVar1:window.s.pageName,eVar8:window.s.eVar8,eVar26:"podsubscribe-"+c.series.slug+"_"+e.target.id,eVar61:window.s.eVar2+":"+c.series.slug+":"+c.publicationDate+":"+c.podcast.slug.substring(0,255),prop5:window.s.prop5};window.sendDataToOmniture("podcast-subscribe","event80",t)}c.trigger(r.PODAPLAYER_EVENTS.POD_SUBSCRIBE[u],(0,o.composeEventData)(i,a,r.PODAPLAYER_EVENTS.POD_SUBSCRIBE[u]))})):l.remove()}return 1==n&&(t.querySelectorAll(".subscription-overlay-button")[0].style["border-radius"]="5px"),t.querySelectorAll(".subscription-overlay")[0]}(),this.openSubscriptionOverlayButton=function(){var e=t.querySelectorAll(".open-subscription-overlay-button")[0];return e.addEventListener("click",function(){c.subscriptionOverlay.style.opacity=1,c.subscriptionOverlay.style["z-index"]=200}),e}(),this.exitSubscriptionOverlayButton=function(){var e=t.querySelectorAll(".subscription-overlay-exit")[0];return e.addEventListener("click",function(){c.subscriptionOverlay.style.opacity=0,c.subscriptionOverlay.style["z-index"]=-1}),e}()}return i(e,[{key:"play",value:function(){this.audio.currentTime>-1&&!this.audio.paused&&!this.audio.ended&&this.audio.readyState>2||(this.state.prePlay&&this.setPlayState(),this.audio.play())}},{key:"pause",value:function(){var e=this.audio.currentTime>-1&&!this.audio.paused&&!this.audio.ended;this.audio.currentTime>1&&(this.state.sentPause=!0),e&&this.audio.pause()}},{key:"skip",value:function(e){this.audio.currentTime>0&&!this.audio.paused&&!this.audio.ended&&this.audio.readyState;var t=this.audio.currentTime;e?t+=15:t-=15;var a=t>this.audio.duration;a||t<0?a?(this.setPrePlayState(),this.sendQuartile(this.podcast,"100-quartile","event-134"),this.trigger(r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE,(0,o.composeEventData)(series,podcast,r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE))):this.audio.currentTime=0:this.audio.currentTime=t}},{key:"setPrePlayState",value:function(){this.state.prePlay=!0,this.playBarScreen.style.display="block",this.skipForwardButton.style.color="#e9e9e9",this.skipBackwardButton.style.color="#e9e9e9",this.container.querySelectorAll(".skip-button")[0].style.color="#e9e9e9",this.audio.currentTime=0,this.pause(),this.container.querySelectorAll(".buffer-bar")[0].remove()}},{key:"setPlayState",value:function(){this.skipForwardButton.style.color=this.color,this.skipBackwardButton.style.color=this.color,this.container.querySelectorAll(".skip-button")[0].style.color=this.color,this.playBarScreen.style.display="none",this.state.prePlay=!1}},{key:"findQuartile",value:function(e){e>=1?this.state.quartile.q100||(this.state.quartile.q100=!0,this.sendQuartile(this.series,this.podcast,"100-quartile","event134"),this.trigger(r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE,(0,o.composeEventData)(this.series,this.podcast,r.PODAPLAYER_EVENTS.PLAYBACK_COMPLETE))):e>=.75?this.state.quartile.q75||(this.state.quartile.q75=!0,this.sendQuartile(this.series,this.podcast,"75-quartile","event133"),this.trigger(r.PODAPLAYER_EVENTS.QUARTILE_75,(0,o.composeEventData)(this.series,this.podcast,r.PODAPLAYER_EVENTS.QUARTILE_75))):e>=.5?this.state.quartile.q50||(this.state.quartile.q50=!0,this.sendQuartile(this.series,this.podcast,"50-quartile","event132"),this.trigger(r.PODAPLAYER_EVENTS.QUARTILE_50,(0,o.composeEventData)(this.series,this.podcast,r.PODAPLAYER_EVENTS.QUARTILE_50))):e>=.25&&(this.state.quartile.q25||(this.state.quartile.q25=!0,this.sendQuartile(this.series,this.podcast,"25-quartile","event131"),this.trigger(r.PODAPLAYER_EVENTS.QUARTILE_25,(0,o.composeEventData)(this.series,this.podcast,r.PODAPLAYER_EVENTS.QUARTILE_25))))}},{key:"sendQuartile",value:function(e,t,a,i){if("function"==typeof window.sendDataToOmniture){var n=(0,o.composeOmnitureData)(e,t,this.publicationDate);window.sendDataToOmniture(a,i,n)}}},{key:"updateProgressBar",value:function(e){var t=e;if(!t){var a=Math.round(this.audio.currentTime),i=(0,o.formatTime)(a);this.timeStamp.innerHTML=i,t=Math.round(a/this.audio.duration*(this.progressBarContainerWidth-18));var n=a/this.audio.duration;this.findQuartile(n)}this.progressBar.style.width=t+18+"px"}},{key:"updateProgress",value:function(){var e=this.audio,t=0!=e.buffered.length?e.buffered.length-1:0;0!=e.buffered.length&&(this.container.querySelectorAll(".buffer-bar")[0].style.width=e.buffered.end(t)/e.duration*100+"%")}},{key:"updatePlayHead",value:function(e){var t=this;e.preventDefault();var a=!0;this.state.click=!0;var i=e.target;document.addEventListener("mouseup",function(e){if(e.preventDefault(),t.progressBarContainer.removeEventListener("mousemove",t.mouseMoveHandler),a)if("buffer-bar"==i.className||"podcast-progress-point"==e.target.className){t.updateProgressBar(e.offsetX+e.target.offsetLeft);var o=t.audio.duration*((e.offsetX+e.target.offsetLeft)/t.progressBarContainerWidth);t.progressBarContainer.removeEventListener("mousemove",t.mouseMoveHandler),t.audio.currentTime=o,a=!1}else{if(t.audio.played.length>0)t.audio.currentTime=t.audio.duration*(e.offsetX/t.progressBarContainerWidth),t.progressBarContainer.removeEventListener("mousemove",t.mouseMoveHandler),a=!1;else{t.updateProgressBar(e.offsetX),t.progressBarContainer.removeEventListener("mousemove",t.mouseMoveHandler);var n=e.offsetX/t.progressBarContainerWidth;t.audio.addEventListener("waiting",function(){}),t.audio.addEventListener("loadedmetadata",function(){var e=this.audio.duration*n;this.audio.currentTime=e,a=!1},!0)}}}),this.progressBarContainer.addEventListener("mousemove",this.mouseMoveHandler)}},{key:"restartAudio",value:function(){this.audio.currentTime=0,this.pause()}},{key:"on",value:function(e,t,a){l.get(this).on(e,t)}},{key:"off",value:function(e,t,a){l.get(this).off(e,t)}},{key:"trigger",value:function(e,t,a){l.get(this).trigger(e,t)}}]),e}();t.AudioPlayerContainer=function(){function e(){u(this,e),this.players=[]}return i(e,[{key:"addPlayer",value:function(e,t,a,i){var n=this,s=new c(e,t,a,i);s.progressBarContainer.addEventListener("updatedPlayHead",function(e){return n.pauseAll(e)}),s.playButton.addEventListener("click",function(){var e=(0,o.composeOmnitureData)(a,t,s.publicationDate);if(s.audio.paused){if(s.audio.paused){n.pauseAll(),s.play();var i="podcast-begin-playback",u="event130";s.state.sentPause?(i="podcast-unpause-playback",u="event138",s.trigger(r.PODAPLAYER_EVENTS.RESTART_PLAYBACK,(0,o.composeEventData)(s.series,t))):s.trigger(r.PODAPLAYER_EVENTS.BEGIN_PLAYBACK,(0,o.composeEventData)(s.series,t)),"function"==typeof window.sendDataToOmniture&&window.sendDataToOmniture(i,u,e)}}else s.pause(),0==s.state.sentPause&&(s.state.sentPause=!0),"function"==typeof window.sendDataToOmniture&&window.sendDataToOmniture("podcast-pause-playback","event135",e),s.trigger(r.PODAPLAYER_EVENTS.PAUSE_PLAYBACK,(0,o.composeEventData)(s.series,t,r.PODAPLAYER_EVENTS.PAUSE_PLAYBACK))}),this.players.push(s),window.podas[t.slug]=s}},{key:"pauseAll",value:function(){this.players.forEach(function(e){e.pause()})}},{key:"get",value:function(){return this._players}},{key:"set",value:function(e){this._players=e}},{key:"get",value:function(){return this._state}},{key:"set",value:function(e){this._state=e}}]),e}()},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PODA_TRACK=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),o=a(0);t.PODA_TRACK=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}return i(e,[{key:"on",value:function(e,t,a){e&&t&&(a=a||t,this.events[e]=this.events[e]||new Map,this.events[e].set(t,t.bind(a)))}},{key:"off",value:function(e,t){this.events[e]&&this.events[e].delete(t)}},{key:"trigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=(0,o.extend)({type:e},t),this.events["*"]&&this.events["*"].forEach(function(a){return a(t,e)}),this.events[e]&&this.events[e].forEach(function(a){return a(t,e)})}}]),e}()},function(e,t,a){"use strict";var i=a(0),o=a(1),n=a(3);if(!window.podaBootLoaded){(0,i.hasFontAwesome)()||(0,i.loadCSS)("https://use.fontawesome.com/releases/v5.3.1/css/all.css"),window.podaBootLoaded=!0;var s=document.querySelectorAll(".poda-player-container")[0].getAttribute("data-org"),r=s.slice(-7);(0,i.loadScript)("sandbox"==r?o.CONFIG.PODA_STYLE.SANDBOX:o.CONFIG.PODA_STYLE.PROD,console.log("Loaded PODA_STYLE")),(0,n.PODA_BOOT)(s)}}]);