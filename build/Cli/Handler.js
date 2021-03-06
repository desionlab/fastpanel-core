"use strict";
/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("./../Application");
/**
 * Class Handler
 *
 * Cli handler.
 *
 * @version 1.0.0
 */
class Handler extends Application_1.Application {
    /**
     * Handler constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Initialization cli handler.
     */
    async init() {
        /* Call parent. */
        await super.init();
        /* Register dev tools commands. */
        if (this.config.get('Env.NODE_ENV', 'develop') == 'develop') {
            /* Register setup command. */
            const { Setup } = require('../Commands/Setup');
            (new Setup(this.di)).initialize();
        }
        /* Fire event. */
        this.events.emit('cli:getCommands', this.cli);
        /* Set ready flag. */
        this.isStartup = true;
    }
}
exports.Handler = Handler;
/* End of file Handler.ts */ 
