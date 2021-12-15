

const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
        service: "product-service"
    },
    transports: [
        new winston.transports.File({
            filename: "src/logs/product/error.log",
            level: "error"
        }),
        new winston.transports.File({
            filename: "src/logs/product/info.log",
            level: "info"
        }),
        new winston.transports.File({
            filename: "src/logs/product/combined.log",
        }),
    ]
})

module.exports=logger;