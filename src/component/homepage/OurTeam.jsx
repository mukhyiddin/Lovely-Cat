import H3 from "@material-tailwind/react/Heading3";
import CardTeam from "./CardTeam";

function OurTeam() {
    return (
        <>
            <div id="ourteam" class="text-center mt-24">
                <H3 color="indigo">OUR AMAZING TEAM</H3>
            </div>
            <div class="container mx-auto px-24">
                <div class="text-center mt-11">
                    <div class="grid lg:grid-cols-4 sm:grid-cols-2">
                        <div>
                            <CardTeam nama={"Mukhyiddin"} role={"CEO"} url={"https://weddingdreaming.netlify.app/assets/img/team/2.jpg"} />
                        </div>
                        <div>
                            <CardTeam nama={"Titin Adrina Febrianti"} role={"CO-CEO"} url={"https://weddingdreaming.netlify.app/assets/img/team/1.jpg"} />
                        </div>
                        <div>
                            <CardTeam nama={"Ahmad Rizki Gunawan"} role={"Web Designer"} url={"https://weddingdreaming.netlify.app/assets/img/team/3.jpg"} />
                        </div>
                        <div>
                            <CardTeam nama={"Hana Fitriana"} role={"Web Programmer"} url={"https://weddingdreaming.netlify.app/assets/img/team/4.jpg"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurTeam;