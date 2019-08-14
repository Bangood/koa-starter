import mongoose from 'mongoose';
import config from 'config';
import Logger from '../utils/Logger';
const mongodbUrl = config.get('mongodbUrl');
export default class MongoDB {
    static instance = null;
    constructor() {
        if (new.target === MongoDB) {
            throw new Error('本类不能实例化');
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = mongoose.createConnection(mongodbUrl, { useNewUrlParser: true, useFindAndModify: false, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 10, useCreateIndex: true, autoIndex: false });
            this.instance.once('open', () => {
                Logger.info(`mongodb数据库已连接:${mongodbUrl}`);
            });
            this.instance.once('close', () => {
                Logger.info(`mongodb数据库已断开:${mongodbUrl}`);
            })
            this.instance.on('error', (err) => {
                Logger.error(`mongodb错误:${err}`);
            })
        }
        return this.instance;
    }
}
