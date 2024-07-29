// import TUVNORD from '@core/assets/icons/TUVNORD.svg';
// import sigInImage from '@core/assets/svg/SignIn-img.svg';
import { PropsWithChildren, memo } from 'react';
import { Box, useMediaQuery } from '@hudoro/admin';

interface AuthLayoutProps extends PropsWithChildren {
  coverImage?: string;
}

export const AuthLayout = memo(({ children, coverImage }: AuthLayoutProps) => {
  const desktop = useMediaQuery('md');
  // const radius = useRadius();

  return (
    <Box
      direction={desktop ? 'row' : 'column'}
      width="width-screen"
      height="height-screen"
    >
      <Box
        direction="row"
        justify="center"
        align="center"
        padding="spacing-12"
        style={{
          width: '100%',
          ...(coverImage && {
            backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }),
          ...(desktop
            ? {}
            : {
              maxWidth: '100%',
              width: '100%',
              minHeight: '100vh'
            })
        }}
      >
        <Box
          display="flex"
          // flex="1"
          style={{
            backgroundColor: 'var(--hsd-ui-utility-dark-tertiary)',
            // position: 'fixed',
            zIndex: 10,
            ...(desktop
              ? {
                // right: 0,
                // minHeight: '100vh',
                // width: 'calc(50vw + 6.125rem)'
              }
              : {
                bottom: 0,
                left: 0,
                right: 0,
                minHeight: 300
              })
          }}
        >
          <Box
            direction="column"
            padding="spacing-6"
            style={{ width: '414px', margin: 'auto' }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
