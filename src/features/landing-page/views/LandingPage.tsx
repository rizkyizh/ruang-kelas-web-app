import { Box, Button, Text } from '@hudoro/admin';

import sigInImage from '@core/assets/svg/hero-bg.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@features/authentication/hooks/useAuth';
import LayoutContainer from '@features/_global/components/Container';
export function LandingPageView() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <Box
      width="width-screen"
      customHeight={'80vh'}
      position="relative"
      id="hero"
      style={{
        backgroundImage: `url(${sigInImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      justify="center"
      align="center"
    >
      <LayoutContainer>
        <Text
          fontSize="5xl"
          fontWeight="extrabold"
          style={{
            color: 'white',
            zIndex: 10
          }}
          lineHeight="leading-snug"
        >
          Learning Today,
          <br />
          Leading Tomorrow
        </Text>
        <Text
          fontSize="xl"
          style={{
            color: 'white',
            zIndex: 10
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eveniet
          quos repellat suscipit? Nisi, at?
        </Text>
        <Button
          onClick={() => {
            if (!auth.token) {
              navigate('/auth');
            } else {
              navigate('/dashboard/home');
            }
          }}
          quaternary
          corner="circular"
          id="btn-masuk"
        >
          {!auth.token ? 'Masuk' : 'Go to dashboard'}
        </Button>
      </LayoutContainer>
    </Box>
  );
}
