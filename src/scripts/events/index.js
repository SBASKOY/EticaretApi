
const nodemailer = require("nodemailer");
const eventEmitter = require("./eventsEmitter");
module.exports = () => {
    eventEmitter.on("send_email", (data) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        });
        transporter.sendMail({
            from: process.env.EMAIL_FROM,
            ...data
        }).then(res => console.log("EMAİL GÖNDERİLDİ"))
            .catch(err => console.log(err));
    })
}