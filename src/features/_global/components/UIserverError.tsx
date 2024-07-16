import { Text, Box } from '@hudoro/admin';

export default function UIServerError() {
  return (
    <Box
      display="flex"
      direction="row"
      align="center"
      justify="center"
      style={{ minHeight: 'calc(100vh - 163px' }}
    >
      <Text fontFamily="Poppins" fontSize="lg">
        Something wrong .... server error, please try again
      </Text>
    </Box>
  );
}
