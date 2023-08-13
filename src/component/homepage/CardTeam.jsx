import AOS from 'aos';
import 'aos/dist/aos.css';


function CardTeam(props) {
    AOS.init();

    return (
        <>
            <div data-aos="flip-right" data-aos-duration="2000">
                <div class="text-center">
                    <img
                        src={props.url}
                        class="rounded-full w-32 mb-4 mx-auto"
                        alt="Avatar"
                    />
                    <h5 class="text-xl font-medium leading-tight mb-2 underline underline-offset-4 decoration-wavy decoration-pink-500">{props.nama}</h5>
                    <p class="text-black font-semibold  italic">{props.role}</p>
                </div>
            </div>
        </>
    )
}

export default CardTeam;