class Kereta {
    constructor(nama, kelas, panjang, lebar) {
        this.nama = nama;
        this.kelas = kelas;
        this.panjang = panjang;
        this.lebar = lebar;
        this._status = 'tidak tersedia';
    }

    getStatus() {
        return this._status;
    }

    setStatusTersedia() {
        this._status = 'Tersedia';
        return `Kereta ${this.nama} dengan kelas ${this.kelas} sekarang ${this._status}.`;
    }

    infoKereta() {
        return `Kereta ini bernama ${this.nama} dengan kelas ${this.kelas} 
        memiliki panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
    }
}

class KeretaPenumpang extends Kereta {
    constructor(nama, kelas, kapasitas, panjang, lebar, stasiunTujuan, waktuBerangkat) {
        super(nama, kelas, panjang, lebar);
        this.kapasitas = kapasitas;
        this.stasiunTujuan = stasiunTujuan;
        this.waktuBerangkat = waktuBerangkat;
    }

    // Overriding the infoKereta method for passenger trains
    infoKereta() {
        return `${super.infoKereta()} Mampu mengangkut ${this.kapasitas} penumpang 
        dengan tujuan stasiun ${this.stasiunTujuan} pada pukul ${this.waktuBerangkat}.`;
    }

    berangkat() {
        this._status = 'berangkat';
        return `Kereta ${this.nama} sedang ${this._status}.`;
    }
}

class KeretaKargo extends Kereta {
    constructor(nama, kelas, kapasitas, panjang, lebar, muatan) {
        super(nama, kelas, panjang, lebar);
        this.kapasitas = kapasitas;
        this.muatan = muatan;
    }

    // Overriding the infoKereta method for cargo trains
    infoKereta() {
        return `${super.infoKereta()} Mampu membawa muatan sebesar ${this.muatan} ton dengan kapasitas total ${this.kapasitas} ton.`;
    }

    bongkarMuatan() {
        this._status = 'bongkar muatan';
        return `Kereta ${this.nama} sedang ${this._status}.`;
    }
}

// Implementasi polymorphism
let keretaPenumpang = new KeretaPenumpang("Argo Parahyangan", "Eksekutif", 500, 200, 20, "Bandung", "07:30");
console.log(keretaPenumpang.infoKereta());
console.log(keretaPenumpang.berangkat());

let keretaKargo = new KeretaKargo("Kereta Kargo Timur", "Ekonomi", 1000, 300, 25, 200);
console.log(keretaKargo.infoKereta());
console.log(keretaKargo.bongkarMuatan());
