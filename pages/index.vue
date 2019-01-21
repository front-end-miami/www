<template>
  <section class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col text-center">
            <logo/>
          </div>
          <div class="col">
            <h1 class="title">{{content.title}}</h1>
            <a :href="content.links.slack">
              Meetup
            </a>
            <slack-button/>
            <div class="card">
              <div class="card-body">
                <div class="card-text">
                  <div v-html="content.description">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SlackButton from '../components/SlackButton'

export default {
  components: {
    SlackButton,
    Logo
  },
  data: () => ({
    content: {
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
      links: {
        meetup: 'http://meetu.ps/c/z2w0/4PjfC/f',
        slack: 'https://join.slack.com/t/fedm/shared_invite/enQtMzgyMTMzNTI5NDQ3LTdiMmRjNDA2ODE5YWI0NGFmZjg0ZGUzZTUxMDg4MmJmYWI4ZWZjZDNjZjJkYmUyMThlMDVlMzA2YWY4ZWU5YWQ'
      }
    }
  })
}
</script>

<style>
</style>
