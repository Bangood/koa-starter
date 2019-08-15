import Config from 'config';
import Koa from './utils/Koa';
new Koa(Config.get('port'));

process.on('unhandledRejection', err => {
    throw err;
});
