import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ff2d02ddce8f5e",
        pass: "19d624404d4337"
    }
});


//Class that uses MailAdapter to create the data of a Mail, but using nodemailer as the dependency
export class NodemailerMailAdapter implements MailAdapter {
    //sendMail() function from MailAdapter, uses SendMailData
    async sendMail({ subject, body }: SendMailData) {
        //sendMail() function from nodemailer
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Enzo Ribeiro <enzorib2@gmail.com',
            subject: subject,
            html: body
        })
    }
}