<template id="pagination-template">
  <nav aria-label="Page navigation" v-if="pages.total_pages > 1">
    <ul class="pagination justify-content-end">
      <li class="page-item" v-if="pages.has_pre">
        <a
          class="page-link bi bi-caret-left-fill"
          href="#"
          @click.prevent="updatePage(pages.current_page - 1)"></a>
      </li>
      <template v-for="page in pages.total_pages" :key="page">
        <li class="page-item" :class="{'active': pages.current_page === page}">
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
      </template>
      <li class="page-item">
        <a
          class="page-link bi bi-caret-right-fill"
          href="#"
          v-if="pages.has_next"
          @click.prevent="updatePage(pages.current_page + 1)"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  emits: ['update-page'],
  template: '#pagination-template',
  methods: {
    updatePage(page) {
      if (this.pages.current_page === page) return;
      this.$emit('update-page', page);
    },
  },
};
</script>
