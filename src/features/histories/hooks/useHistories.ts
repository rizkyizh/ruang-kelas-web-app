import { historyService } from '@core/services/history';
import { useQuery } from '@tanstack/react-query';

export function useHistories() {
  const query = useQuery({
    queryKey: ['histories'],
    queryFn: () => historyService.getHistories()
  });

  const items = query.data?.payload;
  // const pagination = query.data?.meta;
  return {
    ...query,
    items
    // pagination
  };
}
