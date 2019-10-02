<template>
  <section class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-12 mx-auto">
        <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
          <iframe src="https://giphy.com/embed/l4JyOCNEfXvVYEqB2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <h3 class="text-center">Redirecting to Slack Invite in {{timerLength / 100}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "invite",
    data: () => ({
      intervalRef: null, // A reference for the set timer so we can clear it.
      timerLength: 3000,
      timerInterval: 100,
      redirectUrl: "https://join.slack.com/t/fedm/shared_invite/enQtMzgyMTMzNTI5NDQ3LWUzNTc2MmJjYzE0NTg1YjI0YmFmNjE3MGY4MzAxYmZlNjlkMTViNDEyODdkYTJhMzAwNjBjMzYxNzRiMzNkMzY"
    }),
    methods: {
      setTime () {
        // EW mutations..
        this.timerLength = this.timerLength - this.timerInterval

        // We could use a watch for this but since we are already
        // calling this with every change there is no need.
        if (0 >= this.timerLength) {
          this.clearTimer() // Always clear your interval timers
          this.redirect();
        }
      },
      startTimer () {
        this.intervalRef = setInterval(() => this.setTime(), this.timerInterval);
      },
      clearTimer () {
        clearInterval(this.intervalRef)
      },
      redirect () {
        window.location.replace(this.redirectUrl)
      },
    },
    mounted () { this.startTimer() }
  }
</script>
