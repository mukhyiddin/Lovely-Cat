import CardCheckout from "../component/CardCheckout";
import TopCheckout from "../component/TopCheckout";
import { useAuthState, useAuthDispatch } from "../context/store";

function Checkout() {
    const dispatch = useAuthDispatch();
    const state = useAuthState();

    console.log(state);
    return (
        <>
            <div class="pt-44 pb-10">
                <TopCheckout />
                {state.items.map(list => (
                    <CardCheckout title={list.title} harga={list.harga} deskripsi={list.deskripsi} url={list.url} />
                ))}
            </div>
        </>
    )

}

export default Checkout;