<template>
 <section>
   <div v-if="loading" class="spinner-border text-warning" role="status">
     <span class="sr-only">Loading...</span>
   </div>
  <template v-else>
    <h3>Next Meetup</h3>
    <h4>{{ meetup.name }}</h4>
  </template>

 </section>
</template>

<script>
  import jsonp from 'jsonp'

  export default {
    name: 'NextMeetup',
    data: () => ({
      meetup: {},
      loading: true
    }),
    mounted () {
      let MEETUP_URL = 'https://api.meetup.com/Front-end-Developers-of-Miami/events?page=1'
      jsonp(MEETUP_URL, null, (err, res) => {
        if (err) {
          console.error(err.message);
        } else {
          this.meetup = res.data[0]
          this.loading = false
        }
      });
    }
  }
</script>

<style scoped>

</style>
