$(function() {
    const buttonArray = [$("#writing-button"), $("#code-button")];
    const sectionArray = [$("#writing"), $("#code")];
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

});

function scrollTo($section) {
    // Remove "link" from the ID
    // Scroll
    $('html,body').animate({
            scrollTop: $section.offset().top
        },
        'slow');
}