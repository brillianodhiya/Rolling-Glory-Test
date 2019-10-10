# Rolling Glory Frontend test 🇮🇩

> Project Front-End Rolling Glory menggunakan Vue Js

## Alasan Menggunakan VueJs

Saya ingin belajar menggunakan VueJs berbasis Universal dengan backend Restful API. Ini adalah project pertama saya menggunakan Vue dengan Nuxt dan Vuex.

## Third Party

* Bootstrap 4
* Universal Vue (Axios untuk menggunakan API)

## Design

* Saya menggunakan SCSS dan Bootstrap untuk styling
* Tampilan awal untuk list gift saya buat menjadi 3 baris karena jumlah data di API adalah 6 jadi biar terasa penuh
* API yang saya gunakan yang versi web saja (karena menurut yang saya pelajari aplikasi yang bagus adalah aplikasi yang menggunakan sedikit Action untuk pemanggilan data)
* Untuk halaman detail saya menggunakan Vuex untuk manajemen state global yang di dapat dari saat mengklik tombol View detail
* Desain sudah saya buat responsive untuk ukuran mobile
* Untuk asset saya menggunakan dari asset yang disediakan

## Demo online [*](https://rolling-glory-fontedntest.herokuapp.com/)

Saya sudah menyiapkan versi deploy aplikasi ke Heroku untuk mempermudah review aplikasi di [Rolling Glory Frontend Test](https://rolling-glory-fontedntest.herokuapp.com/)

## Run Local

``` bash
# install dependencies
$ yarn install # or  npm install

# run dalam mode development universal
$ yarn dev # or npm run dev

# build untuk mode production universal & jalankan mode production
$ npm run build
$ npm start

```

Write by Brilliano