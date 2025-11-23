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