'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// 导入组件，用户获取用户的URL路径，用户实时显示用户当前激活的 Link 标签
import {usePathname} from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {name: 'Home', href: '/dashboard', icon: HomeIcon},
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon},
];

export default function NavLinks() {
  // 客户端组件。获取用户的实时URL路径
  const pathname = usePathname();


  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            className={clsx(
              'lex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6"/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
