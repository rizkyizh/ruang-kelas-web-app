import { Box, useMediaQuery } from '@hudoro/admin';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = React.memo(({ children }) => {
  const desktop = useMediaQuery('lg');
  const tablet = useMediaQuery('md');
  return (
    <Box
      paddingTop="spacing-16"
      paddingLeft={
        desktop ? 'spacing-64' : tablet ? 'spacing-24' : 'spacing-10'
      }
      paddingRight={
        desktop ? 'spacing-64' : tablet ? 'spacing-24' : 'spacing-10'
      }
    >
      {children}
    </Box>
  );
});

export default Layout;
