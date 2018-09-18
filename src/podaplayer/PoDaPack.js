// Helper functions for DOM manipulation
// Cribbed directly from PoWaPlayer's PoWaPack.js (thank you gavin)


export function hasClass(element, className) {
    return element.classList ? element.classList.contains(className) :
        new RegExp(`\\b${ className }\\b`).test(element.className);
}

export function addClass(element, className) {
    if (!hasClass(element, className)) {
        if (element.classList) element.classList.add(className);
        else if (!hasClass(element, className)) element.className += ` ${ className }`;
    }
}

export function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else element.className = element.className.replace(new RegExp(`\\b${ className }\\b`, 'g'), '');
}