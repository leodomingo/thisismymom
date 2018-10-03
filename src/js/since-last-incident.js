$(function() {
    $timeUI = $(".days-since-last-incident");
    var hired = new Date('May 21, 2017 09:00:00');
    var notFired = new Date();
    days = Math.ceil(((notFired - hired) / (1000 * 60 * 60 * 24)));
    $timeUI.text(days);
    // console.log($timeUI);
});