 
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body

    let luas = panjang * lebar * tinggi
    let volume = 2 * (panjang * lebar + panjang * tinggi + tinggi * lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisikubus = Number(req.body.sisikubus) // mengambil nilai sisikubus dari body

    let luas = 6 * sisikubus * sisikubus
    let volume = sisikubus * sisikubus * sisikubus

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisikubus: sisikubus,
        luas: luas,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
    let jarijari = Number(req.body.jarijari) // mengamil nilai jarijari dari body

    let luas_permukaan = 3.14 * jarijari * jarijari * tinggi
    let volume = 3.14 * jarijari * jarijari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jarijari: jarijari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) // mengamil nilai jarijari dari body
    let diameter = Number(req.body.diameter) // mengamil nilai diameter dari body

    let luas_permukaan = 4 * 3.14 * Math.pow(jarijari,3)
    let volume = 4/3 * 3.14 * Math.pow(jarijari,3)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        diameter: diameter,
        jarijari: jarijari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
