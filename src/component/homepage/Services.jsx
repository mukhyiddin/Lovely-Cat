import H3 from "@material-tailwind/react/Heading3";
import H5 from "@material-tailwind/react/Heading5";
import ServicesCom from "./ServicesCom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    AOS.init();

    return (
        <>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-duration="1500">
                <div id="services" class="text-center mt-24">
                    <H3 color="indigo">SERVICES</H3>
                </div>
                <div class="text-center">
                    <H5 color=" black">
                        Pilih Perawatan Terbaik Untuk Kucing Anda
                        dan konsultasikan kepada kami
                    </H5>
                </div>
            </div>
            <div>
                <ServicesCom />
            </div>
            {/* button */}
            <hr></hr>


        </>

    )

}

export default Services;