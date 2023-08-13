import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import Button from "./homepage/Button";

function TopCheckout() {
    return (
        <>
            <div class="lg:ml-96 lg:pl-10 ml-10 pb-6">
                <H5>Total : 100000</H5>
                <div class="flex flex-cow">
                    <H6>Nama  : </H6>

                    <div class="flex justify-start">
                        <div class="mb-3 pl-28 xl:w-96">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Nama"></input>
                        </div>
                    </div>
                </div>

                <div class="flex flex-cow">
                    <H6>No Telepon  : </H6>

                    <div class="flex justify-start">
                        <div class="mb-3 pl-16 xl:w-96">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="No Telepon"></input>
                        </div>
                    </div>
                </div>


                <div class="flex flex-cow">
                    <H6>Pembayaran via  : </H6>

                    <div class="flex justify-start">
                        <div class="mb-3 pl-6 xl:w-96">
                            <select class="form-select flex flex-start appearance-none   w-full   px-3 py-1.5  text-base font-normal text-gray-700
                        bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="1">Transfer Bank</option>
                                <option value="2">OVO</option>
                                <option value="3">DANA</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex flex-cow">
                    <H6>Alamat  : </H6>

                    <div class="flex justify-start">
                        <div class="flex justify-center">
                            <div class="mb-3 ml-28 xl:w-96">

                                <textarea
                                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ml-48">
                    <Button title="Checkout" />
                </div>


                <hr />
            </div>

        </>
    )
}

export default TopCheckout;