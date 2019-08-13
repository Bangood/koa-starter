import Winston from 'winston';
import 'winston-daily-rotate-file';

export default class Logger {
    
    static _logger;
    constructor() {
        if(new.target===Logger){
            throw new Error('本类不能实例化');
        }
    }
    static set logger(value){
        const myFormat = Winston.format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
        })
        
        let transport = new Winston.transports.Console({handleExceptions:true});
        if (process.env.NODE_ENV === 'production') {
            transport = new (Winston.transports.DailyRotateFile)({
                dirname: 'logs/all',
                filename: '%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                colorize: true,
                maxSize: '20m',
                maxFiles: '14d',
            });
        }
        const logger = Winston.createLogger({
            transports: [
                transport,
            ],
            format: Winston.format.combine(
                Winston.format.colorize(),
                Winston.format.label({ label: `pid:${process.pid}` }),
                Winston.format.timestamp({
                    format:'YYYY-MM-DD HH:mm:ss'
                }),
                myFormat,
                
            )
        });
        Logger._logger = logger;
    }
    static get logger(){
        if(!Logger._logger){
            Logger.logger = null;
        }
        return Logger._logger;
    }
    static info(options) {
        Logger.logger.info(options);
    }
    static warn(options) {
        Logger.logger.warn(options);
    }
    static error(options) {
        Logger.logger.error(options);
    }

}