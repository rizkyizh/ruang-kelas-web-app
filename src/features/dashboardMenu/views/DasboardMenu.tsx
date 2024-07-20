import { useProfile } from '@features/_global/hooks';
import { PageLayout } from '@hudoro/admin';

export default function DashboardMenuView() {
  const { isLoading, data } = useProfile();

  return (
    <PageLayout
      title={isLoading ? 'Loading...' : `Hello, ${data?.sub}`}
    ></PageLayout>
  );
}
