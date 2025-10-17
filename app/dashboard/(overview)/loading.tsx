import DashboardSkeleton from '@/app/ui/skeletons';

// 这是新建了一个路由组，防止loading.tsx也作用于其他的路由

export default function Loading() {
  return <DashboardSkeleton />;
}
