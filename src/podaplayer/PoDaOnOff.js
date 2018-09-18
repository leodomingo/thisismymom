// Class provides accessor functions to custom event listeners to 
// PoDa Player instances 
// Heavily (read: almost entirely) cribbed from Gavin's work on PoWaPlayer
import { extend } from './PoDaTools.js';

export class PODA_TRACK {
    constructor() {
        this.events = {};
    }
    on(event, handler, context) {
        if (event && handler) {
            context = context || handler;
            this.events[event] = this.events[event] || new Map();

            // We use a Map as this allows us to relate the clients handler
            // to the bound handler that we create here.
            this.events[event].set(handler, handler.bind(context));
        }
    }

    off(event, handler) {
        if (this.events[event]) {
            // If we maintained a simple array of handlers and the client
            // wanted to turn a handler 'off' we would not be able to identify
            // the bound handler via the handler the client supplied.
            this.events[event].delete(handler);
        }
    }

    trigger(event, data = {}) {
        data = extend({ type: event }, data);

        // 		if (data.type !== event) console.warn(`[${ MODULE }][trigger] event !== data.type (${ event } !== ${ data.type })`);

        // We use a Map instead of a WeakMap as we can not
        // iterate over a WeakMap.
        if (this.events['*']) {
            this.events['*'].forEach(handler => handler(data, event));
        }

        if (this.events[event]) {
            this.events[event].forEach(handler => handler(data, event));
        }
    }
}