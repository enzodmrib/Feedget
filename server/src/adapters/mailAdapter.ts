//Adapter global layer
//Creates the data type of the Mail
export interface SendMailData {
    subject: string;
    body: string;
}
//Creates the function to create Mail, in which the data will have the Mail properties
export interface MailAdapter {
    sendMail: (data: SendMailData) => Promise<void>;
}