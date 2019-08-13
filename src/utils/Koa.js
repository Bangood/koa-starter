import koa from 'koa';
export default class Koa {
    app = new koa();
    constructor(port) {
        this.app.use(ctx => {
            ctx.body = 'hello koa starter';
        });
        this.app.listen(port);
    }
}
