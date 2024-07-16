import RUANGKELAS from '@core/assets/icons/RUANGKELAS.svg';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function RootView() {
  // const auth = useAuth();
  // const setupMenus = useMenus();
  // const location = useLocation();
  // const app = useApp();
  // const navigate = useNavigate();
  // // const { data: profile, isLoading: loadingProfile } = useProfile();
  // // const userProfile = profile && profile.data ? profile.data : null;
  //
  // const [showDialog, setShowDialog] = useState(false);

  // if (auth.loading) return null;

  // trigger build
  // if (!auth.accessToken)
  //   return <Navigate to="/login" state={{ userNotLogged: true }} replace />;
  //
  // if (location.pathname === '/')
  //   return (
  //     <Navigate to="/customers" state={{ userNotLogged: false }} replace />
  //   );

  // const handleShowLogoutDialog = () => {
  //   setShowDialog(true);
  // };
  //
  // const handleCancelLogout = () => {
  //   setShowDialog(false);
  // };
  //
  // const handleConfirmLogout = () => {
  //   setShowDialog(false);
  //   deleteAuthFromStorage().then(() => {
  //     navigate('/login', {
  //       replace: true,
  //       state: {
  //         userLoggedOut: true
  //       }
  //     });
  //   });
  // };

  return (
    <Layout>
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
        userData={{
          name: 'rizki izzul haq',
          email: 'rizkiizzulhaq14@gmailc.om'
        }}
      />
      <Outlet />
    </Layout>
  );
}

export default RootView;
