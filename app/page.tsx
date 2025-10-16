import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// 导入css module 也就是普通的css样式，然后使用
import styles from '@/app/ui/home.module.css'
// 导入自定义字体给 p 标签使用
import {lusitana} from '@/app/ui/fonts'
// 导入Image优化后的图片组件
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

          {/*<div*/}
          {/*  className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"*/}
          {/*/>*/}
          <div
            className={styles.shape}
          />

          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* 为避免布局偏移，建议为图片设置宽高值，且其宽高比应与源图像完全一致。 */}
          {/* 这些值不是渲染图像的大小，而是用于理解纵横比的实际图像文件的大小。 */}
          <Image
            src={'/hero-desktop.png'}
            width={1000}
            height={700}
            className={'hidden md:block'}
            alt={'this is a picture'}></Image>
          <Image
            src={'/hero-mobile.png'}
            width={560}
            height={6620}
            className={'block md:hidden'}
            alt={'this is a picture'}></Image>

        </div>
      </div>
    </main>
  );
}
