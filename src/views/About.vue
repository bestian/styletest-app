<template lang="pug">
  .about
    h1(v-if="!msg") 猜猜看
    h1(v-else) {{msg}}
    h3(v-if="step > -1") 連勝: {{wins}} 連勝 
    .ui.huge.green.button(v-show="step == -1" @click="step = 0; reset()") 按此開始
    hr
    .ui.grid.container(v-if="step > -1")
      .ui.two.column.row
        .column.segment
          h3 遇到的情境：
          p {{myQ.t}}
          hr
          h3 學習的方法：
          p {{myQ.cs[idx]}}
        .column.segment
          h3 這樣的反應，大概是什麼學習風格呢？
          .ui.list
            .item(v-for = "(vark, index) in myQ.rs")
              button.ui.huge.green.button( @click="guess(index)") {{show[vark]}}
</template>

<script>
  
export default {
  name: 'about',
  props: ['qs'],
  data () {
    return {
      msg: '',
      wins: 0,
      step: -1,
      a: 0,
      idx: 0,
      myQ: {},
      show: {
        v: '視覺型',
        a: '聽覺型',
        r: '閱讀型',
        k: '實作型'
      }
    }
  },
  methods: {
    reset () {
      this.a = Math.floor(Math.random()*this.qs.length)
      this.myQ = this.qs[this.a]
      this.idx = Math.floor(Math.random()*4)
    },
    guess (index) {
      if (this.idx == index) {
        this.win()
      } else {
        this.loose()
      }
    },
    win () {
      this.msg = '你猜對了，真厲害';
      this.wins++;
      this.reset();
    },
    loose () {
      this.msg = '你猜錯了，沒關係，再接再勵';
      this.wins = 0;
      this.reset();
    }
  }
}

</script>

<style scoped="">

.about {
  margin-top: 100px;
}

</style>
