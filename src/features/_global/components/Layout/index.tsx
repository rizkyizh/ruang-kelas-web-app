import { Box } from '@hudoro/admin';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = React.memo(({ children }) => {
  return <Box paddingTop="spacing-16">{children}</Box>;
});

export default RootLayout;
