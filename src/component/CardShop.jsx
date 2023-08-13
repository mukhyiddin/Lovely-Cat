import 'aos/dist/aos.css';
import AOS from 'aos';

function CardShop(props) {
  AOS.init();
  return (
    <>
      <div class="flex pt-8 justify-center">
        <div data-aos="zoom-out-up"
          data-aos-duration="1500"
        >
          <div class="flex pt-3 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full pt-6 pr-10 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={props.url}
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
              <p class="text-gray-700 text-base mb-4">
                <strong>{props.harga}</strong>
              </p>
              <p class="text-gray-600 text-xs pb-2">{props.deskripsi}</p>
              <div class="flex space-x-2 justify-center">
                <div>
                  <button
                    onClick={props.addToCart}
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default CardShop;
