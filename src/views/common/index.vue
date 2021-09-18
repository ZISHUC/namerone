<template>
  <el-container>
    <el-header style="height: -1px">
      <div class="header_top">
        <div style="color: red">登录/注册</div>
        <span>|</span>
        <div slot="reference">
          <el-popover placement="top" width="200" height="400" trigger="hover">
            <slot
              ><img
                src="http://www.zhuishushenqi.com/images/no-book.png"
                style="width: 100%; margin: 30px 0px"
              />
              <p style="text-align: center">当前暂无书籍</p>
            </slot>
            <span slot="reference">最近阅读</span>
          </el-popover>
          <span class="el-icon-caret-bottom"></span>
        </div>
        <span>|</span>
        <div>我的书架</div>
        <span>|</span>
        <div>充值</div>
        <span>|</span>
        <el-popover placement="top" width="200" trigger="hover">
          <div style="display: flex">
            <slot>
              <img
                src="http://www.zhuishushenqi.com/images/fuwuhao.png"
                style="width: 50%; margin: 20px 0px"
              />
            </slot>
            <slot>
              <img
                src="http://www.zhuishushenqi.com/images/weibo.png"
                style="width: 50%; margin: 20px 0px"
              />
            </slot>
          </div>
          <div style="display: flex; justify-content: space-around">
            <div>微信</div>
            <div>微博</div>
          </div>
          <span slot="reference">+关注</span>
        </el-popover>
        <span>|</span>
        <el-popover placement="top" width="100" trigger="hover">
          <slot>
            <img
              src="http://www.zhuishushenqi.com/images/fuwuhao.png"
              style="width: 100%"
            />
            <p style="text-align: center">关注微信</p>
            <p style="text-align: center">可以联系客服妹子哦</p>
          </slot>
          <span slot="reference">联系客服</span>
        </el-popover>
      </div>

      <div class="header_main">
        <div>
          <img
            src="http://www.zhuishushenqi.com/images/logo.png"
            style="width: 50%"
          />
        </div>
        <div>
          <el-input
            v-model="input"
            suffix-icon="el-icon-search"
            class="elinput__innerTransparent"
            placeholder="搜索书名或作者"
          ></el-input>
        </div>
      </div>

      <div class="header_footer">    
      <!--     <div class="foot">首页</div>
          <div class="foot">精选</div>
          <div class="foot">分类</div>
          <div class="foot">书单</div>
          <div class="foot">排行榜</div>
          <div class="foot">客户端<span class="el-icon-user-solid"></span></div>
      </div> -->
  
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#d82626"
        text-color="#fff"
        active-text-color="#fff"
        router
        >
        <el-menu-item index="/index/shouye">&emsp;&emsp;&emsp;首页&emsp;&emsp;&emsp;</el-menu-item>
        <el-menu-item index="/index/jingxuan">&emsp;&emsp;&emsp;精选&emsp;&emsp;&emsp;</el-menu-item>
        <el-menu-item index="/index/fenglei">&emsp;&emsp;&emsp;分类&emsp;&emsp;&emsp;</el-menu-item>
        <el-menu-item index="/index/shudan">&emsp;&emsp;&emsp;书单&emsp;&emsp;&emsp;</el-menu-item>
        <el-menu-item index="/index/paihangbang">&emsp;&emsp;&emsp;排行榜&emsp;&emsp;&emsp;</el-menu-item>

        <el-menu-item index="/kehuduan" placement="top" width="200" trigger="hover">
        
        <el-popover placement="top" width="100" trigger="hover">
          <slot>
            <img
              src="http://www.zhuishushenqi.com/images/fuwuhao.png"
              style="width: 100%"
            />
            <p style="text-align: center">关注微信</p>
            <p style="text-align: center">可以联系客服妹子哦</p>
          </slot>
          <span slot="reference">客户端&emsp;<span class="el-icon-user-solid"></span></span>
          
        </el-popover>
        </el-menu-item>


      </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer style="height: 28rem;">
        <div>
            <div>客户端 | 关于我们 | 新闻动态 | 联系我们 | 加入我们 | 侵权申诉指引 | 举报电话: 0793 8688116</div>
            <br>
            <div>沪公网安备31011202006103号沪ICP备 16003625-3号</div>
            <br>
            <div>增值电信业务经营许可证沪B2- 20170022网络文化经营许可证沪网文(2016) 3206 -227号出版物经营许可证新出发</div>
            <br>
            <div>沪批字第U7659号</div>
            <br>
            <div style="display: flex;">
            <div style="text-decoration: underline"><a>中央网信办违法和不良信息举报中心</a> </div>   
                 &emsp;&emsp;&emsp;&emsp;                
            <div style="text-decoration: underline"><a>上海市互联网违法和不良信息举报中心</a></div>
            </div>
            <br>
            <div style="display: flex;">
            <div><img src="https://statics.zhuishushenqi.com/zywxb.png" style="max-width: 100%;    height: 120px;"></div>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <div><img src="https://statics.zhuishushenqi.com/shhlwwfhblxxjbzx.png" style="max-width: 100%;    height: 120px;"></div>
            </div>
            <div style="width:45rem;">请所有追书神器用户务必遵守国家互联网信息管理办法规定，我们拒绝任何违法和不良信息，
                一经发现，即作删除！若需举报请至侵权申诉指引。
				本站所收录作品、社区话题、评论及本站所做之广告均属个人行为，与本站立场无关。</div>

        </div>
        <div style="display: flex; ">
            <div style="border-right: 1px solid #000; height:3rem; margin: 0 1rem; padding: 0 1rem;">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVBQkY3MDgwMjM3MTFFNzlGRkZCRDNGNDlENDQwRUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVBQkY3MDkwMjM3MTFFNzlGRkZCRDNGNDlENDQwRUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODhENjZGRjAyMzQxMUU3OUZGRkJEM0Y0OUQ0NDBFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODhENjcwMDAyMzQxMUU3OUZGRkJEM0Y0OUQ0NDBFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoPFCngAAAkrSURBVHja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">&emsp;
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjg4RDY2RkQwMjM0MTFFNzlGRkZCRDNGNDlENDQwRUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjg4RDY2RkUwMjM0MTFFNzlGRkZCRDNGNDlENDQwRUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODhENjZGQjAyMzQxMUU3OUZGRkJEM0Y0OUQ0NDBFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODhENjZGQzAyMzQxMUU3OUZGRkJEM0Y0OUQ0NDBFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppf3gjoAAAgBSURBVHja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">
            </div>
            <div>
                <p>关注追书微信公众号，可以</p>
                <p>随时和我们反馈交流哦</p>
            </div>
        </div>

    </el-footer>

    <div class="denglu"><span class="el-icon-s-custom"></span></div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="scss" scoped>
//头部样式

.el-header {
  margin-bottom: 1rem;
  background-color: #fff;
  color: #333;
  padding: 0 0;
}
.header_top {
  display: flex;
  justify-content: flex-end;
  background-color: #f2f2f2;
  padding: 15px 220px;
}
.header_footer {
  color: #fff;
  padding: 0 220px;
  background-color: #d82626;
}
.foot {
  color: #fff;
  padding: 1rem 0;
  width: 15%;
  height: 100%;
  border: 1px solid black;
}
.foot:focus {
  background-color: rgb(24, 7, 7);
}
.header_top span {
  padding: 0 5px;
}


.header_main {
  display: flex;
  padding: 15px 220px;
  justify-content: space-between;
  background-color: #fbfaf8;
}

.el-footer {
  background-color: #fbfaf8;
  display: flex;
  justify-content: space-between;
  padding: 2rem 150px 2rem 220px;
  color: #999;
  font-size: 14px;
  
}

.el-main {
  background-color: #fff;
  color: #333;
  padding: 0 13.7rem;
}
.denglu{
    position: fixed;
    right: 2rem;
    bottom: 10rem;   
    font-size: 3rem;
    
}















</style>
<style>
.elinput__innerTransparent .el-input__inner {
  border: 2px solid #cab389;
}
* {
  margin: 0;
  padding: 0;
}
</style>