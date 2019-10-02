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
          slack: 'https://join.slack.com/t/fedm/shared_invite/enQtMzgyMTMzNTI5NDQ3LWUzNTc2MmJjYzE0NTg1YjI0YmFmNjE3MGY4MzAxYmZlNjlkMTViNDEyODdkYTJhMzAwNjBjMzYxNzRiMzNkMzY'
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
