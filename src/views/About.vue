<template lang="pug">
  .about
    h1(v-if="!msg") 學習風格猜猜看
    h1(v-else) {{msg}}
    h3(v-if="step > -1") 連勝: {{wins}} 連勝 
    .ui.huge.green.button(v-tap v-show="step == -1" @click="step = 0; reset()") 按此開始遊戲
    hr
    .ui.grid.segment.container(v-if="step > -1")
      .ui.two.column.row
        .column
          h3 假想情境：
          p {{myQ.t}}
          hr
          h3 學習的方法：
          p {{myQ.cs[idx]}}
        .column
          h3 這樣的方法，屬於什麼學習風格呢？
          .ui.list
            .item(v-for = "(vark, index) in myQ.rs")
              button.ui.huge.button(v-tap  @click="guess(index)" v-bind:class = "show[vark].c")
                i.icon(v-bind:class = "show[vark].i")
                | {{show[vark].t}}
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
        v: {t: '視覺', c: 'orange', i: 'unhide'},
        a: {t: '聽覺', c: 'purple', i: 'assistive listening systems'},
        r: {t: '閱讀', c: 'blue', i: 'book'},
        k: {t: '實作', c: 'red', i: 'sign language'}
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

.ui.segment {
  font-size: 18px;
}


</style>
