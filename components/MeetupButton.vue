<template>
  <a
    :href="content.link"
    class="btn btn-meetup btn-outline-danger"
  >
    <span class="d-flex justify-content-center align-items-center">
      <img
        class="logo"
        src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg"
        alt="Meetup"
      >
    </span>
  </a>
</template>

<script>
  export default {
    name: 'MeetupButton',
    data: () => ({
      content: {
        link: 'http://meetu.ps/c/z2w0/4PjfC/f'
      }
    })
  }
</script>

<style scoped lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.btn-meetup {
  font-weight: bold;
  .logo {
    height: 24px;
  }
}
</style>
