<template>
  <div>
    <div v-if="cart.carts?.length">
      <button
      type="button"
      class="btn btn-outline-danger"
      @click="deleteAllCarts"
    >
      清空購物車
    </button>
      <div
        v-for="item in cart.carts"
        :key="item.id"
        class="d-flex mt-4 bg-light"
      >
        <img
          :src="item.product.imageUrl"
          :alt="item.product.title"
          style="width: 120px; height: 120px; object-fit: cover"
        />
        <div class="w-100 p-3 position-relative">
          <a
            href="#"
            @click.prevent="removeCartItem(item.id)"
            class="position-absolute"
            style="top: 16px; right: 16px"
            ><i class="bi bi-x-lg"></i
          ></a>
          <p class="mb-0 fw-bold">{{ item.product.title }}</p>
          <p class="mb-1 text-muted" style="font-size: 14px">
            {{ item.product.description }}
          </p>
          <div class="d-flex justify-content-between align-items-center w-100">
            <div class="input-group w-50 align-items-center">
              <div class="input-group-prepend pe-1">
                <button
                  href="#"
                  @click.prevent="updateCart(item, item.qty - 1)"
                  :disabled="isProcessing || item.qty === 1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light px-0"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                readonly
                :value="item.qty"
              />
              <div class="input-group-append ps-1">
                <button
                  href="#"
                  @click.prevent="updateCart(item, item.qty + 1)"
                  :disabled="isProcessing || item.qty === 5"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <p class="mb-0 ms-auto">NT${{ item.total }}</p>
          </div>
        </div>
      </div>
      <table class="table mt-4 text-muted">
        <tbody>
          <tr>
            <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
              小計
            </th>
            <td class="text-end border-0 px-0 pt-0">NT${{ cart.total }}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between mt-4">
        <p class="mb-0 h4 fw-bold">總計</p>
        <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
      </div>
      <RouterLink to="/order" class="btn btn-secondary btn-block mt-4 rounded-0 py-3"
        >確認訂單</RouterLink
      >
    </div>
    <div v-else>
      <h4 class="mt-5">尚無資料</h4>
      <RouterLink class="btn btn-secondary mt-5" to="/products">選購去</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/frontend/cartStore';
import statusStore from '../../stores/statusStore';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
  methods: {
    ...mapActions(cartStore, [
      'getCarts',
      'updateCart',
      'removeCartItem',
      'deleteAllCarts',
    ]),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isProcessing']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
