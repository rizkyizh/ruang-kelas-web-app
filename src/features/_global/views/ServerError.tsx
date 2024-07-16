import ServerErrorImage from '@core/assets/svg/500';
import { Box, Button, Text, useMediaQuery } from '@hudoro/admin';
import { useNavigate } from 'react-router-dom';

export default function ServerErrorPageView() {
  const navigate = useNavigate();
  const mobile = useMediaQuery('md');
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box
      height="height-screen"
      fullWidth
      display="flex"
      align="center"
      justify="center"
      gap="lg"
      overflow="overflow-hidden"
    >
      <ServerErrorImage width={mobile ? 600 : 300} />
      <Text fontWeight="bold" fontSize="3xl" textAlign="center">
        Server Problem
      </Text>
      <Text fontWeight="semibold" fontSize="lg" textAlign="center">
        we are trying to fix the problem
      </Text>{' '}
      <Box width="width-48">
        <Button onClick={handleBack}>Go Back</Button>
      </Box>
    </Box>
  );
}
