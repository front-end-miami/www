<template>
  <section>
    <h5>Events</h5>
    <next-meetup-loading v-if="loading" />
    <next-meetup-error v-else-if="error" />
    <next-meetup-empty v-else-if="hasNoMeetup" />
    <next-meetup-content
      v-else
      v-bind="meetup"
    />
  </section>
</template>

<script>
// Deps
  import { jsonpFetch } from '~/libs/utilities'

  // Components
  import NextMeetupLoading from './NextMeetupLoading'
  import NextMeetupError from './NextMeetupError'
  import NextMeetupEmpty from './NextMeetupEmpty.vue'
  import NextMeetupContent from './NextMeetupContent.vue'

  export default {
    name: 'NextMeetup',
    components: {
      NextMeetupLoading,
      NextMeetupError,
      NextMeetupEmpty,
      NextMeetupContent
    },
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
