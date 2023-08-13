

function Masthead() {

    return (
        <>
            {/* pt-36 */}
            <div class="pt-80 pb-7 right-0 bottom-0 left-0 lg:w-full lg:h-full overflow-hidden bg-fixed bg-[url('https://images.wallpaperscraft.com/image/single/cat_heterochromia_black_cat_128354_1920x1080.jpg')]">
                <div class="container mx-auto px-24">
                    <div class="flex justify-left items-center h-full">
                        <div class="text-left text-black mb-48 b-11 px-6 md:px-12">
                            <h1 class="text-5xl font-bold mt-0 mb-6">LOVELY CAT</h1>
                            <h3 class="text-3xl font-bold mb-8">Your Total Cat Solution</h3>
                            <a href="#aboutus"><button type="button"
                                class="inline-block px-6 py-2.5 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                data-mdb-ripple-color="light">
                                About Us
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Masthead;