<template>
  <div id="nav">
    <router-link to="/">首頁</router-link> |
    <router-link to="/products">前台產品列表</router-link> |
    <router-link to="/cart"
      >前台購物車
      <span class="badge badge-pill rounded-pill bg-danger">{{
        cart.carts?.length
      }}</span>
    </router-link>
    | <router-link to="/admin/products">後台管理</router-link> |
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/frontend/cartStore';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
