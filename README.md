# JavaScriptp-OOP-
Object-Oriented Programming in JavaScript


Object-oriented programming or abbreviated OOP is a programming paradigm that is widely applied when building applications.
The OOP paradigm is thick with the concept of objects that contain two things, namely attributes and methods.
In addition, OOP is also thick with the concept of object blueprints, which are familiarly known as classes.


//Properti
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

//Properti Getter dan Setter
ada dua tipe properti, yaitu data property dan accessor property.
Data property merupakan properti yang umum kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.
Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.

//Method
Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class.

//Member Visibility
pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private

 cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.

 //inheritence
 Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class induk (superclass) dan sifat tersebut nantinya diwarisi kepada class di bawahnya (subclass). Kemudian pada subclass, kita bisa menambahkan kemampuan lain yang lebih spesifik.

//Overriding
 Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-ny


#Constuctor Overriding
Overriding constructor dilakukan sesimpel kita mendefinisikan kembali method constructor() pada sebuah subclass. 
Selain itu, method constructor didefinisikan dengan perubahan sesuai kebutuhan kita, misalnya menambahkan menambahkan properti dan argumen isBusiness. Satu hal yang penting dalam penerapan constructor overriding adalah jangan sampai lupa untuk memanggil method super(). 
Memanggil method super() artinya memanggil constructor superclass, yaitu MailService

 Constructor akan mengembalikan objek yang merupakan instance dari class tersebut. Perbedaan dengan method pada umumnya, pada constructor kita tidak perlu menulis return ketika hendak mengembalikan nilai karena sudah dilakukan secara implisit.
 Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainya

 //Method Overriding
 Konsep overriding juga bisa diterapkan pada method class.
 Method overriding biasanya dilakukan ketika kita ingin mengubah implementasi method warisan superclass.
 Contohnya, pada class MailService terdapat method send() yang sudah didefinisikan implementasinya. Namun, jika pada subclass WhatsAppService kita membutuhkan implementasi yang berbeda, kita bisa override method send().

 Cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil method super di dalamnya.

//object Composition
 pewarisan mendorong kita untuk menstrukturkan kode dengan pendekatan peran atau identitas class.
 Dengan memecah kode berdasarkan kemampuan, ke depannya kita akan lebih mudah dalam membuat objek dengan peran apa pun yang membutuhkan kombinasi dari kemampuan-kemampuan yang ada, tanpa ada kode yang repetitif.
 Agar lebih mudah dalam membuat objek, kita bisa membuat sebuah fungsi sebagai object creator dengan mengomposisikan kemampuan-kemampuan yang dibutuhkan. Di JavaScript, kita bisa secara mudah mengomposisikan objek dengan menggunakan method Object.assign().