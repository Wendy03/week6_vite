import axios from 'axios';
import { defineStore } from 'pinia';
import Toast from '../../utils/Toast';
import statusStore from '../statusStore';

const status = statusStore();

const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore('cart', {
  state: () => ({
    cart: {},
  }),
  actions: {
    getCarts() {
      status.isLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/cart`)
        .then((res) => {
          const { data } = res.data;
          status.isLoading = false;
          this.cart = data;
        })
        .catch(() => {
          status.isLoading = false;
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
    addToCart(id, qty = 1) {
      status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch(() => {
          status.loadingItem = '';
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
    updateCart(item, qty) {
      const cart = {
        product_id: item.product_id,
        qty,
      };
      status.loadingItem = item.id;
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch(() => {
          status.loadingItem = '';
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
    removeCartItem(id) {
      status.loadingItem = id;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch(() => {
          status.loadingItem = '';
          Toast.fire({
            title: '無法刪除資料，稍後再試',
            icon: 'error',
          });
        });
    },
    deleteAllCarts() {
      status.isProcessing = true;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/carts`)
        .then((res) => {
          const { message } = res.data;
          status.isProcessing = false;
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch(() => {
          status.isProcessing = false;
          Toast.fire({
            title: '無法刪除資料，稍後再試',
            icon: 'error',
          });
        });
    },
  },
});
