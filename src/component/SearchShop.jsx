import PropsTypes from "prop-types";

function SearchShop(props) {
  const { keyword, onSearch } = props;

  return (
    <>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label for="exampleSearch2" class="form-label pt-4 inline-block mb-2 text-gray-700">
            Search
          </label>
          <input
            type="search"
            class=" form-control block w-fullpx-3py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
rounded
transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleSearch2"
            placeholder="Cari Produk Disini"
            value={keyword}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

SearchShop.propTypes = {
  keyword: PropsTypes.string.isRequired,
  onSearch: PropsTypes.func.isRequired,
};

export default SearchShop;
