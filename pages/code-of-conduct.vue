<template>
  <div class="container">
    <div class="col col-md-8 mx-auto my-5">
      <div class="card">
        <div class="card-body">
          <div v-html="coc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import coc from '../assets/code-of-conduct.md'
  export default {
    name: 'code-of-conduct',
    asyncData: () => ({ coc })
  }
</script>
