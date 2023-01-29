//pendeklarasian class
class Orang {
    constructor(nama, kulit, usia, alamat) {
        this.nama = nama;
        this.kulit = kulit;
        this.usia = usia;
        this.alamat = alamat;
    }


    // method
    ngopi() {
        console.log(`${this.nama} menyeruput kopi`);
    }
    makan() {
        console.log(`${this.nama} memakan gorengan`);
    }
    berenang() {
        console.log(`${this.nama} ${this.alamat} berenang di pantai`);
    }


}


//  Membuat objek 
const orang1 = new Orang('Aceng', 'Putih', 25, 'Karawang');
const orang2 = new Orang('Ubed', 'Sawo', 20, 'Bandung');
const orang3 = new Orang('Gayus', 'Hitam', 29, 'Bali');


// menampilkan objek
console.log(orang1);
console.log(orang2);
console.log(orang3);


// memanggil method
orang1.ngopi();
orang2.makan();
orang3.berenang();