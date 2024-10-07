class Pesawat {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
        this._status = 'tidak tersedia';
    }

    getStatus() {
        return this._status;
    }

    setStatusTersedia() {
        this._status = 'Tersedia';
        return `Pesawat ${this.nama} dengan jenis ${this.jenis} sekarang ${this._status}.`;
    }

    infopesawat() {
        return `Pesawat ini bernama ${this.nama} dengan jenis pesawat ${this.jenis} 
        memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
    }
}

class PesawatPenumpang extends Pesawat {
    constructor(nama, jenis, kapasitas, panjang, lebar, tujuan, waktu) {
        super(nama, jenis, panjang, lebar);
        this.kapasitas = kapasitas;
        this.tujuan = tujuan;
        this.waktu = waktu;
    }

    // Override the infopesawat method
    infopesawat() {
        return `${super.infopesawat()} Mampu berkapasitas ${this.kapasitas} orang 
        dengan tujuan ${this.tujuan} pukul ${this.waktu}.`;
    }

    berangkat() {
        this._status = 'berangkat';
        return `Pesawat ${this.nama} sedang ${this._status}.`;
    }
}

class PesawatKargo extends Pesawat {
    constructor(nama, jenis, kapasitas, panjang, lebar, muatan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitas = kapasitas;
        this.muatan = muatan;
    }

    // Override the infopesawat method
    infopesawat() {
        return `${super.infopesawat()} dengan muatan ${this.muatan}.`;
    }

    bongkarMuatan() {
        this._status = 'bongkar muatan';
        return `Pesawat ${this.nama} sedang ${this._status}.`;
    }
}

// Polymorphism in action
let pesawatPenumpang = new PesawatPenumpang("Keizha Plane", "Penumpang", 1000, 300, 200, "Dubai", "12.00");
let pesawatKargo = new PesawatKargo("Keizha Cargo", "Kargo", 900, 250, 100, "200 TON");

// Display the information using the same method but different implementations
console.log(pesawatPenumpang.infopesawat());
console.log(pesawatPenumpang.berangkat());

console.log(pesawatKargo.infopesawat());
console.log(pesawatKargo.bongkarMuatan());

document.getElementById("objek").innerHTML = pesawatKargo.infopesawat();
document.getElementById("objek2").innerHTML = pesawatPenumpang.infopesawat();
