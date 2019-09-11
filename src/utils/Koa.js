import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Logger from '../utils/Logger'
export default class Koa {
    app = new koa();
    constructor(port) {
        this.app.use(bodyParser());
        this.app.listen(port, () => {
            Logger.info(`http server listen on:${port}`)
        });
    }
}
