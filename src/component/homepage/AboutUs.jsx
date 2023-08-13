import H3 from "@material-tailwind/react/Heading3";
import H6 from "@material-tailwind/react/Heading6";


function AboutUs() {

    return (
        <>

            <div id="aboutus" class="text-center mt-11">
                <H3 color="indigo">Siapa Kami?</H3>
            </div>
            <div class="text-left px-24">
                <H6 color="black">
                    <img class="w-96 pr-5 rounded-full float-left" src="https://media.istockphoto.com/photos/veterinarians-picture-id1316417327?k=20&m=1316417327&s=612x612&w=0&h=1V6AQ2uQ-msppvqGbxOTIl4QA_a1jx4fN2G8Tbcgq_g=" alt="" />
                    Lovely Cat adalah layanan terpadu untuk semua kebutuhan kucing kesayangan kamu. Kami menyediakan layanan dokter kucing, konsultasi online, vaksinasi, grooming, strelisasi, penitipan kucing, dan catshop
                </H6>
                <hr></hr>
            </div>

        </>

    )

}

export default AboutUs;