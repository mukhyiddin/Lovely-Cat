function FormKonsultasi(props) {
  return (

    <div className="Konsultasi">
      <div class="flex justify-center">
        <div>
          <div class="block rounded-lg shadow-2xl bg-white max-w-2xl pl-36 pr-36 pt-6 pb-6 mb-6  opacity-90">
            <form class="">
              <div class="form-group mb-6 -ml-16 -mr-16">
                <input onChange={props.changeNama} id="nama" value={props.nama} type="text" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-zinc-400
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nama"></input>
              </div>
              <div class="form-group mb-6 -ml-16 -mr-16">
                <input onChange={props.changeUmur} id="umur" value={props.umur} type="number" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-zinc-400
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Umur Kucing"></input>
              </div>
              <div class="form-group mb-6 -ml-16 -mr-16">
                <input onChange={props.changeNomor} id="nomor" value={props.nomor} type="number" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-zinc-400
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nomor Telepon"></input>
              </div>
              <div class="form-group mb-6 -ml-16 -mr-16">
                <input onChange={props.changeEmail} id="email" value={props.email} type="text" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-zinc-400
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email"></input>
              </div>
              <div class="form-group mb-6 ">
                <textarea onChange={props.changeKonsultasi} id="konsultasi" value={props.konsultasi}
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
                                border border-solid border-zinc-400
                                rounded
                                transition
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "

                  rows="3"
                  placeholder="Konsultasikan Permasalahan Kucing Anda "></textarea>
              </div>
              <button type="submit" class="
                            w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition 
                            duration-150
                            ease-in-out"
                onClick={props.click}
              >Send</button>
            </form>

          </div>
        </div>
      </div></div>
  )
}

export default FormKonsultasi;