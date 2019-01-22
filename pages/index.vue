<template>
  <section class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col-12 col-lg-6 text-center">
            <logo style="height: 100%; width: 100%"/>
          </div>
          <div class="col-12 col-lg-6">
            <h1 class="title">{{content.title}}</h1>
            <nav class="my-3">
              <meetup-button/>
              <slack-button/>
            </nav>
            <div class="card">
              <div class="card-body">
                <div class="card-text">
                  <div id="description" v-html="content.description">
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
import MeetupButton from '../components/MeetupButton'

export default {
  head () {
    return {
      meta: [{
        hid: `description`,
        name: 'description',
        content: `Front-End Developers of Miami is a MeetUp group that tries to have monthly gatherings about topics relevant to web development and front-end engineering.`
      }]
    }
  },
  components: {
    MeetupButton,
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
      </p>`
    }
  })
}
</script>

<style>
</style>
