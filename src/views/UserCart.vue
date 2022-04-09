<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B"> </Loading>
  <div v-if="cartData.carts.length == 0" class="text-center">
    購物車內沒東西，請至產品列表選購
  </div>
  <div v-else class="container mt-5 p-0">
    <h2 class="text-center mb-5 fw-bold">購物車</h2>
    <div class="check-step row g-0 align-items-center text-center">
      <div class="col">
        <span class="fs-7">1</span>
        <p class="m-3 text-soft">確認訂單</p>
        <div class="step-bar"></div>
      </div>
      <div class="col">
        <span class="fs-7">2</span>
        <p class="m-3 text-soft">建立訂單</p>
        <div class="step-bar-none"></div>
      </div>
      <div class="col">
        <span class="fs-7">3</span>
        <p class="m-3 text-soft">完成訂單</p>
        <div class="step-bar-none"></div>
      </div>
    </div>
  </div>
  <div class="container mt-2 mt-md-10" v-if="cartData.carts">
    <div class="row">
      <div class="col">
        <!-- 清除全部購物車 -->
        <button
            type="button"
            class="btn btn-outline-danger btn-sm mb-2 "
            @click="removeCart()"
          >
            <i class="bi bi-trash"> 清除全部購物車 </i>
        </button>
        <div
          class="card pt-2 border-top mb-3 border-0"
          v-for="item in cartData.carts"
          :key="item.id"
        >
          <div class="row g-0">
            <div class="col-3 col-md-2">
              <img
                :src="item.product.imageUrl"
                class="img-fluid"
                style="
                width:100px;
                height:100px
                background-size: cover;
                background-position: center;
                object-fit:cover;
              "
              />
            </div>
            <div
              class="
                col-8 col-md-4
                ms-2
                m-md-2
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="card-body p-0">
                <h5 class="card-title fs-6 fw-bold text-soft m-0">
                  {{ item.product.title }}
                </h5>
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <!-- <div class="input-group input-group-sm ">
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      :disabled="item.id === loadingItem"
                      @change="updateCart(item)"
                      v-model.number="item.qty"
                    />
                    <div class="input-group-text">{{ item.product.unit }}</div>
                  </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                col-12 col-md-3
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <!-- <div class="input-group input-group-sm "> -->
              <!-- <input
                  type="number"
                  class="form-control"
                  min="1"
                  :disabled="item.id === loadingItem"
                  @change="updateCart(item)"
                  v-model.number="item.qty"
                /> -->
              <!-- </div> -->
              <!-- <div class="input-group-text">{{ item.product.unit }}</div> -->
              <!-- 數量 -->
              <div
                class="input-group product-num-group bg-light mt-1 mb-0 my-md-0"
              >
                <!-- 減 -->
                <div class="">
                  <button
                    :disabled="item.qty <= 1 || loadingItem === item.id"
                    @click="updateCart(item, item.qty--)"
                    class="btn border-0"
                    type="button"
                  >
                    <i class="bi bi-dash-lg"></i>
                  </button>
                </div>
                <!-- 數量 -->
                <input
                  type="text"
                  class="
                    form-control
                    border-0
                    text-center
                    my-auto
                    shadow-none
                    bg-light
                    border
                  "
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
            <div
              class="
                col-1 col-md-1
                md-2
                d-flex
                justify-content-end
                align-items-center
                ms-auto
              "
            >
              <p class="card-text mt-2 text-end">
                <small class="text-danger">
                  <div
                    class=""
                    :disabled="loadingItem === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </div>
                </small>
              </p>
            </div>
          </div>
          <div class="text-end"> 定價 {{$filters.currency (item.product.price)}} </div>
          <!-- <small v-if="cartData.final_total !== cartData.total" class="text-success text-end"
            >折扣價：{{ $filters.currency(item.final_total) }}
          </small> -->
          <div
            class="
              mt-2
              text-end
              bg-light
              border-top border-bottom
              text-secondary
              py-2
            "
          >
            小計 NT$ {{ $filters.currency(item.final_total) }}
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="cartData.carts.length !== 0">
      <div class="col-12 col-md-6">
        <p class="bg-soft m-0 p-3 text-white">顧客資訊</p>
        <div class="col p-5 bg-light">
          <!-- <h3 class="bg-secondary text-light my-5 border p-3">填寫訂購資訊</h3> -->
          <Form ref="form" class="" v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label"
                ><span class="text-danger">*</span>Email</label
              >
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label"
                ><span class="text-danger">*</span>收件人姓名</label
              >
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label"
                ><span class="text-danger">*</span>收件人電話</label
              >
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label"
                ><span class="text-danger">*</span>收件人地址</label
              >
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">備註</label>
              <textarea
                name=""
                id="message"
                class="form-control rounded-0"
                cols="30"
                rows="5"
                v-model="form.message"
              ></textarea>
            </div>
            <!-- <div class="text-end my-4 d-grid">
              <button class="btn btn-soft rounded-0">送出訂單</button>
            </div> -->
          </Form>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <p class="bg-soft m-0 p-3 text-white">訂單資訊</p>
        <Form ref="form" class="p-5 bg-light" @submit="createOrder">
          <div class="d-flex my-3">
            <div class="col fw-bold">小計：</div>
            <div class="col fw-bold text-end">
              NT$ {{ $filters.currency(cartData.total) }}
            </div>
          </div>
          <div class="d-flex">
            <div class="col fw-bold">運費：</div>
            <div class="col fw-bold text-end">NT$ 1,000</div>
          </div>
          <div class="d-flex">
            <div class="col fw-bold text-soft opacity-50">優惠促銷：</div>
            <div class="col fw-bold text-end text-soft opacity-50">
              - NT$ 1,000
            </div>
          </div>
          <!-- 優惠券 -->
          <div
            v-if="cartData.carts.length !== 0"
            class="input-group mb-3 input-group-sm"
          >
            <input
              type="text"
              class="form-control rounded-0"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-soft rounded-0"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <div v-else></div>
          <div v-if="cartData.final_total !== cartData.total">
            <div class="text-end text-success">
              折扣價 {{ $filters.currency(cartData.final_total) }}
            </div>
          </div>
          <div
            class="
              mt-2
              text-end
              bg-light
              border-top border-bottom
              text-secondary
              py-2
            "
          >
            總計 NT$ {{ $filters.currency(cartData.final_total) }}
          </div>
        </Form>
        <div class="text-end my-4 d-grid">
          <button class="btn btn-soft rounded-0" @click="createOrder">
            送出訂單
          </button>
        </div>
      </div>
    </div>
    <!-- 舊版表單 -->
    <!-- <div class="row g-0 mb-5">
      <! 購物車列表 -->
      <!-- 左側 - 確認訂單數量價格... -->
      <!-- <div class="col-12 col-lg-7 me-md-auto"> -->
        <!-- <p class="mt-4">確認訂單內容</p> -->
        <!-- <div class="cartTable mt-5"> -->
          <!-- <table class="table align-middle">
            <thead>
              <tr>
                <th style="width: 5%"></th>
                <th style="width: 10%">品項</th>
                <th style="width: 10%">品名</th>
                <th style="width: 15%">數量</th>
                <th style="width: 10%">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cartData.carts">
                <tr v-for="item in cartData.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    <div
                      style="
                        width: 50px;
                        height: 50px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{
                        backgroundImage: `url(${item.product.imageUrl})`,
                      }"
                    ></div>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        :disabled="item.id === loadingItem"
                        @change="updateCart(item)"
                        v-model.number="item.qty"
                      />
                      <div class="input-group-text">
                        {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cartData.final_total !== cartData.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody> -->
            <!-- <p>總共{{cartData.carts.length}} 筆項目 </p> -->
            <!-- <tfoot v-if="cartData.carts.length !== 0"> -->
              <!-- <tr>
                <td colspan="5">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm mt-4 mb-4"
                    @click="removeCart()"
                  > -->
                    <!-- <i class="bi bi-trash"> </i> -->
                    <!-- 清除全部購物車
                  </button>
                </td>
              </tr> -->
              <!-- <tr>
                <td colspan="4" class="text-end">總計</td>
                <td class="text-end">
                  {{ $filters.currency(cartData.total) }}
                </td>
              </tr>
              <tr v-if="cartData.final_total !== cartData.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cartData.final_total) }}
                </td>
              </tr>
            </tfoot>
            <tfoot v-else>
              <tr>
                <td colspan="5">
                  <p class="text-center text-danger">請前往產品列表選購</p>
                </td>
              </tr>
            </tfoot>
          </table>
          <div
            v-if="cartData.carts.length !== 0"
            class="input-group mb-3 input-group-sm"
          >
            <input
              type="text"
              class="form-control rounded-0"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-soft rounded-0"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <div v-else></div>
        </div>
      </div> -->
      <!-- 右側 - 送出表單 -->
      <!-- <div class="col-12 col-lg-4 bg-light mt-0 mt-lg-10 p-0 p-md-2 p-lg-5"> -->
        <!-- <h3 class="bg-secondary text-light my-5 border p-3 ">Step２.填寫資料</h3> -->
        <!-- <div class="col mt-5"> -->
          <!-- <h3 class="bg-secondary text-light my-5 border p-3">填寫訂購資訊</h3> -->
          <!-- <Form ref="form" class="" v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label"
                ><span class="text-danger">*</span>Email</label
              >
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label"
                ><span class="text-danger">*</span>收件人姓名</label
              >
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label"
                ><span class="text-danger">*</span>收件人電話</label
              >
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label"
                ><span class="text-danger">*</span>收件人地址</label
              >
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">備註</label>
              <textarea
                name=""
                id="message"
                class="form-control rounded-0"
                cols="30"
                rows="5"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end my-4 d-grid">
              <button class="btn btn-soft rounded-0">送出訂單</button>
            </div>
          </Form> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      products: [],
      product: {},
      cartData: {
        carts: {},
      },
      loadingItem: '', // 對應品項 id
      isLoading: false,
      coupon_code: '2022',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('產品列表:', response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
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
    // // 加入購物車
    // addToCart(id, qty = 1) {
    //   const data = {
    //     product_id: id,
    //     qty,
    //   };
    //   this.loadingItem = id;
    //   this.$http
    //     .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
    //     .then((res) => {
    //       console.log(res);
    //       this.loadingItem = '';
    //       // get-cart
    //       emitter.emit('get-cart');
    //     });
    // },
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
    // 套用優惠券
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCarts();
        this.isLoading = false;
      });
    },
    // 訂單成立，送出表單
    createOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          this.$router.push(`/check/${response.data.orderId}`);
          this.$refs.form.resetForm();
          this.isLoading = false;
          // emitter.emit('update-cart'); // 更新購物車數量
        }
      });
    },
  },
  mounted() {
    this.getProducts();
    this.getCarts();
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
