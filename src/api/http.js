// 对于axios进行封装
import axios from "axios";
// 在axios中有一个非常好用的功能：拦截器
// 拦截器在axios中有两种：
// 1. 请求拦截器
// 是在请求发出去之前，将请求拦截下来，对请求的信息进行加工处理，然后再让请求继续发送
// 例如：疫情期间，进小区的时候会被拦下来要求查看健康码，没戴口罩的不允许进，强制要求戴口罩
// 使用场景：在请求发送的时候将jwt等需要发送给服务器的数据一并携带
axios.interceptors.request.use((cfg) => {
    // 在这里对请求进行加工处理。。。。
    // 假设下面这行代码是让“戴口罩”
    cfg.headers["_token"] = "45657678uijhjfghbvcgfghlkjnbvjhghlknbvjhguh"
    // 最终一定要runturn形参（没有就卡住了）
    return cfg;
});

// 2. 响应拦截器
// 在接收到响应的时候将响应拦截下来，对响应进行处理，然后再返回给axios请求代码的then方法
// 例如：从小区出来，有些小区会要求你按下门口的开关，才会开门，否则不开
// 使用场景：可以在响应拦截器中保存服务器签发的jwt、简化操作等。。。
axios.interceptors.response.use((res) => {
    // 在这里对响应进行加工处理
    // if(res.data){
    //     return res.data
    // }else{
    //     return res
    // }
    return res.data || res;
    // 也是一定需要返回处理好的数据的（不返还则代码收不到网络请求结果）
    //return res;
});

// 导出设置拦截器的axios
export default axios;
