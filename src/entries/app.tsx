import '@hudoro/admin/dist/style.css';
import './app.css';
import RUANGKELAS from '@core/assets/icons/RUANGKELAS.svg';
// import AuthView from '@features/_global/views/auth';
// import LoginView from '@features/authentication/views/Login';
// import OtpView from '@features/authentication/views/otp';
import { Query } from '@core/libs/query/component';
import { App, ThemeObject, ToastContainer } from '@hudoro/admin';
import { createPortal } from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MENU_CONFIG } from '@features/_global/configs';
import apptheme from '@core/assets/theme/app-theme.json';
import NotFoundPageView from '@features/_global/views/NotFound';
import ForbiddenPageView from '@features/_global/views/Forbidden';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MembersView from '@features/members/views/Members';
import CoursesView from '@features/courses/views/Courses';

import '@mdxeditor/editor/style.css';
import CourseDetailView from '@features/courses/views/CourseDetail';
import DashboardRootView from '@features/_global/views/DashboardRoot';
import RootView from '@features/_global/views/Root';
import { LandingPageView } from '@features/landing-page/views/LandingPage';
import { AboutView } from '@features/about/views/About';
import { CatalogCourseView } from '@features/catalog-course/views/CatalogCourse';
import { ContactUsView } from '@features/contact-us/views/ContactUs';
import AuthView from '@features/_global/views/auth';
import LoginView from '@features/authentication/views/Login';
import RegisterView from '@features/authentication/views/Register';
import DashboardMenuView from '@features/dashboardMenu/views/DasboardMenu';
import MyCourseView from '@features/my-course/views/MyCourse';
import MyTransactionView from '@features/my-transaction/views/MyTransaction';
import MyHistoriesView from '@features/my-histories/views/MyHistories';
import TransactionView from '@features/transactions/views/Transactions';
import HistoriesView from '@features/histories/views/Histories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: '/',
        element: <LandingPageView />
      },
      {
        path: 'about',
        element: <AboutView />
      },
      {
        path: 'catalog-course',
        element: <CatalogCourseView />
      },
      {
        path: 'contact-us',
        element: <ContactUsView />
      },
      {
        path: 'auth',
        element: <AuthView />,
        children: [
          {
            path: '',
            element: <LoginView />
          },
          {
            path: 'register',
            element: <RegisterView />
          },
          {
            path: '*',
            element: <NotFoundPageView />
          }
        ]
      },

      {
        path: '*',
        element: <NotFoundPageView />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardRootView />,
    children: [
      {
        path: 'home',
        element: <DashboardMenuView />
      },
      {
        path: 'courses',
        element: <CoursesView />
      },
      {
        path: 'courses/:id',
        element: <CourseDetailView />
      },
      {
        path: 'members',
        element: <MembersView />
      },
      {
        path: 'my-course',
        element: <MyCourseView />
      },
      {
        path: 'my-transaction',
        element: <MyTransactionView />
      },
      {
        path: 'my-history',
        element: <MyHistoriesView />
      },
      {
        path: 'transaction',
        element: <TransactionView />
      },
      {
        path: 'history',
        element: <HistoriesView />
      },
      {
        path: '403',
        element: <ForbiddenPageView />
      },
      {
        path: '',
        element: <NotFoundPageView />
      }
    ]
  },
  // {
  //   path: '/',
  //   element: <AuthView />,
  //   children: [
  //     {
  //       path: '/login',
  //       element: <LoginView />
  //     },
  //     {
  //       path: '/otp',
  //       element: <OtpView />
  //     },
  //     {
  //       path: '*',
  //       element: <NotFoundPageView />
  //     }
  //   ]
  // }
  {
    path: '',
    element: <NotFoundPageView />
  }
]);

function AppContainer() {
  return (
    <Query>
      <App
        logo={RUANGKELAS}
        menus={MENU_CONFIG}
        router={<RouterProvider router={router} />}
        theme={apptheme as unknown as ThemeObject}
      />
      {createPortal(
        <ToastContainer type="outline" direction="top-right" />,
        document.body
      )}
      {/*   <ReactQueryDevtools initialIsOpen={false} /> */}
    </Query>
  );
}

export default AppContainer;
