"use strict";
/**
 * Redis.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
exports.default = {
    async register(context) {
        context.di.set('redis', (container, params) => {
        }, false);
    },
    async startup(context) {
    }
};
/* End of file Redis.ts */ 
