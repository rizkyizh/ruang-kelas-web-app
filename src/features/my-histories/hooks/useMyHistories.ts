import { historyService } from '@core/services/history';
import { useQuery } from '@tanstack/react-query';

export function useMyhistories() {
  const query = useQuery({
    queryKey: ['myhistories'],
    queryFn: () => historyService.getMyHistory()
  });

  const items = query.data?.payload;
  // const pagination = query.data?.meta;
  return {
    ...query,
    items
    // pagination
  };
}
