import { memberService } from '@core/services/member';
import { useQuery } from '@tanstack/react-query';

export function useMembers() {
  // const [searchParams] = useSearchParams();

  // const page = searchParams.get('page');
  // const perPage = searchParams.get('perPage');
  // const searchQuery = searchParams.get('qb') || undefined;
  //
  // const filter = searchParams.get('filter') || null;
  // const parsedFilter = parseFilter(filter);
  //
  // // advanced filter
  // const status =
  //   parsedFilter?.statusBusinessType !== undefined
  //     ? parsedFilter?.statusBusinessType[0].value
  //     : undefined;
  //
  // const country =
  //   parsedFilter?.countryBusinessType !== undefined
  //     ? parsedFilter?.countryBusinessType[0]?.value
  //     : undefined;
  //
  // const search = useDebounce(searchQuery, 1500);

  const query = useQuery({
    queryKey: ['members'],
    queryFn: () => memberService.get()
  });

  const items = query.data?.payload;
  // const pagination = query.data?.meta;
  return {
    ...query,
    items
    // pagination
  };
}
