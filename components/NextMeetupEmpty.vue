<template>
  <div class="card alert-warning mb-3">
    <div class="card-body">
      <p class="card-text">
        ⚠️ There are no events scheduled at this time, or we an experiencing an
        error with the api. You can find event details on
        <a
          href="https://www.meetup.com/Front-end-Developers-of-Miami/"
        >our meetup page</a>.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NextMeetupEmpty'
  }
</script>
