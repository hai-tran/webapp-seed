import * as Boom from 'boom';
import * as Hapi from 'hapi';

export class BaseController {
  protected Boom: any = Boom;
  private notFoundMsg: string;

  constructor(notFoundMsg = '') {
    this.Boom = Boom;
    this.notFoundMsg = notFoundMsg;
  }

  async handleRequest(func: any, reply: Hapi.IReply) {
    try {
      const response = await func;

      if ((Array.isArray(response) && response.length) || response > 0) {
        reply(response);
      } else {
        throw Error('Not Found');
      }
    } catch (err) {
      reply(this.Boom.notFound(this.notFoundMsg));
    }
  }
}
