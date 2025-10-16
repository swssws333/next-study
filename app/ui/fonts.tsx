// 导入google 字体库
import {Inter, Lusitana} from 'next/font/google';


// 然后从字体库里面拿出真正的子集（字体），然后导出给layout.tsx用
export const inter = Inter({subsets: ['latin']});


export const lusitana = Lusitana({weight: ['400', '700'],subsets:['latin']});


