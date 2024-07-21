import { Box, BoxProps, useMediaQuery } from '@hudoro/admin';
import React, { ReactNode } from 'react';

interface LayoutProps extends BoxProps {
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutProps> = React.memo(({ children }) => {
  const desktop = useMediaQuery('lg');
  const tablet = useMediaQuery('md');
  return (
    <Box
      marginTop="md"
      gap="md"
      paddingLeft={
        desktop ? 'spacing-48' : tablet ? 'spacing-24' : 'spacing-10'
      }
      paddingRight={
        desktop ? 'spacing-48' : tablet ? 'spacing-24' : 'spacing-10'
      }
    >
      {children}
    </Box>
  );
});

export default LayoutContainer;
