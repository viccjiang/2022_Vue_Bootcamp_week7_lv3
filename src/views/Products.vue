<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary" type="button"
      @click="$refs.productModal.showModal()">建立新的產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否上架</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-end">{{ item.oringin_price }}</td>
        <td class="text-end">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">上架中</span>
          <span class="text-muted" v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm">
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal"></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  components: {
    ProductModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http
        .get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response.data);
            this.products = response.data.products;
            this.pagination = response.data.pagination;
            console.log(this.products, this.pagination);
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    // 重新整理頁面後，跳出請重新登入。Cookie 內是有 token 的，不過還是跳出重新登入。
    this.getProducts();
  },
};
</script>
