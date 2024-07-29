import { useState } from 'react';

export const useHeaderState = () => {
  const [mobileLogout, setMobileLogout] = useState(false);

  const toggleMobileLogout = () => setMobileLogout(prev => !prev);

  return {
    mobileLogout,
    toggleMobileLogout
  };
};
