import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import AOS from 'aos';
import 'aos/dist/aos.css';

function VisiMisi() {
    AOS.init();

    return (
        <>
            <div class="grid px-4 lg:grid-cols-2 sm:grid-cols-1 container text-left mt-24">
                <div class="px-3 drop-shadow-lg">
                    <div data-aos="fade-right"
                        data-aos-duration="3000">
                        <Card>
                            <CardBody>
                                <H6 color="gray">Visi</H6>
                                <Paragraph class="text-left" color="black">
                                    <ul>
                                        <li>Menjadi perusahaan dengan jaringan outlet layanan kesehatan kucing kesayangan terbesar No.1 di Indonesia</li>
                                        <br /><br /><br /><br /><b></b><br /><br /><br />
                                    </ul>
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div></div>
                <div class="px-3 drop-shadow-lg">
                    <div data-aos="fade-left"
                        data-aos-duration="3000">
                        <Card>
                            <CardBody>
                                <H6 color="gray">Misi</H6>
                                <Paragraph class="text-left" color="black">
                                    <ul>
                                        <li>01. Mengembangkan jaringan outlet</li>
                                        <li>02. Memberikan layanan kesehatan kucing</li>
                                        <li>03. Melakukan customer service excellent</li>
                                        <li>04. Bekerja sama dengan perguruan tinggi untuk memenuhi kebutuhan sumber daya manusia yg profesional</li>
                                        <li>05. Melaksanakan pelatihan-pelatihan untuk meningkatkan skill dan pengetahuan seluruh SDM</li>
                                        <li>06. Meningkatkan kesejahteraan karyawan dan memberikan keuntungan maksimal kepada shareholder</li>
                                    </ul>
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisiMisi;