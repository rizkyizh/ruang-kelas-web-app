import NotFoundImage from '@core/assets/svg/404';
import { Box, Button, Text, useMediaQuery } from '@hudoro/admin';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPageView() {
  const navigate = useNavigate();
  const mobile = useMediaQuery('md');
  const handleBack = () => {
    navigate('/');
  };
  return (
    <Box
      height="height-screen"
      fullWidth
      display="flex"
      align="center"
      justify="center"
      gap="lg"
    >
      <NotFoundImage width={mobile ? 600 : 300} />
      <Text fontWeight="bold" fontSize="3xl" textAlign="center">
        Page Not Found
      </Text>
      <Text fontWeight="semibold" fontSize="lg" textAlign="center">
        Sorry, we couldn't find the page you are looking for
      </Text>{' '}
      <Box width="width-48">
        <Button onClick={handleBack}>Go Back</Button>
      </Box>
    </Box>
  );
}
