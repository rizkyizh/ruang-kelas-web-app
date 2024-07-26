import { PropsWithChildren, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import React from 'react';
import {
  Box,
  BoxProps,
  Text,
  Badges,
  Input,
  Icon,
  useMediaQuery,
  searchParamsToObject,
  useColor,
  Width
} from '@hudoro/admin';

export interface SectionProps extends PropsWithChildren {
  header?: React.ReactNode | null;
  filter?: React.ReactNode | null;
  filterContainer?: BoxProps;
  actionContainer?: BoxProps;
  title?: string;
  titleTag?: string;
  action?: React.ReactNode | null;
  searchField?: boolean;
  searchKey?: string;
  searchPlaceholder?: string;
  searchHighlightPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  headerProps?: SectionHeaderProps;
  width?: Width;
}

export interface SectionHeaderProps extends PropsWithChildren {
  borderBottom?: boolean;
}

const SectionHeader = memo(
  ({ children, borderBottom = true }: SectionHeaderProps) => {
    const desktop = useMediaQuery('lg');

    const colors = useColor();

    return (
      <Box
        id="asdasd"
        padding="spacing-4"
        paddingLeft={desktop ? 'spacing-6' : 'spacing-4'}
        paddingRight={desktop ? 'spacing-6' : 'spacing-4'}
        style={
          borderBottom
            ? {
                borderBottom: `1px solid rgba(${colors?.raw?.gray?.[500]}, 0.2)`
              }
            : undefined
        }
      >
        {children}
      </Box>
    );
  }
);

const SectionBody = memo(({ children }: PropsWithChildren) => {
  const desktop = useMediaQuery('lg');

  return (
    <Box
      padding="spacing-4"
      paddingLeft={desktop ? 'spacing-6' : 'spacing-4'}
      paddingRight={desktop ? 'spacing-6' : 'spacing-4'}
    >
      {children}
    </Box>
  );
});

export const Section = memo(
  ({
    children,
    title,
    titleTag,
    action,
    filter,
    searchField,
    header,
    onSearchChange,
    searchKey = 'q',
    searchPlaceholder = 'CTRL + K to search query',
    searchHighlightPlaceholder = 'CTRL + K',
    filterContainer,
    actionContainer,
    width,
    headerProps = { borderBottom: true }
  }: SectionProps) => {
    const desktop = useMediaQuery('lg');

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get(searchKey);
    const queries = searchParamsToObject(searchParams.toString());

    const handleSearchFieldChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        ({ target: { value } }) => {
          if (onSearchChange) onSearchChange(value);
          if (searchKey) {
            setSearchParams({ ...queries, [searchKey]: value });
          }
        },
        [searchKey, onSearchChange, setSearchParams, queries]
      );

    const renderSearchField = () => {
      return (
        <Input
          placeholder={searchPlaceholder}
          highlightPlaceholder={searchHighlightPlaceholder}
          leftIcon={<Icon name="Search" width={20} height={20} />}
          onChange={handleSearchFieldChange}
          style={{ width: '100%' }}
          value={searchQuery || ''}
        />
      );
    };

    const renderTitle = () => {
      if (titleTag) {
        return (
          <Box direction="row" gap="spacing-2" align="center">
            <Text fontSize="xl">{title}</Text>
            <Badges border corners="rounded" size="lg" text={titleTag} />
          </Box>
        );
      }

      return <Text fontSize="xl">{title}</Text>;
    };

    const renderHeader = () => {
      if (header) return header;

      return (
        <Box
          direction="row"
          justify="space-between"
          align="flex-start"
          gap="spacing-4"
        >
          <Box {...filterContainer}>
            {filter ? filter : title ? renderTitle() : null}
          </Box>
          <Box
            style={
              desktop ? { width: '100%', maxWidth: '19.313rem' } : { flex: 1 }
            }
            {...actionContainer}
          >
            {action ? action : searchField ? renderSearchField() : null}
          </Box>
        </Box>
      );
    };

    return (
      <Box
        style={{ backgroundColor: '#fff' }}
        borderRadius="rounded-md"
        borderColor="gray-100"
        borderWidth="border"
        borderStyle="border-solid"
        width={width}
      >
        {header !== null ? (
          <SectionHeader {...headerProps}>{renderHeader()}</SectionHeader>
        ) : null}
        <SectionBody>{children}</SectionBody>
      </Box>
    );
  }
);
