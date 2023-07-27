<template>
  <div class="hello" id="myVideo">
  </div>
</template>

<script>
import Player from "xgplayer"
import Mp4Plugin from "xgplayer-mp4"
import "xgplayer/dist/index.min.css"


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
  },
  mounted() {
    this.init()
  },
  methods:{
    init(){
      const host = 'http://10.0.0.38:8080'
      const id = 'myVideo'
      // const url = `${host}/webgui-server/bpm-base/file/preview?file=e4ceafa8cba1424aacf9ddce7a861ba7.mp4&applicationId=6040c6985eaee3246c2094a4`
      const url = `${host}/webgui-preview-file/uploaded_files/e4ceafa8cba1424aacf9ddce7a861ba7.mp4`
      const player = new Player({
          url,
          id,
          // preloadTime:10,
          autoplayMuted: true,
          autoplay: true,
          playsinline: true,
          height: window.innerHeight,
          width: window.innerWidth,
          plugins: [Mp4Plugin],
          mp4plugin: {
            maxBufferLength: 30,
            minBufferLength: 10, 
            // reqOptions:{
            //   mode: 'cors',
            //   method: 'POST',
            //   headers: { // 需要带的自定义请求头
            //     'x-test-header': 'rrrr'
            //   },
            // }
            // ... 其他配置
          }
      })
      player.on('canplay', ()=>{
          // do something
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
