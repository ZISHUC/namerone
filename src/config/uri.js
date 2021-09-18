// 请求地址统一配置文件
// 好处：集中管理，后期维护方便

// 代理标识符
let prefix = "/api/"

const uri ={
    // 获取所有分类
    getclassification : prefix + "/cats/lv2/statistics",
    //最热
    //gethot : prefix + "/ranking/5a323096fc84c2b8efab2482",
    gethot : prefix + "/book/by-categories?gender=male&type=hot&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=1",
    getnew : prefix + "/book/by-categories?gender=male&type=new&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=9",
    



}

export default uri