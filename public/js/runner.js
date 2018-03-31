$(function() {
    const buttonArray = [$("#writing-button"), $("#code-button")];
    const sectionArray = [$("#write-blurb"), $("#code-blurb")];
    const items = $("img, .draggable");


    $(".draggable").draggable();
    $('.right-menu').velocity({
        properties: { scale: 1.02 },
        options: { duration: 100, loop: true, delay: 1000 }
    });
    buttonArray.forEach(function(button, index) {
        button.click(() => {
            scrollTo(sectionArray[index]);
        })
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            scaleOut();
        }
    })

});

function scrollTo($section) {
    // Remove "link" from the ID
    // Scroll
    $('html,body').animate({
            scrollTop: $section.offset().top - 500
        },
        'slow');
}

function scaleOut() {
    $firstName = $(".first-name");
    $lastName = $(".last-name");
    $firstName.velocity({
        properties: { width: 150, top: 15, left: 5 },
    });
    $lastName.velocity({
        properties: { width: 300, top: 65, left: 5 },
    });
}