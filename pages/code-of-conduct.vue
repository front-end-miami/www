<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-lg-6 mx-auto my-5">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <logo height="5rem" width="5rem"/>
            </div>
            <div v-html="coc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import coc from '../assets/code-of-conduct.md'
  export default {
    name: 'code-of-conduct',
    asyncData: () => ({ coc }),
    components: { Logo }
  }
</script>
