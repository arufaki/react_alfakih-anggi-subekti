# Authentication in React

1. **Authentication dan Authorization**  
   Dalam *auth*, ada dua konsep utama, yaitu **authentication** dan **authorization**.  
   - **Authentication** adalah proses validasi pengguna saat login. Kita perlu cek apakah user ini benar-benar ada di sistem kita.
   - **Authorization** berhubungan dengan izin akses halaman tertentu. Misalnya, jika ada user yang ingin mengakses halaman **Products**, ia harus punya role sebagai *admin* terlebih dahulu. Jadi, meskipun user sudah terdaftar, belum tentu ia bisa akses semua halaman tanpa izin yang sesuai.

2. **Handling Authentication**  
   Pada React, proses autentikasi biasanya dilakukan dengan menyimpan *token* (misalnya, *JWT token*) setelah login berhasil. Token ini digunakan untuk mengakses berbagai *endpoint* atau data yang memerlukan izin khusus. Biasanya, token disimpan di `localStorage` atau `sessionStorage`. Namun, perlu diperhatikan faktor keamanan dalam penyimpanan ini.

3. **Protecting Routes with Authorization**  
   Di React, kita bisa menggunakan `React Router` untuk mengatur rute mana saja yang hanya boleh diakses oleh user dengan peran tertentu. Misalnya, jika user bukan *admin*, dia tidak akan bisa mengakses halaman admin. Caranya adalah dengan menggunakan komponen *Protected Route* yang akan memeriksa role user sebelum mengizinkan akses ke halaman tertentu.
