<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col mx-auto my-5 text-center">
        <nuxt-link to="/">
          <logo size="250px" />
        </nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <div v-html="coc" />
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col text-center">
        &copy; {{ copyYear }} Front-End Miami &bull;
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import coc from '~/assets/code-of-conduct.md'

  export default {
    name: 'CodeOfConduct',
    components: { Logo },
    asyncData: () => ({ coc })
  }
</script>
