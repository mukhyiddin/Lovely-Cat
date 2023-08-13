import Button from "./Button";
import CardService from "./CardService";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesCom() {
    AOS.init();

    return (
        <>

            <div class="container mx-auto px-24">
                <div class="text-center mt-10">
                    {/* <div class="box-border md:box-content"> */}
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                        <CardService title={"Vaksinasi"} url={"https://img.freepik.com/free-vector/vector-illustration-cute-cartoon-cat-wearing-mask-holding-vaccine-bottle-medicine-vaccination-icon-concept_75802-518.jpg?w=740"} />
                        <CardService title={"Grooming"} url={"https://img.freepik.com/free-vector/cute-cat-with-love-heart-cartoon-vector-icon-illustration_138676-3455.jpg?t=st=1648779353~exp=1648779953~hmac=146bc7e5bd8ffc29970bc783050f5d88a11be37e2a111c487d633486274cfd70&w=740"} />
                        <CardService title={"Pet Shop"} url={"https://img.freepik.com/free-vector/cute-cat-hole-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4236.jpg?t=st=1648779353~exp=1648779953~hmac=b9f297ddba7b149dc4189413869358fe35b867ab7911922b2f31bfc58b0413ec&w=740"} />
                        <CardService title={"Konsultasi"} url={"https://img.freepik.com/free-vector/cute-lucky-cat-wearing-mask-cartoon-icon-illustration-animal-healthy-icon-concept-isolated-flat-cartoon-style_138676-2345.jpg?t=st=1648779208~exp=1648779808~hmac=487ae57973a43c660df03d547f197e242e197dfe0bf187ca34dc0e4a9e3ed28d&w=740"} />
                        <CardService title={"Operasi Kecil"} url={"https://img.freepik.com/free-vector/cute-black-cat-wearing-mask-friday-13th_607277-191.jpg?w=740"} />
                        <CardService title={"Penitipan Kucing"} url={"https://img.freepik.com/free-vector/cute-cat-wearing-paper-mask-vector-illustration-cat-thug-life-cartoon-flat-design_562381-35.jpg?w=740"} />

                    </div>
                    <div class="flex justify-center mt-11">
                        <div data-aos="zoom-in-up"
                            data-aos-duration="1500">
                            <Button title={"Konsultasi Sekarang"} url={"konsultasi"} />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default ServicesCom;