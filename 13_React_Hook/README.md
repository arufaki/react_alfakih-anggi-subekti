# React Hook

## 1. Penggunaan Hook dalam RFC
Salah satu alasan banyak yang beralih ke **RFC** (React Functional Components) adalah karena lebih simpel dan efisien dibanding **RCC** (React Class Components). Dengan hook, kita bisa mengelola state dan lifecycle secara lebih ringkas tanpa harus membuat class. Fungsinya sama seperti lifecycle di RCC, tetapi lebih mudah dikelola.

## 2. Core Hook: useEffect
Selain **useState**, hook yang paling sering digunakan adalah **useEffect**. Gunanya untuk menangani efek samping (side effects), seperti mengambil data dari API, subscribe ke event, atau mengupdate DOM. Jadi, segala sesuatu yang terjadi di luar React bisa kita atur melalui useEffect ini.

## 3. Custom Hook
Di React, kita juga bisa membuat **custom hook** sesuai kebutuhan. Jika ada fungsi atau logika yang sering digunakan, kita bisa menjadikannya custom hook agar lebih **reusable** dan praktis. Custom hook ini sangat membantu mengurangi pengulangan kode.
