<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row">
      <!-- 左側分類欄 -->
      <div class="col-3 mt-4">
      <!-- 查詢商品 -->
      <div class="form-floating">
        <input type="text" class="form-control mb-3" id="search" placeholder="Search" v-model.lazy="cacheSearch">
        <label class="text-secondary" for="search">查詢商品</label>
      </div>
        <!-- 左側分類欄 -->
        <div class="list-group rounded-0">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = ''; this.$route.params.selectCategory = ''"
            >全部 </a
          >
          <a
            href="#"
            v-for="item in categories"
            :key="item"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = item"
            >{{ item }}</a
          >
        </div>
      </div>
      <!-- 右側產品列 -->
      <div class="col-9">
        <div class="row mt-4">
          <div class="col mb-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <!-- 如果有查詢商品-->
              <template v-if="cacheSearch">
                <div class="col" v-for="item in filterSearch" :key="item.id">
                <div class="card h-100 rounded-0">
                  <a
                    href="#"
                    class="rounded-0 "
                    @click.prevent="getProduct(item.id)"
                  >
                    <div
                      style="
                        height: 300px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                  </a>
                  <!-- <img :src="item.imageUrl" class="card-img-top" alt="..." /> -->
                  <div class="card-body">
                    <span class="badge bg-secondary text-light mb-2">{{
                      item.category
                    }}</span>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="h6 text-secondary">
                      {{ item.description }}
                    </h6>

                    <div class="h5 list-inline-item" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del
                      class="h6 list-inline-item text-secondary mt-4"
                      v-if="item.price"
                      >原價 NT$
                      {{ $filters.currency(item.origin_price) }} 元</del
                    >
                    <div class="h5 text-danger mb-3" v-if="item.price">
                      NT$ {{ $filters.currency(item.price) }} 元
                    </div>
                    <!-- 按鈕 -->
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <!-- 加入購物車 -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)"
                      >
                        <div
                          v-if="this.status.loadingItem === item.id"
                          class="spinner-border text-danger spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加到購物車
                      </button>
                      <!-- 我的最愛 -->
                      <button
                        type="button"
                        @click="addMyFavorite(item)"
                        :class="{ active: myFavorite.includes(item.id) }"
                        class="
                          btn
                          d-block
                          btn-outline-secondary
                          rounded-0
                          border
                        "
                      >
                        加到我的最愛
                      </button>
                      <!-- 查看細節 -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        @click="getProduct(item.id)"
                      >
                        查看更多
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </template>
              <!-- 如果沒有查詢商品-->
              <template v-else>
              <div class="col" v-for="item in filterProducts" :key="item.id">
                <div class="card h-100 rounded-0">
                  <a
                    href="#"
                    class="rounded-0 "
                    @click.prevent="getProduct(item.id)"
                  >
                    <div
                      style="
                        height: 300px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                  </a>
                  <!-- <img :src="item.imageUrl" class="card-img-top" alt="..." /> -->
                  <div class="card-body">
                    <span class="badge bg-secondary text-light mb-2">{{
                      item.category
                    }}</span>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="h6 text-secondary">
                      {{ item.description }}
                    </h6>

                    <div class="h5 list-inline-item" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del
                      class="h6 list-inline-item text-secondary mt-4"
                      v-if="item.price"
                      >原價 NT$
                      {{ $filters.currency(item.origin_price) }} 元</del
                    >
                    <div class="h5 text-danger mb-3" v-if="item.price">
                      NT$ {{ $filters.currency(item.price) }} 元
                    </div>
                    <!-- 按鈕 -->
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <!-- 加入購物車 -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)"
                      >
                        <div
                          v-if="this.status.loadingItem === item.id"
                          class="spinner-border text-danger spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加到購物車
                      </button>
                      <!-- 我的最愛 -->
                      <button
                        type="button"
                        @click="addMyFavorite(item)"
                        :class="{ active: myFavorite.includes(item.id) }"
                        class="
                          btn
                          d-block
                          btn-outline-secondary
                          rounded-0
                          border
                        "
                      >
                        加到我的最愛
                      </button>
                      <!-- 查看細節 -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        @click="getProduct(item.id)"
                      >
                        查看更多
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </template>
            </div>
          </div>
          <!-- 分頁 -->
          <Pagination
            :pages="pagination"
            @update-page="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '../components/Pagination.vue';
// LocalStorage
// 轉型
const storageMethods = {
  save(favorite) {
    const favoriteString = JSON.stringify(favorite);
    // hexFavorite
    localStorage.setItem('hexFavorite', favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};
export default {
  data() {
    return {
      cacheSearch: '', // 搜尋輸入
      isLoading: false,
      products: [],
      product: {},
      pagination: '',
      status: {
        loadingItem: '', // 對應品項 id
      },
      categories: [],
      selectCategory: '',
      myFavorite: storageMethods.get() || [],
    };
  },
  components: {
    Pagination,
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    addMyFavorite(item) {
      console.log('addMyFavorite');
      // this.myFavorite.push(item.id);
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
      } else {
        this.myFavorite.push(item.id);
      }
      console.log(this.myFavorite);
      // storageMethods.save(this.myFavorite);
    },
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url)
        .then((response) => {
          if (!response.data.success) {
            this.isLoading = false;
            return;
          }
          this.products = response.data.products;
          console.log('取得全部', this.products);
          this.getCategories();
          console.log('取得分類', this.selectCategory);
          const { selectCategory } = this.$route.params;
          if (selectCategory) {
            this.selectCategory = selectCategory;
          }
          if (this.selectCategory !== '') {
            this.pagination = {};
          } else {
            this.setPagination(page);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.$httpMessageState(error, '連線錯誤');
          this.isLoading = false;
        });
    },
    setPagination(page = 1) {
      const perPage = 12;
      this.pagination = {
        total_pages: Math.ceil(this.products.length / perPage),
        current_page: page,
        has_pre: page !== 1,
        has_next: false,
        category: null,
      };
      if (this.pagination.current_page >= this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.total_pages;
        this.pagination.has_next = false;
      } else {
        this.pagination.has_next = true;
      }
      const minPage = (this.pagination.current_page * perPage) - perPage;
      const maxPage = (this.pagination.current_page * perPage);
      this.products = this.products.slice(minPage, maxPage);
    },
    getCategories() {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        console.log(res);
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
  },
  watch: {
    selectCategory(newValue, preValue) {
      if (newValue === '' || preValue === '') {
        this.getProducts();
      }
    },
    cacheSearch() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
      });
    },
    myFavorite: {
      // 深層監聽
      handler() {
        storageMethods.save(this.myFavorite);
      },
      deep: true,
    },
  },
  computed: {
    // 產生新的資料集
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory));
      // 空字串，或任何符合結果都會是 “真值”
    },
    // 查詢商品
    filterSearch() {
      /* 篩選與渲染
       *  .filter → 陣列內容篩選與條件相符並產生新陣列。
       *  .match → 找出內容有匹配的資料。
       *  當 cacheSearch 無資料時，輸出與 products 一樣的陣列，
       *  當 cacheSearch 有資料時，輸出與 products 有相符的資料。 */
      return this.products.filter((item) => item.title.match(this.cacheSearch));
    },
  },
  mounted() {
    // 改為 mounted
    // this.$http.defaults.baseURL = process.env.VUE_APP_API;
    this.getProducts();
  },
};
</script>
