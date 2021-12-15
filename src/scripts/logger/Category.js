

const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
        service: "category-service"
    },
    transports: [
        new winston.transports.File({
            filename: "src/logs/category/error.log",
            level: "error"
        }),
        new winston.transports.File({
            filename: "src/logs/category/info.log",
            level: "info"
        }),
        new winston.transports.File({
            filename: "src/logs/category/combined.log",
        }),
    ]
})

module.exports=logger;