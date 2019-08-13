import koa from 'koa';
export default class Koa {
    constructor(port) {
        this.app = new koa();
        this.app.use(ctx => {
            ctx.body = 'hello koa starter';
        });
        this.app.listen(port);
    }
}
