<template>
  <a :href="content.links.slack" class="btn btn-slack">
    <span class="d-flex justify-content-center align-items-center">
      <slack-logo class="logo"/>
    Join Our Slack
    </span>
  </a>
</template>

<script>
  import SlackLogo from './SlackLogo'
  export default {
    name: "SlackButton",
    components: {SlackLogo},
    data: () => ({
      content: {
        links: {
          slack: 'https://join.slack.com/t/fedm/shared_invite/enQtMzgyMTMzNTI5NDQ3LTdiMmRjNDA2ODE5YWI0NGFmZjg0ZGUzZTUxMDg4MmJmYWI4ZWZjZDNjZjJkYmUyMThlMDVlMzA2YWY4ZWU5YWQ'
        }
      }
    })
  }
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";

  .btn-slack {
    @include button-variant($indigo, $indigo);
    font-weight: bold;
    .logo {
      height: 1rem;
      margin-right: 0.5em;
    }
  }


</style>
