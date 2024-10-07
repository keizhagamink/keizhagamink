class Kapal {
    constructor (nama, jenis, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,   
        this.panjang = panjang,    
        this.lebar = lebar, 
        this._status = 'tidak tersedia' 
}

getStatus (){
    return this._status 
}

setStatusTersedia (){
    this._status = 'Tersedia' ;
    return `Kapal ${this.nama} dengan jenis ${this.jenis} ${this._status} `
}



infoKapal (){
    return `Kapal ini bernama ${this.nama} dengan jenis Kapal ${this.jenis} 
    memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter`

    }   
}

class KapalPenumpang extends Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar, tujuan, waktu){
        super (nama, jenis, panjang, lebar)
        this.kapasitas = kapasitas
        this.tujuan = tujuan,
        this.waktu = waktu
        
    }

    infoKapalPenumpang(){
        return `${this.infoKapal()} dan mampu berkapasitas ${this.kapasitas} orang dengan tujuan ${this.tujuan} pukul ${this.waktu}`
    }

    berangkat(){
        this._status = 'berangkat'
    }
}

class KapalKargo extends Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar, muatan){
        super (nama, jenis, panjang, lebar)
        this.muatan = muatan
    }

    infoKapalKargo(){
        return `${this.infoKapal()} dengan muatan ${this.muatan}`
    }

    bongkarMuatan(){
        this._status = 'bongkar muatan'
    }
}
 
    let kapalPenumpang = new KapalPenumpang ("Keizha Ship", "Penumpang,", 1000, 300, 200, "Merak", "23.00")
    console.log(kapalPenumpang.infoKapalPenumpang())
    console.log(kapalPenumpang.berangkat())

    let kapalKargo = new KapalKargo ("Keizha Cargo", "Cargo,", 900, 250, 100, "200 TON")
    console.log(kapalKargo.infoKapalKargo())
    console.log(kapalKargo.bongkarMuatan())

    document.getElementById("objek").innerHTML = kapalKargo.infoKapalKargo()
    document.getElementById("objek2").innerHTML = kapalPenumpang.infoKapalPenumpang()