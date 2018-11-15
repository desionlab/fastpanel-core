/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { 
  Injectable,
  Container,
  IServiceDefines
} from './Di';

/**
 * Class Application.
 * 
 * A wrapper to combine all components into a single events context.
 * 
 * @version 1.0.0
 */
export class Application extends Injectable {
  
  /**
   * Flag a app is ready.
   */
  public startup: boolean = false;

  /**
   * List of installed services and add-ons.
   */
  protected services: Array<IServiceDefines>;

  /**
   * Application constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);

    /* Linked self. */
    this.di.set('context', () => {
      return this;
    });
  }

  /**
   * Initialization app.
   */
  public async init () : Promise<any> {}

  /**
   * Add a service object to the list of running.
   * 
   * @param service Target service object.
   */
  public addService (service: IServiceDefines) : Application {
    this.services.push(service);
    return this;
  }

  /**
   * Add a service by name to the list of running.
   * 
   * @param service Target service name.
   */
  public addExternalService (service: string) : Application {
    let instant: IServiceDefines = require(service);
    this.services.push(instant);
    return this;
  }

}

/* End of file Application.ts */