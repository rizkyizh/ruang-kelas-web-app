import {
  Box,
  BoxProps,
  Text,
  Badges,
  useMediaQuery,
  useColor
} from '@hudoro/admin';
import { PropsWithChildren, memo } from 'react';
import React from 'react';

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

export const DetailCourseSection = memo(
  ({
    children,
    title,
    titleTag,
    action,
    header,

    headerProps = { borderBottom: true }
  }: SectionProps) => {
    const renderTitle = () => {
      if (titleTag) {
        return (
          <Box direction="row" gap="spacing-2" align="center">
            <Text fontSize="md">{title}</Text>
            <Badges border corners="rounded" size="lg" text={titleTag} />
          </Box>
        );
      }

      return (
        <Text fontSize="md" fontWeight="semibold">
          {title}
        </Text>
      );
    };

    const renderHeader = () => {
      if (header) return header;

      return (
        <Box
          direction="row"
          justify="space-between"
          align="center"
          gap="spacing-4"
        >
          {renderTitle()}
          <Box>{action ? action : null}</Box>
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
      >
        {header !== null ? (
          <SectionHeader {...headerProps}>{renderHeader()}</SectionHeader>
        ) : null}
        <SectionBody>{children}</SectionBody>
      </Box>
    );
  }
);
