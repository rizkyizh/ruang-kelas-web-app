import {
  Box,
  Dropdown,
  MetaResponse,
  Pagination,
  Text,
  searchParamsToObject,
  useMediaQuery
} from '@hudoro/admin';
import { useSearchParams } from 'react-router-dom';

interface IPaginate {
  pagination?: MetaResponse;
  pageKey?: string;
  perPageKey?: string;
}

export default function Paginate({
  pagination,
  pageKey = 'page',
  perPageKey = 'perPage'
}: IPaginate) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueries = searchParamsToObject(searchParams.toString());
  const limit = searchParams.get(perPageKey);
  const mobile = useMediaQuery('md');

  const handleChangeParamsPage = (page: number) => {
    setSearchParams({ ...searchQueries, [pageKey]: String(page) });
  };

  const handleChangeParamsPerPage = (perPage: string) => {
    setSearchParams({ ...searchQueries, [perPageKey]: perPage, [pageKey]: "1" });
  };

  return (
    <Box
      marginTop="sm"
      display="flex"
      justify="space-between"
      direction={mobile ? 'row' : 'column'}
      gap={mobile ? 'spacing-0' : 'md'}
      style={{ overflowX: 'visible' }}
      align="center"
    >
      <Box display="flex" direction="row" align="center" paddingBlock="sm">
        <Box
          paddingBlock="sm"
          paddingRight="sm"
          marginInline="sm"
          style={{
            borderRight: '2px solid var(--hsd-ui-utility-fill-default)'
          }}
        >
          <Text fontFamily="Poppins">{`${pagination?.perPage ? 1 : 0}-${pagination?.perPage || 0} of ${pagination?.totalData || 0}`}</Text>
        </Box>
        <Dropdown
          dropdownLists={[
            {
              label: '5 per row',
              value: '5'
            },
            {
              label: '10 per row',
              value: '10'
            },
            {
              label: '20 per row',
              value: '20'
            },
            {
              label: '50 per row',
              value: '50'
            }
          ]}
          onChange={e => {
            handleChangeParamsPerPage(e[0].value);
          }}
          defaultValue={
            limit
              ? [
                {
                  label: `${limit} per row`,
                  value: limit
                }
              ]
              : [
                {
                  label: '10 per row',
                  value: '10'
                }
              ]
          }
        />
      </Box>
      <Pagination
        currentPage={
          pagination?.currentPage ? Number(pagination?.currentPage) : 1
        }
        totalCount={pagination?.totalPage ? Number(pagination?.totalPage) : 1}
        onPageChange={handleChangeParamsPage}
        siblingCount={!mobile ? 0 : undefined}
      />
    </Box>
  );
}
