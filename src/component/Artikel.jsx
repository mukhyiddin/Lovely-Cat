import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "./homepage/Button";
import NewsModal from "./NewsModal";


export default function Artikel(props) {
  AOS.init();
  console.log(props);
  return (
    <>
      <div data-aos="zoom-out-up"
        data-aos-duration="1500"
      >
        <div class="pt-3">
          <div class="shadow-2xl box-content h-200 w-60 p-4 border-4 rounded-3xl bg-blue-400 ...">
            <Card>
              <CardImage
                src={props.url}
                alt="Card Image"
              />

              <CardBody>
                <H6 color="gray">{props.title}</H6>
              </CardBody>

              <CardFooter>
                <div key={props.key} data-bs-toggle="modal" data-bs-target={`#exampleModalLg-${props.id}`}>
                  <Button title="Selengkapnya" />
                </div>
              </CardFooter>
            </Card>

          </div>

        </div>
      </div>
      <NewsModal key={props.id} title={props.title} deskripsi={props.deskripsi} id={props.id} />
    </>

  );
}
