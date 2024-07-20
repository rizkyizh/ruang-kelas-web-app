import React, { useEffect, useMemo, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
  MetaResponse,
  Checkbox,
  Box,
  searchParamsToObject
} from '@hudoro/admin';
import Paginate from './Paginate';
import MenuTable from './MenuEllipsisTable/MenuTable';
import { useSearchParams } from 'react-router-dom';

interface BaseRecord {
  id: number | string;
}

type Accessor<T> = keyof T | ((record: T) => React.ReactNode) | string;

interface Column<T> {
  accessor: Accessor<T>;
  title?: string;
  textAlign?: 'left' | 'right' | 'center';
  render?: (record: T) => React.ReactNode;
}

interface DataTableProps<T extends BaseRecord> {
  records?: T[];
  columns: Column<T>[];
  pagination?: MetaResponse;
  handleDetail?: (id: number | string) => void;
  handleUpdate?: (item: T) => void;
  handleDelete?: (id: number | string, item: T) => void;
  selectedRecords?: T[];
  onSelectedRecordsChange?: (selectedRecords: T[]) => void;
  emptyStateFilter?: React.ReactElement;
  emptyState?: React.ReactElement;
  isLoading: boolean;
  noFilterText?: string;
  titleActionCustom?: {
    detail?: string,
    update?: string,
    delete?: string
  }
}

const HudoroTable = <T extends BaseRecord>({
  records,
  columns,
  pagination,
  handleDetail,
  handleUpdate,
  handleDelete,
  selectedRecords = [],
  onSelectedRecordsChange,
  isLoading = false,
  emptyState,
  noFilterText,
  emptyStateFilter,
  titleActionCustom
}: DataTableProps<T>) => {
  const [allSelected, setAllSelected] = useState(false);
  const [searchParams] = useSearchParams();

  const searchParamsObj = searchParamsToObject(searchParams.toString());
  const isSearchParams = useMemo(() => {
    return Object.keys(searchParamsObj).length !== 0;
  }, [searchParamsObj]);

  useEffect(() => {
    setAllSelected(
      (records?.length || 0) > 0 &&
      (selectedRecords?.length || 0) === records?.length
    );
  }, [records, selectedRecords]);

  const getCellValue = (record: T, accessor: Accessor<T>) => {
    if (typeof accessor === 'function') {
      return accessor(record);
    }
    if (typeof accessor === 'string') {
      return record[accessor as keyof T];
    }
    return record[accessor];
  };

  const handleSelectRecord = (record: T) => {
    if (onSelectedRecordsChange) {
      const isSelected = selectedRecords.some(
        selected => selected.id === record.id
      );
      const newSelectedRecords = isSelected
        ? selectedRecords.filter(selected => selected.id !== record.id)
        : [...selectedRecords, record];
      onSelectedRecordsChange(newSelectedRecords);
    }
  };

  const handleSelectAll = () => {
    if (onSelectedRecordsChange) {
      if (allSelected) {
        onSelectedRecordsChange([]);
      } else {
        onSelectedRecordsChange(records || []);
      }
    }
    setAllSelected(!allSelected);
  };

  const isSelected = (record: T) =>
    selectedRecords.some(selected => selected.id === record.id);

  return (
    <>
      {records?.length !== 0 && (
        <Box
          borderWidth="border"
          borderRadius="rounded-base"
          borderStyle="border-solid"
          overflow="overflow-x-auto"
          style={{
            borderColor: 'var(--hsd-ui-utility-fill-default)'
          }}
          width="width-full"
        >
          <Table>
            <Thead
              style={{
                backgroundColor: '#F8F9FB',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '14pt',
                height: '50px',
                whiteSpace: 'nowrap'
              }}
            >
              <Tr>
                {onSelectedRecordsChange && (
                  <Th>
                    <Checkbox
                      checked={allSelected}
                      onChange={handleSelectAll}
                    />
                  </Th>
                )}

                {columns.map((col, index) => (
                  <Th
                    key={`table-head-${index}`}
                    style={{
                      paddingLeft: index === 0 ? '16px' : '',
                      textAlign: col.textAlign || 'left'
                    }}
                  >
                    <Text fontSize="sm" fontWeight="semibold">
                      {col.title || col.accessor.toString()}
                    </Text>
                  </Th>
                ))}
                {(handleDetail || handleUpdate || handleDelete) && <Th></Th>}
              </Tr>
            </Thead>
            <Tbody>
              {records?.length !== 0 &&
                records?.map((record, rowIndex) => (
                  <Tr
                    key={`${record}${rowIndex}`}
                    onMouseOver={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        '#EDF0F2';
                    }}
                    onMouseOut={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        '';
                    }}
                  >
                    {onSelectedRecordsChange && (
                      <Td>
                        <Checkbox
                          checked={isSelected(record)}
                          onChange={() => handleSelectRecord(record)}
                        />
                      </Td>
                    )}

                    {columns.map((col, colIndex) => (
                      <Td
                        key={`row-${rowIndex}-col-${colIndex}`}
                        style={{
                          paddingLeft: colIndex === 0 ? '16px' : '',
                          textAlign: col.textAlign || 'left'
                        }}
                      >
                        {col.render ? (
                          col.render(record)
                        ) : (
                          <Text fontWeight="medium" fontSize="sm">
                            {
                              getCellValue(
                                record,
                                col.accessor
                              ) as React.ReactNode
                            }
                          </Text>
                        )}
                      </Td>
                    ))}

                    {(handleDetail || handleUpdate || handleDelete) && (
                      <Td style={{ paddingRight: '16px' }}>
                        <Flex direction="row" align="center" justify="flex-end">
                          <MenuTable
                            titleActionCustom={titleActionCustom}
                            onClickDetail={
                              handleDetail
                                ? () => handleDetail(record.id)
                                : undefined
                            }
                            onClickUpdate={
                              handleUpdate
                                ? () => handleUpdate(record)
                                : undefined
                            }
                            onClickDelete={
                              handleDelete
                                ? () => handleDelete(record.id, record)
                                : undefined
                            }
                          />
                        </Flex>
                      </Td>
                    )}
                  </Tr>
                ))}
            </Tbody>
          </Table>
          {isLoading && (
            <Box
              style={{ minHeight: 'calc(100vh - 350px' }}
              display="flex"
              align="center"
              justify="center"
            >
              <Text fontWeight="semibold" textAlign="center">
                Loading...
              </Text>
            </Box>
          )}

          {records?.length === 0 && isSearchParams && !isLoading && (
            <Box
              style={{ minHeight: 'calc(100vh - 350px' }}
              display="flex"
              align="center"
              justify="center"
            >
              {emptyStateFilter || (
                <Text fontWeight="semibold" textAlign="center">
                  {noFilterText || 'The filter result is empty'}
                </Text>
              )}
            </Box>
          )}
        </Box>
      )}
      {records?.length === 0 && !isSearchParams && !isLoading && (
        <Box
          style={{ minHeight: 'calc(100vh - 350px' }}
          display="flex"
          align="center"
          justify="center"
        >
          {emptyState || (
            <Text fontWeight="semibold" textAlign="center">
              There is no data.
            </Text>
          )}
        </Box>
      )}

      {pagination && records?.length !== 0 && (
        <Paginate
          pagination={{
            currentPage: pagination?.currentPage || 1,
            perPage: pagination?.perPage || 10,
            totalCurrentPage: pagination?.totalCurrentPage || 1,
            totalData: pagination?.totalData || 1,
            totalPage: pagination?.totalPage || 1
          }}
        />
      )}
    </>
  );
};

export default HudoroTable;
