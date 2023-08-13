import H3 from "@material-tailwind/react/Heading3";

function Testimoni() {
    return (
        <>
            <div class="text-center mt-24">
                <H3 color="indigo">TESTIMONI</H3>
            </div>
            <div class="bg-gradient-to-r from-sky-400 to-indigo-700 pt-11 pb-11">
                <div id="carouselExampleCaptions" class="carousel slide relative carousel-dark" data-bs-ride="carousel">

                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="container mx-auto px-24">

                            <div class="carousel-item active relative float-left w-full text-center">
                                <p class="text-xl italic mx-auto text-black max-w-4xl">
                                    "Sangat membantu sekali, agar kucing anda menjadi sehat dan terawat."
                                </p>
                                <div class="mt-12 mb-6 flex justify-center">
                                    <img
                                        src={require("../../assets/testi1.jpg")}
                                        class="rounded-full w-24 h-24 shadow-lg"
                                        alt="smaple image"
                                    />
                                </div>
                                <p class="text-black font-semibold">- Mas Aris</p>
                            </div>

                            <div class="carousel-item relative float-left w-full text-center">
                                <p class="text-xl italic mx-auto text-black max-w-4xl">
                                    "Terima kasih, kapan lagi dapat steril gratis. padahal steril mahal lhoo.. Dan disini juga sangat royal"
                                </p>
                                <div class="mt-12 mb-6 flex justify-center">
                                    <img
                                        src={require("../../assets/testi2.jpg")}
                                        class="rounded-full w-24 h-24 shadow-lg"
                                        alt="smaple image"
                                    />
                                </div>
                                <p class="text-black font-semibold">- Lidya Danira</p>
                            </div>
                            <div class="carousel-item relative float-left w-full text-center">
                                <p class="text-xl italic mx-auto text-black max-w-4xl">
                                    "Selain bisa cek up dan grooming juga bisa beli perlengkapan untuk kebutuhan anak kesayangan juga. jadi paket komplit deh.."
                                </p>
                                <div class="mt-12 mb-6 flex justify-center">
                                    <img
                                        src={require("../../assets/testi3.jpg")}
                                        class="rounded-full w-24 h-24 shadow-lg"
                                        alt="smaple image"
                                    />
                                </div>
                                <p class="text-black font-semibold">- Kinan</p>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Testimoni;