import Config from 'config';
import Koa from './utils/Koa';
new Koa(Config.get('port'));
