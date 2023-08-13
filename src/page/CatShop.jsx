import CardShop from "../component/CardShop";
import SearchShop from "../component/SearchShop";
import H3 from "@material-tailwind/react/Heading3";
import { useEffect, useState } from 'react'
import * as searchHelper from "./Search.Helper";
import { addCart, totalCart } from "../context/Action";
import { useAuthDispatch, useAuthState } from "../context/store";
import { Link } from "react-router-dom";


function CatShop() {

  const dispatch = useAuthDispatch();
  const state = useAuthState();

  console.log("ini state ", state);

  const url = "https://62201641ce99a7de194f8f98.mockapi.io/CatShop";

  const [data, setUsers] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [keyword, setKeyword] = useState("");



  useEffect(async () => {
    const response = await fetch(url)
    const result = await response.json()
    setUsers(result);
    setFiltered(result);
  }, []);

  useEffect(() => {
    if (keyword.length > 0) {
      const filtered = searchHelper.search(data, keyword);
      setFiltered(filtered);
    } else {
      // apabila keywordnya kosong kita kembalikan ke isi original.
      setFiltered(data);
    }
  }, [keyword]);

  const handleSearch = (updates) => {
    setKeyword(updates);
  };

  console.log(state);

  return (
    <div>
      <div class="container mx-auto pb-24 px-24 ">
        <div class="pt-32 text-center text-cyan-500">
          <H3 color="indigo">
            Cat Shop
          </H3>
        </div>
        <div class="flex  justify-center">
          <SearchShop keyword={keyword} onSearch={handleSearch} />
          <Link to="/checkout">
            <img class="mt-12" style={{ width: 50, height: 50 }} src={require("../assets/Cart.png")} alt="" />
          </Link>
          <span style={{ width: 40, height: 25 }} class="inline-block mt-14 pt-1 px-1.5 leading-none text-center  font-bold bg-red-600 text-white rounded">
            {state.items.length}
          </span>
        </div>

        <div class="grid pt-6 lg:grid-cols-3 sm:grid-cols-2 gap-8">

          {filtered.map((cat) => (
            <CardShop key={cat.id} title={cat.title} deskripsi={cat.deskripsi} harga={cat.harga} url={cat.url} {...cat} addToCart={() => addCart(dispatch, cat)} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default CatShop;
