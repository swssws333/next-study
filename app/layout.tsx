// d在顶级组件导入公共样式
import '@/app/ui/global.css'
// 导入我们自定义的google字体
import {inter} from '@/app/ui/fonts'


export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/*<body>{children}</body>*/}

    {/* 添加自定义的字体
        还添加了 Tailwind 的 antialiased平滑字体的类。这个类并非必须使用，但它能带来更美观的效果。 */}
    {/*<body className={`${inter.className}`}>{children}</body>*/}
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
