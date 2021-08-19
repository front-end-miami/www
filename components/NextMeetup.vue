<template>
  <section>
    <h5>Events</h5>

    <!--Loading-->
    <next-meetup-loading v-if="loading" />

    <!--Error-->
    <template v-else-if="error">
      <div class="card alert-danger mb-3 text-danger">
        <div class="card-body">
          <strong>Error! </strong>
          <p class="card-text">
            {{ error }}
          </p>
        </div>
      </div>
    </template>

    <!--Empty-->
    <template v-else-if="hasNoMeetup">
      <div class="card alert-warning mb-3">
        <div class="card-body">
          <p class="card-text">
            ⚠️ There are no events scheduled at this time, or we an experiencing
            an error with the api. You can find event details on
            <a
              href="https://www.meetup.com/Front-end-Developers-of-Miami/"
            >our meetup page</a>.
          </p>
        </div>
      </div>
    </template>

    <!--Content-->
    <template v-else>
      <div class="card mb-3 border-warning event-wrapper">
        <a
          :href="meetup.link"
          class="card-body text-decoration-none text-dark"
        >
          <h5 class="card-title">
            <span class="event-date">{{
              meetup.local_date | dateConvert
            }}</span>
            @ <span class="event-time">{{ meetup.time | timeConvert }}</span> -
            <span class="event-title">{{ meetup.name }}</span>
          </h5>
          <div
            class="card-text event-description"
            v-html="meetup.description"
          />
          <span style="text-decoration: underline">More Details</span>
        </a>
      </div>
    </template>
  </section>
</template>

<script>
  import { jsonpFetch, dateConvert, timeConvert } from '~/libs/utilities'
  import NextMeetupLoading from './NextMeetupLoading.vue'

  export default {
    name: 'NextMeetup',
    components: { NextMeetupLoading },
    filters: { dateConvert, timeConvert },
    data: () => ({
      meetup: {},
      loading: true,
      error: null
    }),
    computed: {
      hasNoMeetup () {
        return !this.meetup
      }
    },
    async mounted () {
      await this.fetchMeetup()
    },
    methods: {
      async fetchMeetup () {
        const MEETUP_URL =
          'https://api.meetup.com/Front-end-Developers-of-Miami/events?page=1'

        try {
          this.loading = true
          const res = await jsonpFetch(MEETUP_URL)
          this.meetup = res.data[0]
        } catch (error) {
          console.error(error.message)
          this.error = error.message
        } finally {
          this.loading = false
        }
      }
    }
  }
</script>
