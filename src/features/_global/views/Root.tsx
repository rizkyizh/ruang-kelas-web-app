import RUANGKELAS from '@core/assets/icons/RUANGKELAS.svg';
import { Header } from '../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogTitle,
  Flex
} from '@hudoro/admin';
import { useState } from 'react';
import RootLayout from '../components/Layout';

function RootView() {
  const navigate = useNavigate();
  // const auth = useAuth();
  // const setupMenus = useMenus();
  // const location = useLocation();
  // const app = useApp();
  // const navigate = useNavigate();
  // // const { data: profile, isLoading: loadingProfile } = useProfile();
  // // const userProfile = profile && profile.data ? profile.data : null;
  //
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
    // deleteAuthFromStorage().then(() => {
    //   navigate('/login', {
    //     replace: true,
    //     state: {
    //       userLoggedOut: true
    //     }
    //   });
    // });
  };

  return (
    <>
      <RootLayout>
        <Header
          logo={RUANGKELAS}
          // buttons={[{ dot: true, icon: 'Notion', render: false }]}
          menus={[
            {
              label: 'Home',
              to: '/'
            },
            {
              label: 'Tentang Kami',
              to: '/about'
            },
            {
              label: 'Pilih Kelas',
              to: '/catalog-course'
            },
            {
              label: 'Kontak Kami',
              to: '/contact-us'
            }
          ]}
          // userData={{
          //   name: 'Rizki Izzul Haq',
          //   email: 'rizkiizzulhaq14@gmailc.om'
          // }}
          onClickDashboard={() => {
            navigate('/dashboard');
          }}
          onClickLogout={handleShowLogoutDialog}
          onClickLogin={() => {
            navigate('/auth');
          }}
        />
        <Outlet />
      </RootLayout>
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
