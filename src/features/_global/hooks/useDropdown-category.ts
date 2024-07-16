import { useDebounce } from '@hudoro/admin';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dropdownGlobalStoreAtom } from '../stores';
import { categoryService } from '@core/services/category';

export function useCategoryDropdown() {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('searchCategory');
  const search = useDebounce(searchQuery, 1500);

  const query = useQuery({
    queryKey: [
      'dropdown-category',
      {
        search
      }
    ],
    queryFn: () =>
      categoryService.get({
        metaParams: {
          search: search ? search : undefined
        }
      }),
    enabled: search !== '' ? true : false
  });

  const [isClicked, setIsClicked] = useAtom(dropdownGlobalStoreAtom);

  const handleClickCategoryDropdown = useCallback(async () => {
    if (isClicked.category) return;
    setIsClicked(prev => ({ ...prev, category: true }));
    if (!isClicked.category) {
      query.refetch();
    }
  }, [query, isClicked.category, setIsClicked]);

  const items = query.data?.payload;
  return {
    ...query,
    items,
    handleClickCategoryDropdown
  };
}
