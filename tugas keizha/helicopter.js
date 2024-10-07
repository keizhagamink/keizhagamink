class Helikopter {
    constructor(nama, jenis, panjang, kapasitasMesin) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.kapasitasMesin = kapasitasMesin;
        this._status = 'tidak tersedia';
    }

    getStatus() {
        return this._status;
    }

    setStatusTersedia() {
        this._status = 'Tersedia';
        return `Helikopter ${this.nama} dengan jenis ${this.jenis} sekarang ${this._status}.`;
    }

    infoHelikopter() {
        return `Helikopter ini bernama ${this.nama}, tipe ${this.jenis}, memiliki panjang ${this.panjang} meter dan kapasitas mesin ${this.kapasitasMesin} HP.`;
    }
}

class HelikopterPenumpang extends Helikopter {
    constructor(nama, jenis, kapasitas, panjang, kapasitasMesin, tujuan, waktuTerbang) {
        super(nama, jenis, panjang, kapasitasMesin);
        this.kapasitas = kapasitas;
        this.tujuan = tujuan;
        this.waktuTerbang = waktuTerbang;
    }

    // Overriding the infoHelikopter method for passenger helicopters
    infoHelikopter() {
        return `${super.infoHelikopter()} Mampu membawa ${this.kapasitas} penumpang dengan tujuan ${this.tujuan} pada pukul ${this.waktuTerbang}.`;
    }

    berangkat() {
        this._status = 'berangkat';
        return `Helikopter ${this.nama} sedang ${this._status}.`;
    }
}

class HelikopterKargo extends Helikopter {
    constructor(nama, jenis, kapasitasMuatan, panjang, kapasitasMesin, jenisMuatan) {
        super(nama, jenis, panjang, kapasitasMesin);
        this.kapasitasMuatan = kapasitasMuatan;
        this.jenisMuatan = jenisMuatan;
    }

    // Overriding the infoHelikopter method for cargo helicopters
    infoHelikopter() {
        return `${super.infoHelikopter()} Mampu membawa muatan ${this.kapasitasMuatan} ton berupa ${this.jenisMuatan}.`;
    }

    bongkarMuatan() {
        this._status = 'bongkar muatan';
        return `Helikopter ${this.nama} sedang ${this._status}.`;
    }
}

// Implementasi polymorphism
let helikopterPenumpang = new HelikopterPenumpang("Bell 429", "Penumpang", 8, 12, 1000, "Jakarta", "10:30");
console.log(helikopterPenumpang.infoHelikopter());
console.log(helikopterPenumpang.berangkat());

let helikopterKargo = new HelikopterKargo("Sikorsky S-64", "Kargo", 9, 21, 3000, "Material Konstruksi");
console.log(helikopterKargo.infoHelikopter());
console.log(helikopterKargo.bongkarMuatan());
