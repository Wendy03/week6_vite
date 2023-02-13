<template>
  <div class="mt-5">
    <h2>訂單完成</h2>
    <RouterLink to="/cart" class="text-dark mt-md-0 mt-3"
      ><i class="fas fa-chevron-left me-2"></i>回購物車
    </RouterLink>
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
