import AboutUs from "../component/homepage/AboutUs";
import Maps from "../component/homepage/Maps";
import Masthead from "../component/homepage/Masthead";
import OurTeam from "../component/homepage/OurTeam";
import Services from "../component/homepage/Services";
import Testimoni from "../component/homepage/Testimoni";
import VisiMisi from "../component/homepage/VisiMisi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
    AOS.init();
    return (
        <>
            <Masthead />
            <div class="container mx-auto px-24">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <AboutUs />
                </div>
                <VisiMisi />

                <Services />
            </div>
            <Testimoni />
            <OurTeam />
            <Maps />
        </>
    )
}
export default Homepage;