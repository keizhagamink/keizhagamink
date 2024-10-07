class Bus {
    constructor(nama, tipe, panjang, lebar) {
        this.nama = nama;
        this.tipe = tipe;
        this.panjang = panjang;
        this.lebar = lebar;
        this._status = 'tidak tersedia';
    }

    getStatus() {
        return this._status;
    }

    setStatusTersedia() {
        this._status = 'Tersedia';
        return `Bus ${this.nama} dengan tipe ${this.tipe} sekarang ${this._status}.`;
    }

    infoBus() {
        return `Bus ini bernama ${this.nama} dengan tipe bus ${this.tipe} 
        memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
    }
}

class BusPenumpang extends Bus {
    constructor(nama, tipe, kapasitas, panjang, lebar, rute, waktu) {
        super(nama, tipe, panjang, lebar);
        this.kapasitas = kapasitas;
        this.rute = rute;
        this.waktu = waktu;
    }

    // Override the infoBus method
    infoBus() {
        return `${super.infoBus()} Mampu berkapasitas ${this.kapasitas} penumpang 
        dengan rute ${this.rute} pada pukul ${this.waktu}.`;
    }

    berangkat() {
        this._status = 'berangkat';
        return `Bus ${this.nama} sedang ${this._status}.`;
    }
}

class BusKargo extends Bus {
    constructor(nama, tipe, kapasitas, panjang, lebar, muatan) {
        super(nama, tipe, panjang, lebar);
        this.kapasitas = kapasitas;
        this.muatan = muatan;
    }

    // Override the infoBus method
    infoBus() {
        return `${super.infoBus()} dengan kapasitas muatan ${this.muatan}.`;
    }

    bongkarMuatan() {
        this._status = 'bongkar muatan';
        return `Bus ${this.nama} sedang ${this._status}.`;
    }
}

// Polymorphism in action
let busPenumpang = new BusPenumpang("Bus Keizha", "Penumpang", 50, 12, 3, "Jakarta-Bandung", "08.00");
let busKargo = new BusKargo("Bus Kargo Keizha", "Kargo", 30, 15, 4, "100 TON");

// Display the information using the same method but different implementations
console.log(busPenumpang.infoBus());
console.log(busPenumpang.berangkat());

console.log(busKargo.infoBus());
console.log(busKargo.bongkarMuatan());

document.getElementById("objek").innerHTML = busKargo.infoBus();
document.getElementById("objek2").innerHTML = busPenumpang.infoBus();
