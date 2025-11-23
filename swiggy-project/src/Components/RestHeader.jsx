import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader(){

    const counter = useSelector(state=> state.cartslice.count);

    return(

        <div className="bg-orange-500 fixed top-0 left-0 w-full z-50">
            <div className="w-[80%] container mx-auto px-8 py-4 text-2xl flex justify-between">
                <p className="font-bold text-white p-2 rounded-xl">QuickBite</p>

                <Link to={"/Checkout"}>
                <p className="font-bold text-white p-2 rounded-xl" >Cart {`(${counter})`} </p>
                </Link>
            </div>
       </div>
    )
}