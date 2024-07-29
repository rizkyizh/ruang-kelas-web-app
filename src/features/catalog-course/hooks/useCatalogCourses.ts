import { courseService } from '@core/services/course';
import { useAuth } from '@features/authentication/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

export function useCatalogCourses() {
  const { token } = useAuth();
  const query = useQuery({
    queryKey: ['course-catalog', { token }],
    queryFn: () =>
      !token
        ? courseService.getCatalogCourse()
        : courseService.getCoursesMember(),
    refetchOnMount: 'always'
  });

  const items = query.data?.payload.filter(e => e.is_enabled);
  return {
    ...query,
    items
  };
}
