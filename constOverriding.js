// Constuctor Overriding



class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    // ... method lain disembunyikan
}

class WhatsAppService extends MailService {
    // overiding constructur
    constructor(sender, isBusiness) {
        super(sender);

        this.isBusiness = isBusiness;
    }
}

const mailService = new MailService('someReceiver'); // akan memanggil method constructor pada class MailService


console.log(mailService);