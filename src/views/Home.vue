<template>
  <div class="home">
    <HelloWorld :qs = "qs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: ['qs'],
  components: {
    HelloWorld
  },
  data () {
    return {
      media : null,
      mediaTimer : null,
      file1 : "https://www.freebackgroundtracks.net/wp-content/uploads/2017/10/Night-Life-2-short-version.mp3"
    }
  },
  methods: {
  }
}
</script>

<style scoped="">
  .hello {
    display: flex;
    justify-content: center;
    margin-top: 100px; 
  }
</style>
