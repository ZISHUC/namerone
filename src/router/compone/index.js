// 我的模块的路由

import index from "@/views/index";

const router = [
    // 我的模块
    {
        path: "/",
        component: index,
        // children:[
        //     {
        //         path: 'shouye',
        //         component: () => import('@/views/common/shouye'),
        //     },
        // ]
    },

];

export default router;