<!-- Let's understand Routing for "Cart" header section -->
1. Hum chaate h ki ek header show ho apne "Restaurants", "FoodMenu" & "Search" waale page pr.
=> Means inn 3no pages pr ek "Header" rhena chaiye.
2. Iss header mein hum show krenge apna sabse important fetaure "AddToCart" & ek "logo" bhi same jese "swiggy" pr h.
3. Now, firtly let create new component where we will show this 2 things, this will be our second header in this project. 1st one we had at home page.
=> Let name to this component header as "RestHeader":-
=> Isko UI set kr denge apne according.

4. Now, main thing come into the picture:-

=> How, we can show this header to all those 3 pages ??
=> With the help of "Nested-Routing"

5. We will wrapped all those 3 Routes which we had written at "App.jsx" for those 3 pages in a single new Route.
=> No need to give path for this parent Route, just write "Element".
=> Ab iss new parent route k element mein hum call kr lenge ek new component ko, let name it to as "SecondaryHome"
=> Now, we will use that "RestHeader" component here in this "SecondaryHome" by just importing and calling it here.
=> But one issue here is:- Only yhe header section hi show krega, wo 3no pages ka data kese show krein ab iss header k saath ??

=> So, iske liye aata h apne pass "Outlet"
=> Hum phele outlet k baare m pdh chuke h.
=> Just import "Outlet" and use it as calling just after that "RestHeader" called.
=> Isse apna saara content bhi aajyega unn 3no pages ka iss new header k saath.
=> Means Outlet ki jgh wo 3no me se koi component aajyega iss SecondarHome.jsx mein jab bhi unn pages pr route krenge, like below:-

1. Let hum gye:- /restaurant

  => Toh jha outlet likha h:- <Outlet/>
  => Iss outlet ki jgh aajyega:- <RestaurantsOptions/>  bcoz yhi element ki value h above route path ki

2. Similarly for:- "/city/delhi/:id", <Outlet/> ki jgh aajyega <RestaurantMenu/>

3. Similarly for this path as well:- "/city/delhi/:id/search, <Outlet/> ki jgh aajyega <SearchFood>

=> Means, Ab jab bhi apne unn 3 pages pr jaaynge usse phele by default hi apna "SecondaryHome" wala content show hoga inn 3no pages k saath aur fhir unn 3no pages ka data show krega.

=> Iss new parent waale ka path dene ki need nhi h bcoz hum chaate h yhe by-default aaye inn 3no me se kisi bhi path pr jaaye toh.

=> Hence, done:- Cart wala aagya unn sab pages pr jha chaiye tha pne ko.

=> Ab, bas cart waale ko working banana h, let's do this also with help of our "Redux & Stores" concepts.

<!-- Cart:- Checkout feature -->
=> Now, hum chaate h jese add pr click kr uss add to cart waale btn pt toh iska count apne header waale cart pr show krein + jo food item add hua h uski details bhi show krein "Checout" mein.
=> So, iske liye hum ek "Centralized Store" bna denge with help of "redux" taaki "Cart" wala count value access kr skhe items ki aur "Checout" wala unn item ki detailsshow kr skhe.
=> Hence, we can say yhi apna main use h "redux" ka, jisko data access krna h jese yha checout aur cart h wese aur bhi jgh maan lo inn values ko access krna chaate h jese payement wale min and etc, so yhe sab jane data apne "Centralized Store" se maang lenge.

<!-- STEPS -->
1. Install "react-redux & "reduxToolkit":-

 => npm install @reduxjs/toolkit react-redux

2. Now, sabse phele "Slice" create krni hogi "Store" se phele. 

  => Let create a folder "Stored" jha apne slicers and stores rhenge.
  => Now let create 2 files, "Stores.js" & "CartSlicer.js".

3. Now will write below code in this "CartSlicer.js" :-

import {createSlice} from "@reduxjs/toolkit";

// Slice create:

const cart = createSlice({
    name: 'cartslice',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: ()=>{

        },
        incrementItems: ()=>{

        },
        decrementItems: ()=>{
            
        }

    }
})

=> Let understand upar kya ho rha h:-

   => Sabse phele slice create kiya with help of createSlice
   => Ab hume pta h slice ka hume naam, initialstate aur reducers fn dene h.
   => Initialstate mein humne as object jisme as key use kiya items aur as value array empty bcoz add to cart krne pr unn item ka data chaiye hume toh wo hum array mein daal denge as an object.
   => Means each and evry item as obj stored ho jaayega iss array m, jese item 1 as obj 1, itme 2 as obj 2 in this array.
   => Now, hume 3 reducers fn chaiye:-
      1. Ek initial item add krne k liye jese hi hum add btn pr click krein toh wo item add ho jayega.
      2. Dusra uss same item ki quantity ko increase krne k liye.
      3. 3sra uss same item ki quantity ko decrease krne k liye.

=> Now, yhe reducer fn 2 values lete h ek state & action aur inn reducers fn ko export kra denge with help of actions, like below:-

  => const cart = createSlice({
    name: 'cartslice',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state,action)=>{

        },
        incrementItems: (state,action)=>{

        },
        decrementItems: (state,action)=>{
            
        }

    }
});

export const {addItems, incrementItems, decrementItems} = cart.actions;
export default cart.reducer;

=> Yhe reducers fn pr aaynge abhi, phele easy kaam kr lete h export, import aur stores creation wala.

4. Now let create Store in Stores.js:-

  => import { configureStore, } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";

export const store = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})

5. Will write below code in RestaurantMenuItem.jsx:-

  => import { useState} from "react";
import {addItems, incrementItems, decrementItems} from "../Stored/CartSlicer";
import {useDispatch, useSelector} from "react-redux";

export default function RestaurantMenuItem({ info }) {

  const dispatch = useDispatch();

  // Cart: useState
  const [count,setCount] = useState(0);  

  // Our 3 functions:

  function handleAddItems(){
    setCount(1);
    dispatch(addItems(info)); 

  }

  function handleIncrementItems(){
    setCount(count+1);
    dispatch(incrementItems(info));
  }

  function handleDecrementItems(){
    setCount(count-1);
    dispatch(decrementItems(info));
  }


  return (
    <div className="flex justify-between items-start border-b pb-3">

      <div>
        <h3 className="text-lg font-medium">{info.name}</h3>
        <p className="text-gray-600 text-sm">{info.description}</p>
        <p className="mt-1 font-semibold">₹{(info.price || info.defaultPrice) / 100}</p>
      </div>

      <div className=" relative h-42 ">

      {info.imageId && (
        <img
          src={`/foodImages/${info.imageId}`}
          alt={info.name}
          className="w-45 h-36 object-cover rounded-xl"
        />
      )}

      {
        (count===0)?(<button onClick={()=>handleAddItems()} className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xl w-[60%] text-green-600 font-bold shadow-md border border-white rounded-xl px-4 py-2 bg-white">Add</button>)
        :(<div className=" absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 text-xl text-green-600 font-bold shadow-md border border-white rounded-xl px-4 py-2 bg-white">
          <button onClick={()=>handleDecrementItems()}>-</button>
          <span>{count}</span>
          <button onClick={()=>handleIncrementItems()}>+</button>
        </div>
          )
      }

      </div>
    </div>
  );
}

6. Will write below code in CartSlicer.js:-

  import {createSlice} from "@reduxjs/toolkit";

// Slice create:

const cart = createSlice({
    name: 'cartslice',
    initialState:{
        items:[],
        count:0,
    },
    reducers:{
        addItems: (state,action)=>{
            state.items.push({...action.payload, quantity:1});
            state.count++;
        },
        incrementItems: (state,action)=>{
            const element = state.items.find(item=>item.id==action.payload.id);
            element.quantity+=1;
            state.count++;
        },
        decrementItems: (state,action)=>{
            const element = state.items.find(item=>item.id==action.payload.id);
            if(element.quantity>1){
                element.quantity-=1;
            }
            else{
                state.items = state.items.filter(item=> item.id!=action.payload.id);
            }
            state.count--;

        }
    }
});

export const {addItems, incrementItems, decrementItems} = cart.actions;
export default cart.reducer;

7. Will make HeaderFor cart:-

 In RestHeader.jsx:-

 => import { useSelector } from "react-redux";
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

8. Will make Checkout.jsx component to display items which added in cart:-

  => import { useSelector } from "react-redux"

export default function Checkout(){

   const items =  useSelector(state=> state.cartslice.items);

    return(
        <div>

            {
                items.map(value=> <div className="text-4xl font-bold">{value.name}</div>)
            }

        </div>
    )
}

<!-- Now, let go beyond basic web developer and improve our some feature which impacts on interviewer also:- -->

<!-- Following are 2 problem jo hum solve kr dein toh aur badiya project ban jaayega:- -->

<!--Problem 01 -->

=> Jab add to card kra koi item aur checout pr jaake check kiya aur fhir wapis aaye toh wo  button jo tha add wala wha wo increment and decrement value show nhi kr rhi.

=> Means let suppose kisi pizza pr kra 2 baar add toh wo cart m 2 value show krega aur uss add waale btn pr bhi 2 aayega but agr hum checout page pr jaake fhir se menu waale page pr aaye toh wha uss add btn pr value nhi rheti h preserve, but why this is happening ?

<!--Reason -->
=> Bcoz our "Local State variable" loses their value when we go to different routes.
=> Jese hum checkout jo ki different route h wha jhar rhe h toh jo value thi stored in state variables mein wo lose ho jaayegi.

<!-- Problem 02 -->
=> Ho skta h same restaurant k menu m same items ho alag alag category m like recommendation m bhi aur veg food krke ho koi category usme bhi like koi pizza h toh jab add waale btn pr click kre kisi item pr toh unn sab same item pr bhi +1 show hona chaiye uss add btn pr jab kisi ek same item pr click kra h toh.
=> Aur same aage agar 2 baar add kra h toh 2 uss same item btn pr bhi hona chaiye.
=> Means same item ki ek hi state honi chaiye.
=> But essa nhi ho rha h, so kese krenge yhe problem solve ?

<!-- Solution for both above problem is same -->
=> Hum jo local state varible use kr rhe h wo nhi krenge, hume global state varible use krna hoga.

<!-- STEPS -->
=> We can just check in our items array that jo item pda h uski id aur jo baaki item h jo add nhi h but menu m h unki id agar same h mtlb wo dono item same hue agar id same h toh, toh unn same item k add btn pr bhi wo same count value show ho.
=> Toh, sabse phele wo local count state hata dente jo bnaya h apn n useState se.
=> Then, below line of code likh lenge:-

  => const items = useSelector(state => state.cartslice.items);
  const element = items.find(item=>item.id===restData.id);
  const count = element? element.quantity:0;

 => Aur setCount ka jo use kr rhe the 3no fn m wha se bhi hata denge as ab need nhi h. 

 => So, now RestaurantMenuItem.jsx will be like below:-

  => import { useState} from "react";
import {addItems, incrementItems, decrementItems} from "../Stored/CartSlicer";
import {useDispatch, useSelector} from "react-redux";

export default function RestaurantMenuItem({ info }) {

  const dispatch = useDispatch();

  const items = useSelector(state => state.cartslice.items);
  const element = items.find(item=>item.id===info.id);
  const count = element? element.quantity:0;

  // Our 3 functions:

  function handleAddItems(){
    dispatch(addItems(info)); 

  }

  function handleIncrementItems(){
    dispatch(incrementItems(info));
  }

  function handleDecrementItems(){
    dispatch(decrementItems(info));
  }

  return (
       <div>.....content ....</div>
  );
}

=> Hence, now our problem solved:- Ab, globally same value aajyegi automatic uss same item k button pr agar wo already ek baar add ho rkha h toh.

<!-- Let understand more clearly what we had done above -->
=> Hum upar "Centralized location" se apna data read kr rhe h.
=> Means, agar koi item added hoga toh wo definitely store m present hoga, toh kyu na hum directly store se value readout kr lein rather than ek local count state varible aur ek setCount fn bnane k bjaye.
=> Agar, wo item store m present hua toh hum uski "quantity" ki value bhaar nikal lenge aur show kr denge aur nhi hua toh "quantity" ki value 0 hogi.
=> Aur yhe check uss item ki id k basis pr kr rhe h, agar same id wala item pda hua toh bas quantity ki value increment aur decrement krke value de de hume final otherwise 0 value.
=> Humne just general basic maths lgayi apni yha aur kuch nhi kiya.
=> So, ab hum local state wala kaam na krke just read out kr rhe h quanity value count store se jo jada shi approach h.

=> Aur first jo problem thi wo bho solve ho gyi saath m bcoz centrailized area pr apni count ki value h ab, yha tha first issue ki dusre route pr jaane se jese checkout pr jha rhe the toh add btn pr jo value show ho rhi thi wo remove ho jha rhi thi, but ab yhe problem bhi solve ho gyi as ab value globaly preserved h store m hi hum diretly whi se read kr rhe h apni count value as quanity value.
=> Centrailized store me se kbhi value nhi udhati jab tk manually na udhaye.
=> But, agar local variable bnate toh poori value vanished ho jaati.

----> Hence, both problems have solved <------