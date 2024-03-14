//contoh list produk
const listProduk = ["Pensil", "Penghapus", "Pen", "Buku", "penggaris"];
const barang1 = listProduk[0];
const barang2 = listProduk[1];
const barang3 = listProduk[2];
console.log(barang1, barang2, barang3);

//produk dan list
const produk = [
  {
    Nama: "Pensil",
    Harga: 2000,
  },
  {
    Nama: "Penggaris",
    Harga: 1500,
  },
  {
    Nama: "Penghapus",
    Harga: 3000,
  },
  {
    Nama: "Buku",
    Harga: 5000,
  },
];

const NamaProduk = produk[0].Nama;
const HargaProduk = produk[0].Harga;
console.log(NamaProduk, HargaProduk);

produk.forEach((product) => {
  const { Nama, Harga } = product;
  console.log(`Nama: ${Nama}, Harga: ${Harga}`);
});

function addProduct(product) {}

//contoh siswa
const Siswa = {
  Nama: "Dian",
  Alamat: "Jl. budirman",
  JumlahBeasiswa: 5000000,
  NilaiSiswa: 3.23,
  NamaBeasiswa: {
    Beasiswa: "Hunamian",
    Fakultas: "Sejarah",
  },
};

const NamaSiswa = Siswa.Nama;
const JumlahBeasiswa = Siswa.JumlahBeasiswa;
const NamaBeasiswa = Siswa.NamaBeasiswa;
console.log(NamaSiswa, JumlahBeasiswa, NamaBeasiswa);
