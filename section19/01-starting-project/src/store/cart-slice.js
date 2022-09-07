import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0, //수량의 합
  },
  reducers: {
    addItemToCart(state, action) {
      // dispatch될 떄 추가정보를 dispatch해야하기 때문에 actions이 필요하다
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); // 이미 항목이 존재하는지 파악
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        }); //리더스 툴킷이 자동으로 내부적으로 조작하지 않게 해서 push 사용 가능
      } else {
        //항목이 존재하는 경우
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        //1과 같으면 배열에서 항목을 완전히 제거한다.
        state.items = state.itmes.filter((item) => item.id !== id);
      } else {
        //1보다 크면 단지 항목의 숫자를 하나 줄이면 된다.
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
