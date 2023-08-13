import FormKonsultasi from "../component/FormKonsultasi";
import TitleKonsultasi from "../component/TitleKonsultasi";
import { useState } from "react"

function Konsultasi() {
    const [data, setData] = useState({
        nama: "",
        umur: "",
        nomor: "",
        email: "",
        konsultasi: "",

    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }


    const sendOnWhatsApp = () => {
        let url = "https://api.whatsapp.com/send/?phone=6281357553182&text=" +
            "Nama : " + data.nama +
            "%0a" +
            "Umur Kucing :" + data.umur + "Tahun " +
            "%0a" +
            "Nomor Telepon : " + data.nomor +
            "%0a" +
            "Email : " + data.email +
            "%0a" +
            "Konsultasi : " + data.konsultasi

            ;
        // Linking.openURL(url).then((data) => {
        //     console.log('WhatsApp Opened');
        // })
        window.open(url, "_blank")
    }

    return (
        <>
            <div class="pt-44 pb-10">
                <TitleKonsultasi />
                <FormKonsultasi
                    // Sumbit={(e) => submit()}
                    click={(e) => sendOnWhatsApp()}
                    changeNama={(e) => handle(e)}
                    changeUmur={(e) => handle(e)}
                    changeNomor={(e) => handle(e)}
                    changeEmail={(e) => handle(e)}
                    changeKonsultasi={(e) => handle(e)}
                    nama={data.nama}
                    umur={data.umur}
                    nomor={data.nomor}
                    email={data.email}
                    konsultasi={data.konsultasi}
                />
                <div class="max-w-screen bg-gradient-to-r from-blue-400 to-violet-500">
                    <p class="
                    text-2l 
                    text-yellow-200
                    font-bold 
                    tracking-[.05em] 
                    text-center">Semakin mudah untuk konsultasi secara online dengan dokter hewan kami, Sekarang anda hanya perlu kunjungi  </p>
                    <p class="text-2xl font-bold text-center text-pink-700">LOVELY CAT!</p>
                    <p class="text-center text-yellow-200">Mudah, Aman, Terpercaya Untuk memberikan pertolongan pada hewan yang sakit,
                        Salah satu caranya kalian bisa melakukan</p>
                    <p class="text-2xl font-bold text-center text-yellow-200 ">"KONSULTASI SECARA ONLINE DENGAN DOKTER HEWAN LOVELY CAT"</p>
                </div>
                <div class="max-w-screen h-px ">
                    <p class="text-3xl font-bold text-center text-pink-700 bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-200 hover:to-yellow-200"> GRATIS!!!   GRATIS!!    GRATIS!!    GRATIS!!</p>
                </div>
            </div>

        </>
    )
}

export default Konsultasi;