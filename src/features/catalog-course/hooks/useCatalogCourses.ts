import { courseService } from '@core/services/course';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function useCatalogCourses() {
  const query = useQuery({
    queryKey: ['course-catalog'],
    queryFn: () => courseService.get()
  });

  const items = query.data?.payload.filter(e => e.is_enabled);
  return {
    ...query,
    items
  };
}

export function useDetailCourse() {
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQueries = searchParamsToObject(searchParams.toString());

  const query = useQuery({
    queryKey: ['course-catalog', { id }],
    queryFn: () => courseService.getById({ path: id })
  });

  const items = query.data?.payload[0];
  return {
    ...query,
    items
  };
}
