import comingsoon from '@core/assets/svg/ComingSoon.svg';
import { Box, Text, useMediaQuery } from '@hudoro/admin';

const ComingSoon = () => {
  const md = useMediaQuery('md');
  return (
    <>
      <Box
        width="width-full"
        borderRadius="rounded-lg"
        paddingInline="spacing-8"
        paddingTop="spacing-4"
        display="flex"
        justify="center"
        align="center"
        gap="spacing-8"
        height="height-screen"
        style={{
          backgroundColor: '#fff',
          flexDirection: md ? 'row' : 'column-reverse'
        }}
      >
        <Box>
          <Text
            fontWeight="medium"
            fontSize={md ? '5xl' : '2xl'}
            fontFamily="Poppins"
            style={{ color: 'var(--hsd-ui-text-default)' }}
          >
            COMING SOON!
          </Text>
          <Text fontFamily="Poppins" fontWeight="light">
            Thank You for Your Enthusiasm! We're working hard behind the scenes
            to bring you the pages that are coming soon.
          </Text>
        </Box>
        <img
          src={comingsoon}
          width={md ? '495px' : '295px'}
          height={md ? '295px' : '200px'}
          alt="Coming Soon"
        />
      </Box>
    </>
  );
};

export default ComingSoon;
