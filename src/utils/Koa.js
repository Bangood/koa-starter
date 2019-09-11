import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Logger from '../utils/Logger'
import component from '../components';
export default class Koa {
    app = new koa();
    constructor(port) {
        this.app.use(bodyParser());
        this.app.use(component.routes())
        this.app.listen(port, () => {
            Logger.info(`http server listen on:${port}`)
        });
    }
}
