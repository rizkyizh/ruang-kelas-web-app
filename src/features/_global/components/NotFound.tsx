import Empty from '@core/assets/icons/Empty';
import { Box, Text } from '@hudoro/admin';

const NotFoundUI = () => {
  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      width="width-full"
      gap="spacing-4"
      style={{ height: '400px' }}
    >
      <Empty />
      <Box style={{ color: 'var(--hsd-ui-text-default)' }}>
        <Text
          textAlign="center"
          style={{ color: 'var(--hsd-ui-text-default)' }}
        >
          It looks like we didn't find your search data,
        </Text>
        <Text textAlign="center">change your search and try again.</Text>
      </Box>
    </Box>
  );
};

export default NotFoundUI;
