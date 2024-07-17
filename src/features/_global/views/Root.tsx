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
import { useProfile } from '../hooks';
import { deleteAuthFromStorage } from '@features/authentication/utils';
import { emitAuthUpdated } from '../helper';

function RootView() {
  const navigate = useNavigate();
  const { isPending, items } = useProfile();
  const [showDialog, setShowDialog] = useState(false);

  const handleShowLogoutDialog = () => {
    setShowDialog(true);
  };
  const handleCancelLogout = () => {
    setShowDialog(false);
  };
  const handleConfirmLogout = () => {
    setShowDialog(false);
    deleteAuthFromStorage().then(() => {
      navigate('/auth', {
        replace: true,
        state: {
          userLoggedOut: true
        }
      });
    });
    emitAuthUpdated();
  };
  return (
    <>
      <RootLayout>
        <Header
          logo={RUANGKELAS}
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
          userData={{
            name: isPending
              ? 'Loading...'
              : items?.sub !== undefined
                ? items.sub
                : '',
            email: isPending
              ? 'Loading...'
              : items?.email !== undefined
                ? items.email
                : ''
          }}
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
