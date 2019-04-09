<template>
 <section>
   <h5>Events</h5>

   <!--Loading-->
   <div v-if="loading" class="spinner-border text-warning" role="status">
     <span class="sr-only">Loading...</span>
   </div>

   <!--Error-->
   <template v-else-if="error">
     <div class="card alert-danger mb-3 text-danger">
       <div class="card-body">
         <strong>Error! </strong><p class="card-text">{{ error }}</p>
       </div>
     </div>
   </template>

   <!--Empty-->
   <template v-else-if="hasNoMeetup">
     <div class="card alert-primary mb-3 text-primary">
       <div class="card-body">
         <p class="card-text">They are no events scheduled at this time, or we an experiencing an error with the api. 😢</p>
       </div>
     </div>
   </template>

   <!--Content-->
   <template v-else>
     <div class="card mb-3 border-warning event-wrapper">
        <a :href="meetup.link" class="card-body text-decoration-none text-dark">
          <h5 class="card-title">
            <span class="event-date">{{ meetup.local_date | dateConvert }}</span> @
            <span class="event-time">{{ meetup.time | timeConvert }}</span> -
            <span class="event-title">{{ meetup.name }}</span>
          </h5>
          <div class="card-text event-description" v-html="meetup.description"></div>
          <span style="text-decoration: underline">More Details</span>
        </a>
     </div>
   </template>
 </section>
</template>

<script>
  import jsonp from 'jsonp'

  export default {
    name: 'NextMeetup',
    data: () => ({
      meetup: {},
      loading: true,
      error: null
    }),
    computed: {
      hasNoMeetup () {
        return Object.keys(this.meetup).length <= 0
      }
    },
    methods: {
      fetchMeetup () {
        let MEETUP_URL = 'https://api.meetup.com/Front-end-Developers-of-Miami/events?page=1'
        this.loading = true
        jsonp(MEETUP_URL, null, (err, res) => {
          if (err) {
            console.error(err.message);
            this.error = err.message
          } else {
            this.meetup = res.data[0]
          }
          this.loading = false
        });
      }
    },
    filters: {
      dateConvert: function (val) {
        const [year, month, day] = val.split('-')
        return `${month}/${day}`
      },
      timeConvert: function (val) {
        let date = new Date(val)
        const [timesString, ampm] = date.toLocaleTimeString().split(' ')
        const [hours, minutes, seconds] = timesString.split(':')

        return `${hours}:${seconds}${ampm.toLowerCase()}`
      }
    },
    mounted () {
      this.fetchMeetup()
    }
  }
</script>

<style scoped>

</style>
