
// src/stores/cartStore.ts
import { create } from 'zustand';

// 상품의 타입을 정의합니다.
interface Product {
  id: number;
  name: string;
}

// 스토어의 상태와 액션의 타입을 정의합니다.
interface CartState {
  items: Product[]; // 장바구니에 담긴 상품 배열
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  getItemCount: () => number;
}

// create 함수를 사용하여 스토어를 생성합니다.
export const useCartStore = create<CartState>((set, get) => ({
  // 초기 상태 (State)
  items: [],

  // 상태를 변경하는 함수들 (Actions)
  addItem: (item) => {
    // 이미 장바구니에 있는 상품인지 확인 (여기서는 간단하게 중복 추가 허용)
    set((state) => ({
      items: [...state.items, item],
    }));
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },

  // get() 함수를 사용하여 현재 상태에 접근할 수 있습니다.
  getItemCount: () => {
    return get().items.length;
  },
}));
