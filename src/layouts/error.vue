<template>
  <div class="lc-container">
    <div class="title">{{ message }}</div>
    <p v-if="statusCode === 404">
      <a
        :href="HOMEPAGE"
        class="error-link"
      >
        {{ $t('LikeButton.label.backToHome')}}
      </a>
    </p>
  </div>
</template>

<script>
const HOMEPAGE = 'https://like.co';

export default {
  name: 'nuxt-error',
  props: ['error'],
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
    };
  },
  data() {
    return {
      HOMEPAGE,
    };
  },
  mounted() {
    console.error(this.error);
    setTimeout(() => {
      window.location.href = HOMEPAGE;
    }, 3000);
  },
  watch: {
    error(newErr) {
      if (newErr) {
        console.error(newErr);
      }
    },
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || 'Error';
    },
  },
};
</script>

<style>
</style>
