<template lang="pug">
  .home
    h1.ui.heaer 
      i.purple.puzzle.icon
      | 何謂學習風格？
    .ui.segment
      p 現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。
          i.purple.fire.icon

      p 學習風格有千百種以上，要細分有很多角度。本測試採取的是「
          i.purple.unhide.icon
          | 視覺
          i.purple.assistive.listening.systems.icon
          | 聽覺
          i.purple.book.icon
          | 閱讀
          i.purple.sign.language.icon
          | 實作」(VARK)架構，特色是只要回答16個問題，就能讓您很快找出適合自己的有效學習方式。

      .ui.attached.bottom.buttons
        router-link.ui.huge.blue.button(v-tap to = "/about") 猜猜看
        router-link.ui.huge.green.button(v-tap to = "/test") 自我測驗
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped="">
  .home {
    margin-top: 100px; 
  }

  .ui.segment {
    text-align: left;
    font-size: 20px;
  }
</style>
