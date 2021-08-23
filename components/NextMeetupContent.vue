<template>
  <div class="card mb-3 border-warning event-wrapper">
    <a
      :href="link"
      class="card-body text-decoration-none text-dark"
    >
      <h5 class="card-title">
        <span class="event-date">{{ local_date | dateConvert }}</span>
        @ <span class="event-time">{{ time | timeConvert }}</span> -
        <span class="event-title">{{ name }}</span>
      </h5>
      <div
        class="card-text event-description mb-3"
        v-html="description"
      />
      <span style="text-decoration: underline">More Details</span>
    </a>
  </div>
</template>

<script>
  import { dateConvert, timeConvert } from '~/libs/utilities'

  export default {
    name: 'NextMeetupContent',
    filters: { dateConvert, timeConvert },
    props: {
      description: {
        type: String,
        default: 'Description Missing'
      },
      link: {
        type: String,
        default: 'about:blank'
      },
      local_date: { type: String, default: '1970-01-01' },
      name: { type: String, default: 'Event Name Pending' },
      time: { type: String, default: '0' }
    }
  }
</script>
