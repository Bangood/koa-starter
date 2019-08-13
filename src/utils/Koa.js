import koa from 'koa';
import Logger from '../utils/Logger'
export default class Koa {
    app = new koa();
    constructor(port) {
        this.app.use(ctx => {
            ctx.body = 'hello koa starter';
        });
        this.app.listen(port,()=>{
            Logger.info(`http server listen on:${port}`)
        });
    }
}
