import { courseService } from '@core/services/course';
import { useQuery } from '@tanstack/react-query';

export function useCourses() {
  const query = useQuery({
    queryKey: ['course-items'],
    queryFn: () => courseService.get()
  });

  const items = query.data?.payload;
  return {
    ...query,
    items
  };
}
