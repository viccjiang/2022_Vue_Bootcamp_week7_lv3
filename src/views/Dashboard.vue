<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      check: false,
    };
  },
  components: {
    Navbar,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jiangsToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http
      .post(api, this.user)
      .then((response) => {
        console.log('user/check', response);
        if (response.data.success) {
          this.check = true;
        } else {
          this.$router.push('/login');
        }
      })
      .catch((error) => {
        console.dir(error.response.data.message);
        this.$router.push('/login');
      });
  },
};
</script>
