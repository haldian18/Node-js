var object={
    "nama " : "Haldian",
    "Umur " : 21,
}

var object2 = object;
object2["Umur "] = 18;

console.log(object);
console.log('------------------------');
console.log(object2);


/*

Apa itu module? Module merupakan suatu file,
library, atau helper yang dibutuhkan untuk
menjalankan suatu fungsi tertentu.
Dalam pembuatan suatu aplikasi, kita
tidak bisa terlepas dari yang namanya module,
dikarenakan sangat sulit mengembangkan suatu
aplikasi hanya dengan menggunakan suatu file.


Untuk memanggil module pada PHP
biasanya menggunakan fungsi include,
require, ataupun require_once.
Sedangkan pada node.js hanya
menggunakan fungsi require.

Module terbagi menjadi dua macam yaitu
Module bawaan node.js dan
module buatan sendiri. Untuk memanggil
module bawaan node.js dapat dilakukan
dengan cara require('nama_Module').

Sedangkan untuk memanggil module
buatan sendiri dapat dilakukan
dengan cara require('./nama_module').
Jika suatu module diletakkan dalam
subfolder, maka dapat di panggil dengan
cara require(/nama_folder/nama_module)

Untuk Module Built In Node JS
bisa dilihat di laman
https://nodejs.org//api/all.html#

Pada script diatas saya membuat
sebuah variabel dengan nama methods,
dimana variabel methods ini berfungsi
untuk menampung object. Dimana
ob jectnya berisi function yaitu
function satu dan function_dua.

Agar module dapat digunakan diluar kelas
(Public), maka module harus di exports.
Pada script diatas saya meng-exports-nya
dengan perintah exports.data-methods.
Dimana methods adalah variable dan
data merupakan nama pemanggilan
untuk semua fungsi yang ada pada
variable methods dari luar kelas.

Referensi Object atau Object References
merupakan metode yang digunakan oleh
node. js untuk menghandle perubahan pada
artibut suatu ob ject.
Jika terdapat nilai (value) pada atribut
suatu object, maka s

Referensi Object atau Object References
merupakan metode yang digunakan oleh
node.js untuk menghandle perubahan pada
artibut suatu ob ject.
Jika terdapat nilai (value) pada atribut
suatu object, maka semua nilai ob ject
yang terkait juga akan mengalami perubahan.

Sederhananya, seperti primary key dan
foreign key pada relational database.
Dimana jika terdapat perubahan data
pada suatu tabel utama (master), maka
akan mengalami perubahan juga pada
tabel tamu (transaksi).

Pada script diatas, penulis membuat
sebuah ob ject dalam format JSON, dan
disimpan dalam sebuah variale dengan
nama object1, dan terdiri dari dua
artibut yaitu nama dan uMur. Dimana,
artibut nama berisi “Tri sandhika Jaya"
dan atribut umur berisi “35".
Jika script diatas running. maka akan
terlihat hasilnya sebagai berikut:


*/