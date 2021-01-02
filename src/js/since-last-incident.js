$(function() {
    $hiredUI = $(".days-since-last-incident");
    $graduatedUI = $(".days-until-incident");
    var hired = new Date('May 21, 2017 09:00:00');
    var graduated = new Date('May 17, 2019 09:00:00');
    var notFiredOrGraduated = new Date();
    var daySinceHire = Math.ceil(((notFiredOrGraduated - hired) / (1000 * 60 * 60 * 24)));
    var daysUntilFreedom = Math.ceil(((notFiredOrGraduated - graduated) / (1000 * 60 * 60 * 24)));
    $hiredUI.text(daySinceHire);
    $graduatedUI.text(daysUntilFreedom);
});