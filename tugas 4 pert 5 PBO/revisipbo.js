// class Kapal
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

// Subclass KapalKargo 
class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, muatan) {
        super(nama, jenis, panjang, lebar); 
        this.muatan = muatan; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat memuat hingga ${this.muatan} barang.`;
    }
}

// Subclass KapalPesiar
class KapalPesiar extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahpenumpang) {
        super(nama, jenis, panjang, lebar);
        this.jumlahpenumpang = jumlahpenumpang; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat memuat jumlah penumpang mencapai ${this.jumlahpenumpang} orang.`;
    }
}

// Subclass KapalSelam
class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalaman) {
        super(nama, jenis, panjang, lebar);
        this.kedalaman = kedalaman; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam sedalam ${this.kedalaman} meter di dasar laut.`;
    }
}

// Subclass KapalPerang
class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, senjata) {
        super(nama, jenis, panjang, lebar);
        this.senjata = senjata; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan senjata ${this.senjata}.`;
    }
}

// Subclass KapalPenangkapKepitingAlaska
class KapalPenangkapKepitingAlaska extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasTangkap) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasTangkap = kapasitasTangkap; 
    }

        infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menangkap kepiting alaska hingga ${this.kapasitasTangkap} ton.`;
    }
}

const KapalKargo1 = new KapalKargo("Logistik Keija", "kapal angkut", 100, 30, 50);
const KapalPesiar1 = new KapalPesiar("Keija Around The World", "kapal pesiar", 80, 20, 500);
const KapalSelam1 = new KapalSelam("Deep ", "deeper", 350, 60, 1000);
const KapalPerang1 = new KapalPerang("Destroyer", "kapal perang", 150, 40, "rudal dan torpedo");
const KapalPenangkapKepitingAlaska1 = new KapalPenangkapKepitingAlaska("Crabing  Keija", "kapal penangkap kepiting Alaska", 70, 25, 200);

const kapalList = [KapalKargo1, KapalPesiar1, KapalSelam1, KapalPerang1, KapalPenangkapKepitingAlaska1];

kapalList.forEach(kapal => {
    console.log(kapal.infoKapal());
});
