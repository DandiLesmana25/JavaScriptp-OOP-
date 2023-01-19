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
        console.log('${this.nama} menyeruput kopi');
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