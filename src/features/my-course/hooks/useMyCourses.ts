import { courseService } from '@core/services/course';
import { useQuery } from '@tanstack/react-query';

export function useMyCourses() {
  const query = useQuery({
    queryKey: ['my-courses'],
    queryFn: () => courseService.getMyCourses()
  });

  const items = query.data?.payload;
  return {
    ...query,
    items
  };
}
