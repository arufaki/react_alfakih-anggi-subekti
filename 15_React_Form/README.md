# React Form

## 1. Tipe React Form: Controlled dan Uncontrolled

Dalam React, kita memiliki dua cara untuk mengelola form: **controlled** dan **uncontrolled**.

-   **Controlled Components**: Biasanya menggunakan `useState` untuk menyimpan nilai input. Ini berarti setiap kali ada perubahan, kita memperbarui state dan merender ulang komponen dengan nilai terbaru.
-   **Uncontrolled Components**: Lebih santai; kita bisa menggunakan `useRef` untuk mengambil nilai input tanpa perlu terus-menerus memeriksa state. Ini memberikan fleksibilitas, tetapi kadang bisa membuat kita kehilangan kontrol atas nilai yang dimasukkan pengguna. Pilihan antara keduanya tergantung pada kebutuhan aplikasi kita.

## 2. Validasi Input yang Ketat

Penting untuk memiliki validasi yang ketat di form kita. Kenapa? Karena ini membantu mencegah data yang tidak valid masuk ke sistem. Misalnya, jika ada pengguna yang mengisi form dengan informasi yang salah atau aneh, itu bisa menyebabkan masalah di belakang layar. Dengan validasi, kita dapat memastikan semua data yang masuk sesuai dengan yang kita harapkan. Kita bisa menggunakan berbagai teknik, mulai dari validasi sederhana (seperti memeriksa apakah semua field terisi) hingga yang lebih kompleks (seperti memeriksa format email). Dengan cara ini, pengalaman pengguna pun bisa lebih baik karena mereka langsung diberi tahu tentang kesalahan yang mereka buat.

## 3. Regex untuk Keamanan

Menggunakan regex untuk validasi input adalah seperti memiliki tameng tambahan untuk keamanan aplikasi kita. **Regex** (regular expressions) memungkinkan kita untuk mencocokkan pola tertentu dalam input, sehingga kita dapat memeriksa apakah data yang dimasukkan sesuai dengan format yang kita tentukan. Misalnya, jika kita memerlukan email, kita bisa membuat regex yang memastikan input sesuai dengan format email yang valid. Ini sangat penting untuk mencegah serangan dari hacker yang mungkin mencoba menyelipkan kode jahat ke dalam aplikasi kita. Dengan regex, kita dapat meningkatkan keamanan dari potensi serangan dan menjaga aplikasi kita tetap bersih dari kode berbahaya.
