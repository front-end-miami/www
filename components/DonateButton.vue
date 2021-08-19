<template>
  <a
    :href="$options.static.link"
    class="btn btn-info font-weight-bolder"
  >
    <span class="d-flex justify-content-center align-items-center">
      <donor-box-logo class="logo" /> donorbox
    </span>
  </a>
</template>

<script>
  import DonorBoxLogo from './DonorBoxLogo'

  export default {
    name: 'DonateButton',
    static: {
      link: 'https://donorbox.org/front-end-miami-developer-community'
    },
    components: { DonorBoxLogo }
  }
</script>

<style scoped>
.logo {
  height: 1rem;
  margin-right: 0.5em;
}
</style>
