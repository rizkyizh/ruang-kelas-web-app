import { courseService } from '@core/services/course';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

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

export function useCourse() {
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQueries = searchParamsToObject(searchParams.toString());

  const query = useQuery({
    queryKey: ['course-detail', { id }],
    queryFn: () => courseService.getById({ path: id }),
    refetchOnMount: 'always'
  });

  const items = query.data?.payload[0];
  return {
    ...query,
    items
  };
}
