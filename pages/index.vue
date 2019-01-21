<template>
  <section class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col text-center">
            <logo/>
          </div>
          <div class="col">
            <h1 class="title">{{title}}</h1>
            <a href="http://meetu.ps/c/z2w0/4PjfC/f">
              Meetup
            </a>
            <a href="http://meetu.ps/c/z2w0/4PjfC/f" class="btn btn-outline-success">
              Slack
            </a>
            <div v-html="description">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SlackLogo from '../components/SlackLogo'

export default {
  components: {
    SlackLogo,
    Logo
  },
  data: () => ({
    title: 'Front-End Miami',
    description: `<p>
        Front-End Developers of Miami is a MeetUp group that tries to have monthly
        gatherings about topics relevant to web development and front-end engineering.
      </p>
      <p>
        Venues have included The LAB Miami and O Cinema Wynwood, both in Wynwood.
        Topics include, but are certainly not limited to the following: responsive design using CSS, HTML5,
        client side programming and practices with Javascript as well as the tools
        and practices to keep everything in its place.
      </p><p>
        We are always looking for sponsors (for food & beverages)as well as speakers for our gatherings.
      </p>`,
    links: [
      {}
    ]
  })
}
</script>

<style>
</style>
