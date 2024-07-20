import { transactionService } from '@core/services/transaction';
import { useQuery } from '@tanstack/react-query';

export function useTransactions() {
  const query = useQuery({
    queryKey: ['transaction-items'],
    queryFn: () => transactionService.getAllTransactions()
  });

  const items = query.data?.payload;
  return {
    ...query,
    items
  };
}

// export function useCourse() {
//   const { id } = useParams();
//   // const [searchParams, setSearchParams] = useSearchParams();
//   // const searchQueries = searchParamsToObject(searchParams.toString());
//
//   const query = useQuery({
//     queryKey: ['course-detail', { id }],
//     queryFn: () => courseService.getById({ path: id }),
//     refetchOnMount: 'always'
//   });
//
//   const items = query.data?.payload[0];
//   return {
//     ...query,
//     items
//   };
// }
