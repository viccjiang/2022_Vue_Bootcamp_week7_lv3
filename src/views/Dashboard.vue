<template>Dashboard</template>

<script>
export default {
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jiangsToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http
      .post(api, this.user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.dir(error.response.data.message);
        this.$router.push('login');
      });
  },
};
</script>
