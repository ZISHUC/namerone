<template>
  <el-container>

    <el-aside width="250px">
      <!-- 男生 -->
        <div class="aside-one">
            <div class="aside-one-left">
                <div class="el-icon-male" style="font-size:1.8rem;color:red;font-weight:bold;margin-right:5px;">              
                <span style="font-size:1.2rem;font-weight:bold;color:#000;">男生</span>            
                </div>
                <div style="line-height: 30px;color:#999;">更多<span class="el-icon-arrow-right"></span></div>
            </div>
            <div class="aside-one-buttom" v-for="( item ) in list" :key="item.index">
              <div class="aside-fenglei">
                <div>{{item.name}}</div>
                <div style="color:#999;">{{item.bookCount}}</div>
              </div>                        
            </div>
        </div>
        <!-- 女生 -->
        <div class="aside-one" style="height: 260px;">
            <div class="aside-one-left">
                <div class="el-icon-female" style="font-size:1.8rem;color:red;font-weight:bold;margin-right:5px;">              
                <span style="font-size:1.2rem;font-weight:bold;color:#000;">女生</span>            
                </div>
                <div style="line-height: 30px;color:#999;">更多<span class="el-icon-arrow-right"></span></div>
            </div>
            <div class="aside-one-buttom" v-for="( item ) in nvlist" :key="item.index">
              <div class="aside-fenglei">
                <div>{{item.name}}</div>
                <div style="color:#999;">{{item.bookCount}}</div>
              </div>                        
            </div>
        </div>
        <!-- 出版 -->
        <div class="aside-one" style="height: 260px;">
            <div class="aside-one-left">
                <div class="el-icon-reading" style="font-size:1.8rem;color:red;font-weight:bold;margin-right:5px;">              
                <span style="font-size:1.2rem;font-weight:bold;color:#000;">出版</span>            
                </div>
                <div style="line-height: 30px;color:#999;">更多<span class="el-icon-arrow-right"></span></div>
            </div>
            <div class="aside-one-buttom" v-for="( item ) in banlist" :key="item.index">
              <div class="aside-fenglei">
                <div>{{item.name}}</div>
                <div style="color:#999;">{{item.bookCount}}</div>
              </div>                        
            </div>
        </div>
        <!-- 排行榜 -->
        <div class="aside-one" style="height: 660px;">
            <div class="aside-one-left">
                <div class="el-icon-s-data" style="font-size:1.8rem;color:red;font-weight:bold;margin-right:5px;">              
                <span style="font-size:1.2rem;font-weight:bold;color:#000;">排行榜</span>            
                </div>
                <div style="line-height: 30px;color:#999;">更多<span class="el-icon-arrow-right"></span></div>
            </div>
            <div class="man">
              <div class="man-left">男生榜</div>
                  &nbsp; | &nbsp;
              <div class="man-right">女生榜</div>
            </div>
            <br>
            <div class="aside-first" v-for="( item ) in hotlist" :key="item.index">
              <div style="width: 70px;height: 85px; border:1px solid red;">
                <img src="item.cover">
              </div>
              <div style="margin-left:10px;">
                <div>{{item.title}}</div>
                <div>{{item.latelyFollower/1000}}万的热度</div>
              </div>
            </div>

            <div v-for="( item ) in newlist" :key="item.index" style="margin-top:10px;">
              <div style="margin-left:10px;">
                <div>{{item.title}}</div>
                <div>{{item.latelyFollower/1000}}万的热度</div>
              </div>
            </div>



           
        </div>
        




    </el-aside>
    <el-container>
      <el-header style="height: 20rem; ">
          <div style="width:60rem;">
            
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            
          </div>
          &emsp;
          <div style="border:1px solid red;width:20rem;">
            <div>大家都在搜</div>
            <el-divider></el-divider>
            <div>2</div>

          </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import uri from "@/config/uri"

export default {
  data() {
    return {
      list:[],
      nvlist:[],
      banlist:[],
      banglist:[],

      hotlist:[],
      newlist:[],
    };
  },
  created(){

    this.$http.get(uri.getclassification).then(res => {
        console.log(res);
            this.list = res.male;   
            this.nvlist = res.female; 
            this.banlist = res.press;           
    })

  },
  mounted(){
    this.$http.get(uri.gethot).then(res => {
        console.log(res);
        
        this.hotlist = res.books;  
             
    }),
    this.$http.get(uri.getnew).then(res => {
        console.log(res);
        
        this.newlist = res.books;  
             
    })
  }
};
</script>

<style lang="scss" scoped>
.el-header{
  background-color: #ffffff;
  padding: 0 0;
  display: flex;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
}

.el-aside {
  background-color: #fbf8f8;
  color: #333;
  margin-right: 1rem;
  height: 103rem;
}

.el-main {
  background-color: #da2d2d;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.aside-one{
    border: 1px solid rgb(238, 231, 231);
    height: 320px;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
}
.aside-one-left{
    display: flex;
    border-bottom: 1px solid rgb(240, 233, 233);
    justify-content: space-between;
    align-content: center;
    padding:5px 3px;
    
}
.aside-one-buttom{
  
  width: 230px;
}
.aside-fenglei{
  float: left;
  margin-top: 3px;
  margin-right: 5px;
  //background-color: rgb(77, 182, 55);
  padding: 0.3rem 0;
  width: 30%;
}
.man{
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-top:10px;
  
}
.man-left:hover{
  text-decoration:underline;
}
.man-right:hover{
  text-decoration:underline;
}
.aside-first{
  display: flex;
 
}
//头部

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>