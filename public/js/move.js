class ScrollJack {
    constructor() {
        this.elements = (() => {
            var $window = $(window);
            var elementArray = $(".scrollable").toArray();
            var scrollItems = []
            for (var item in elementArray) {
                var thisItem = new scrollItem($(elementArray[item]));
                scrollItems.push(thisItem);
            }
            return scrollItems;
        })();
    }
}

class scrollItem {
    constructor(object) {
        this.$ui = object;
        this.speed = parseInt(object.attr("data-speed"));
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    update(scrollTop) {
        this.$ui.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    }
}


$(function() {
    $window = $(window);
    var scrollMaster = new ScrollJack()
    console.log(scrollMaster.elements)
    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        scrollMaster.elements.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
});


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}