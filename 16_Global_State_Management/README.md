# Global State Management

## 1. Global State untuk Akses Data yang Mudah

Penggunaan **global state** memungkinkan kita menyimpan data yang dapat diakses dari mana saja dalam aplikasi. Bayangkan kita memiliki data penting yang perlu diakses di berbagai komponen. Dengan global state, kita tidak perlu repot-repot melakukan **prop drilling** dari satu komponen ke komponen lainnya. Cukup simpan data di satu tempat, dan semua komponen yang membutuhkan dapat langsung mengambilnya. Ini membuat pengelolaan data menjadi jauh lebih praktis dan efisien!

## 2. Global State sebagai Pengawas Data

Selain itu, global state juga berfungsi sebagai pengawas atau middleware dalam aplikasi. Kita dapat melakukan validasi sebelum data digunakan di komponen. Misalnya, dalam **Redux**, ada yang namanya **React Thunk**. Ini memungkinkan kita menambahkan logika sebelum data disimpan atau digunakan, sehingga kita dapat memastikan bahwa data yang diproses valid. Ini sangat penting, terutama untuk aplikasi yang membutuhkan keamanan dan konsistensi data.

## 3. Alternatif Global State yang Ramah Pemula

Selain Redux, ada alternatif lain yang lebih ramah pemula, yaitu **Zustand**. Jika Anda merasa Redux terlalu rumit, Zustand bisa jadi pilihan yang lebih mudah! Penggunaannya sederhana dan lebih bersahabat untuk pemula. Dengan Zustand, Anda dapat tetap fokus belajar tanpa terjebak dalam kompleksitas yang membingungkan. Meskipun lebih sederhana, Zustand tetap powerful, sehingga Anda dapat membangun aplikasi yang keren dengan fungsi yang sama.
