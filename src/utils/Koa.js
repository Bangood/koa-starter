import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import ExtendableError from 'es6-error';
import Logger from '../utils/Logger'
import component from '../components';
export default class Koa {
    app = new koa();
    constructor(port) {
        this.app.use(bodyParser());

        this.app.use(async (ctx, next) => {
            try {
                await next()
            } catch (err) {
                if (err instanceof ExtendableError) {
                    ctx.status = err.status;
                    ctx.body = err.body;
                } else {
                    ctx.status = 500;
                    ctx.body = {
                        errors: [{
                            message: err.message,
                            stack: err.stack, // remove in production
                        }]
                    }
                }
            }
        })
        this.app.use(component.routes());
        this.app.listen(port, () => {
            Logger.info(`http server listen on:${port}`)
        });
    }
}
