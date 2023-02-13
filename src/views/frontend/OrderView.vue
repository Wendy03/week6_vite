<template>
  <div class="mt-5">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <h2 class="mb-5">訂單資訊</h2>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <OrderDetail></OrderDetail>
      <OrderForm></OrderForm>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import OrderForm from '../../components/frontend/OrderForm.vue';
import OrderDetail from '../../components/frontend/OrderDetail.vue';
import statusStore from '../../stores/statusStore';

export default {
  data() {
    return {};
  },
  components: { OrderForm, OrderDetail },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
};
</script>
