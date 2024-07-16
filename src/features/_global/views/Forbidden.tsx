import ForbiddenImage from '@core/assets/svg/403';
import { Box, Button, Text } from '@hudoro/admin';
import { useNavigate } from 'react-router-dom';

export default function ForbiddenPageView() {
  const navigate = useNavigate();
  return (
    <Box
      height="height-screen"
      fullWidth
      display="flex"
      align="center"
      justify="center"
      gap="lg"
    >
      <ForbiddenImage width={600} />
      <Text fontWeight="bold" fontSize="3xl">
        We Are Sorry ...
      </Text>
      <Box width="width-48">
        <Button
          onClick={() => {
            navigate('/customers');
          }}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
