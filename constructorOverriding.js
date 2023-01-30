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
        super(sender); //pemanggilan super() tidak boleh terlewatkan karena akan menyebabkan error
        this.isBusiness = isBusiness;

    }
}

const mailService = new MailService('someReceiver'); // pembuatan objek juga akan memanggil method constructor pada class MailService


console.log(mailService);