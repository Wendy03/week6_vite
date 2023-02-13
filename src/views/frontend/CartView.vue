<template>
  <div class="row justify-content-center">
    <div
      class="col-md-6 bg-white py-5"
      style="min-height: calc(100vh - 56px - 76px)"
    >
      <div class="d-flex justify-content-between">
        <h2 class="mt-2">購物車</h2>
      </div>
      <CartList></CartList>
    </div>
  </div>
</template>

<script>
import CartList from '../../components/frontend/CartList.vue';

export default {
  data() {
    return {};
  },
  components: { CartList },
};
</script>
