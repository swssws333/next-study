import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {lusitana} from '@/app/ui/fonts';
import {Suspense} from 'react'
import {CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from '@/app/ui/skeletons';
import CardWrapper from "@/app/ui/dashboard/cards";

/*

Route groups allow you to organize files into logical groups without affecting the URL path structure.
When you create a new folder using parentheses (), the name won't be included in the URL path.
So /dashboard/(overview)/page.tsx becomes /dashboard.

 */


// 异步服务端组件
export default async function Page() {

  // const revenue = await fetchRevenue();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <Suspense fallback={<CardsSkeleton></CardsSkeleton>}>
          <CardWrapper></CardWrapper>
        </Suspense>


      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>

        {/*<RevenueChart revenue={revenue}/>*/}
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices/>
        </Suspense>

      </div>
    </main>
  );
}
