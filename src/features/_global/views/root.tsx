import {
  Box,
  Button,
  DashboardLayout,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogTitle,
  Flex,
  useApp
} from '@hudoro/admin';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deleteAuthFromStorage } from '@features/authentication/utils';
// import { useProfile } from '../hooks/useProfile';
// import { useMenus } from '../hooks';

function RootView() {
  // const auth = useAuth();
  // const setupMenus = useMenus();
  // const location = useLocation();
  const app = useApp();
  const navigate = useNavigate();
  // const { data: profile, isLoading: loadingProfile } = useProfile();
  // const userProfile = profile && profile.data ? profile.data : null;

  const [showDialog, setShowDialog] = useState(false);

  // if (auth.loading) return null;

  // trigger build
  // if (!auth.accessToken)
  //   return <Navigate to="/login" state={{ userNotLogged: true }} replace />;
  //
  // if (location.pathname === '/')
  //   return (
  //     <Navigate to="/customers" state={{ userNotLogged: false }} replace />
  //   );

  const handleShowLogoutDialog = () => {
    setShowDialog(true);
  };

  const handleCancelLogout = () => {
    setShowDialog(false);
  };

  const handleConfirmLogout = () => {
    setShowDialog(false);
    deleteAuthFromStorage().then(() => {
      navigate('/login', {
        replace: true,
        state: {
          userLoggedOut: true
        }
      });
    });
  };

  return (
    <>
      <DashboardLayout
        logo={app.logo}
        menus={app.menus}
        onClickLogout={handleShowLogoutDialog}
        // userData={{
        //   email: loadingProfile
        //     ? 'Loading...'
        //     : userProfile?.email || 'unknown',
        //   name: loadingProfile ? 'Loading...' : userProfile?.name || 'unknown'
        // }}
      >
        <Outlet />
      </DashboardLayout>

      <Dialog isShow={showDialog} onHide={handleCancelLogout}>
        <DialogTitle>Confirmation Logout</DialogTitle>
        <DialogBody>
          Are you sure you want to end the session and exit the page?
        </DialogBody>
        <DialogFooter>
          <Box display="flex" align="flex-end" justify="center">
            <Flex direction="row" gap="sm" align="center">
              <Box>
                <Button secondary onClick={handleCancelLogout}>
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button primary onClick={handleConfirmLogout}>
                  Yes, Sure
                </Button>
              </Box>
            </Flex>
          </Box>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default RootView;
