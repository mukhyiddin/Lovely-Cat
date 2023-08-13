
import AOS from 'aos';
import 'aos/dist/aos.css';

function CardService(props) {
    AOS.init();

    return (
        <>
            <div data-aos="zoom-in-up"
                data-aos-duration="2000">
                <div>
                    <div class="block drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-blue-500">
                        <div class="overflow-hidden rounded-t-lg h-28"></div>
                        <div class="w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white">
                            <img src={(props.url)} />
                        </div>
                        <div class="p-6">
                            <h4 class="text-2xl font-semibold mb-4">{props.title}</h4>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardService;