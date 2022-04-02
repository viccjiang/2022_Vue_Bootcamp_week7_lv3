<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand brandlogo" to="/"><span class="brandlogos">re.</span>HOUSE </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-flex align-items-center flex-column flex-lg-row">
          <div class="position-relative">
            <a href="#" class="nav-link"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="bi bi-bag text-secondary"></i>
              <div
                class="
                  rounded-circle
                  bg-danger
                  text-light
                  position-absolute
                  py-1
                  px-2
                "
                style="font-size: 6px; top: -7px; right: -10px"
                v-if="cartData.carts"
              >
                {{ cartData.carts.length }}
              </div>
            </a>
            <!-- <router-link class="nav-link fs-5" to="/cart">
              <i class="bi bi-bag text-secondary"></i>
              <div
                class="
                  rounded-circle
                  bg-danger
                  text-light
                  position-absolute
                  py-1
                  px-2
                "
                style="font-size: 6px; top: -7px; right: -10px"
                v-if="cartData.carts"
              >
                {{ cartData.carts.length }}
              </div>
            </router-link> -->
          </div>
          <div>
            <router-link class="nav-link fs-5 text-secondary" to="/dashboard/products">
              <i class="bi bi-person-circle"></i
            ></router-link>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!-- data-bs-scroll="true"  data-bs-backdrop="false" -->
  <div class="offcanvas offcanvas-end" ref="offcanvas"  data-bs-scroll="true" data-bs-backdrop="false" style="overflow: auto" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class=" bg-primary offcanvas-header text-white">
    <h5 id="offcanvasRightLabel " class="text-center m-0">購物車</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div v-if="cartData.carts.length >0">
  <div class="offcanvas-body d-flex flex-column justify-content-between">
    <div class="container">
    <div class="row  border-bottom mb-3 " v-for="item in cartData.carts" :key="item.id">
      <div class="col-2 d-flex flex-column align-items-center justify-content-center" >
        <p
          type=""
          class="btn btn-sm text-secondary text-start m-0"
          :disabled="loadingItem === item.id"
          @click="removeCartItem(item.id)"
        >
          <i class="bi bi-trash3"></i>
        </p>
      </div>
      <div
      class="col-2 mb-2 "
      style="
        height: 50px;
        width:50px;
        background-size: cover;
        background-position: center;
      "
      :style="{ backgroundImage: `url(${item.product.imageUrl})` }">
        <!-- {{item.product.imageUrl}} -->
      </div>
      <div class="col d-flex flex-column fs-6 fw-bold align-items-start justify-content-center" >
        {{item.product.title}}
      </div>
      <div class="border-top d-flex justify-content-center bg-light">
      <div class="col d-flex flex-column ms-auto " >
        <div
          class="price d-flex justify-content-md-between flex-column flex-nowrap flex-md-row "
        >
          <!-- 數量 -->
          <div
            class="input-group product-num-group bg-light mt-1 mb-4 my-md-0 "
          >
            <!-- 減 -->
            <div class="">
              <button
                :disabled="item.qty <= 1 || loadingItem === item.id"
                @click="updateCart(item, item.qty--)"
                class="btn border-0 bg-light"
                type="button"
              >
                <i class="bi bi-dash-lg bg-light"></i>
              </button>
            </div>
            <!-- 數量 -->
            <input
              type="text"
              class="form-control border-0 text-center my-auto shadow-none bg-light border"
              aria-describedby="button-addon1"
              v-model.lazy="item.qty"
            />
            <!-- 加 -->
            <div class="">
              <button
                :disabled="loadingItem === item.id"
                @click="updateCart(item, item.qty++)"
                class="btn border-0"
                type="button"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
          </div>
      </div>
      <div class="col d-flex flex-column ms-auto text-end  fs-7 text-secondary align-items-end justify-content-center" >
        ${{item.final_total}}
      </div>
      </div>
    </div>
    </div>
    <p class="text-center m-0 fs-6 text-danger mb-3">總計 $ {{cartData.final_total}} 元 </p>
    <router-link class="nav-link text-white p-0 d-grid btn btn-primary text-center m-0 p-3" to="/cart" @click="hideOff">結帳去</router-link>
    <!-- {{ cartData.carts }} -->
  </div>
  </div>
  <div v-else class="offcanvas-body d-flex flex-column align-items-center justify-content-center">
  <div  class="text-center d-flex flex-column align-items-center justify-content-center">
    <p class="m-0 ">你的購物車沒有商品</p>
    <div class="d-flex align-items-center justify-content-center">
      <router-link to="/"><button type="button" class="btn btn-outline-secondary m-2">回首頁</button></router-link>
      <router-link to="products"><button type="button" class="btn btn-outline-secondary">購物去</button></router-link>
    </div>
  </div>
  </div>

</div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      loadingItem: '',
      cartData: {
        carts: [],
      },
      offcanvas: '',
    };
  },
  methods: {
    getCarts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('購物車:', res);
          this.cartData = res.data.data;
        });
    },
    // 刪除購物車品項
    removeCartItem(id) {
      this.loadingItem = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項');
        this.loadingItem = '';
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    // 刪除全部購物車品項
    removeCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除全部購物車品項');
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    // 更新購物車
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.loadingItem = '';
        this.getCarts();
        this.isLoading = false;
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
    showOff() {
      this.offcanvas.show();
    },
    hideOff() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.getCarts();
    emitter.on('update-cart', () => {
      this.getCarts();
    });
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');

.brandlogo{
  font-family:'Expletus Sans', cursive;
  font-weight: Bold ;
  font-size: 42px;;
}

.brandlogos{
  font-family:'Expletus Sans', cursive;
  font-weight: 400;
  font-size: 30px;
  font-style: italic;
}

</style>
