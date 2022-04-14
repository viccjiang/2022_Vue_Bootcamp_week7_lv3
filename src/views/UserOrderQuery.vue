<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
      <div class="row">
          <div class="col">
              <label class="mb-3" for="orderId">訂單編號</label>
              <div class="d-flex">
                <input
                    type="text"
                    placeholder="請輸入訂單編號"
                    id="orderId"
                    class="input-group-text bg-light text-soft "
                    v-model.trim="orderId"/>
                <button
                    type="button"
                    class="btn btn-soft"
                    @click="getOrder"
                    >送出
                </button>
              </div>
          </div>
          <ul v-if="orderId" class="list-unstyled">
            <li>購買日期：{{ create_at }}</li>
            <li>姓名：{{ orderUser.name }}</li>
            <li>電話：{{ orderUser.tel }}</li>
            <li>地址：{{ orderUser.address }}</li>
            <li>信箱：{{ orderUser.email }}</li>
            <li>付款金額：{{ queryOrder[0]?.total }}</li>
            <li>付款狀態：{{ is_paid ? '已付款' : '未付款' }}</li>
            {{ queryOrder }}
          </ul>
      </div>
  </div>
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      order: {},
      orderId: '',
      queryOrder: [],
      create_at: '',
      orderUser: [],
      is_paid: '',
      orderProducts: [],
      isLoading: false,
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          console.log('購物車：', res);
          this.cartData = res.data.data;
        });
    },
    getOrder() {
      if (!this.orderId) {
        return;
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.orders;
          console.log(this.order);
          this.filterOrder();
          this.create_at = this.queryOrder[0].create_at;
          this.create_at = new Date(this.create_at * 1000).toISOString().substring(0, 10);
          this.orderUser = this.queryOrder[0].user;
          this.is_paid = this.queryOrder[0].is_paid;
          this.orderProducts = this.queryOrder[0].products;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.order.is_paid = true;
          console.log(this.order.is_paid);
          this.getOrder();
          this.getCarts();
          emitter.emit('update-cart'); // 更新購物車數量
        }
      });
    },
    filterOrder() {
      this.queryOrder = this.order.filter((order) => order.id === this.orderId);
      console.log(this.queryOrder);
    },
  },
  created() {
    emitter.on('queryOrder', (orderId) => {
      this.orderId = orderId;
      console.log(this.orderId);
    });
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>

<style lang="scss">
.check-step span {
  width: 20px;
  height: 20px;
  padding: 6px 10px;
  justify-content: center;
  background: #236f6b;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 5px;
}
.step-bar {
  width: 100%;
  height: 5px;
  background: #236f6b;
}
.step-bar-none {
  width: 100%;
  height: 5px;
  background: rgba(35, 111, 107, 0.2);
}
</style>
