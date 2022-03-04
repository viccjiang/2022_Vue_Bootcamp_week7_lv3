<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      建立新的產品
    </button>
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
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span class="badge bg-success" v-if="item.is_enabled">上架中</span>
          <span class="badge bg-secondary" v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)"
            >
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
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {}, // 外層的 tempProduct 透過 props 傳送前內後外之後，元件內的 product 接收
      isNew: false, // 判斷是否為新增
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
            // console.log(this.products, this.pagination);
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
          this.$router.push('/login');
        });
    },
    openModal(isNew, item) {
      // console.log(isNew, item);
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item }; // 用展開把資料取出來
      }
      this.isNew = isNew; // 把狀態存起來
      const productComponent = this.$refs.productModal;
      productComponent.showModal(); // 再打開內層的 modal
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯 (用 isNew 來判斷新增或編輯) ( 若不是新增就要改變 api 路徑以及 httpMethod ) (取到產品 id 才有辦法編輯)
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          console.log(response);
          productComponent.hideModal();
          this.getProducts();
        })
        .catch((error) => {
          console.dir(error.response.data.message);
        });
    },
  },
  mounted() {
    // 重新整理頁面後，跳出請重新登入。Cookie 內是有 token 的，不過還是跳出重新登入。
    this.getProducts();
  },
};
</script>
