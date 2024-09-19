# CSS

Penggunaan CSS dalam sebuah website tidak hanya untuk mempercantik tampilan, tetapi juga untuk menerapkan desain UI/UX dengan akurasi sekitar 90-95% dari desain yang ditentukan. Sebagai seorang front-end developer, ada beberapa konsep kunci yang perlu dipahami dalam penggunaan CSS:

## 1. Selector
Selector sangat penting untuk memilih dan menyesuaikan elemen spesifik dalam sebuah halaman web, terutama saat terdapat banyak elemen atau class yang sama. Berikut beberapa teknik penggunaan selector:

- `:nth-child` dan `:nth-of-type`: Digunakan untuk memilih elemen pada posisi tertentu dalam sebuah list atau container.
- Selector spesifik, seperti `.header-logo > img`, digunakan untuk memilih elemen tertentu yang berada langsung di dalam elemen induknya.

## 2. Display
Penggunaan properti `display` sangat krusial dalam CSS. Hampir 80% layout bisa disesuaikan dengan properti ini, sehingga mengatur tata letak sesuai keinginan. Beberapa jenis `display` yang sering digunakan adalah:
- `block`
- `inline-block`
- `flex`
- `grid`

Flex dan grid sering digunakan oleh front-end developer untuk mengatur layout secara custom.

## 3. Responsive Design
Responsive design sangat penting untuk memastikan website dapat diakses dari berbagai perangkat, seperti smartphone, tablet, atau desktop. Dengan mendukung berbagai resolusi, website Anda bisa menjangkau audiens yang lebih luas tanpa keterbatasan platform.

## 4. Manajemen Warna dan Font dengan `:root`
Untuk membuat kode CSS lebih rapi dan terorganisir, gunakan fitur `:root` untuk manajemen warna, font, dan variabel lain yang sering digunakan. Anda bisa mendefinisikan variabel global di dalam `:root` dan memanggilnya di tempat lain dalam CSS seperti berikut:

```css
:root {
  --dark-grey: #333;
  --primary-font: 'Roboto', sans-serif;
}

body {
  color: var(--dark-grey);
  font-family: var(--primary-font);
}
