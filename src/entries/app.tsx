import RootView from '@features/_global/views/root';
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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MembersView from '@features/members/views/Members';
import CoursesView from '@features/courses/views/Courses';

import '@mdxeditor/editor/style.css';
import CourseDetailView from '@features/courses/views/CourseDetail';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <RootView />,
    children: [
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
        path: '403',
        element: <ForbiddenPageView />
      },
      {
        path: '*',
        element: <NotFoundPageView />
      }
    ]
  }
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
      <ReactQueryDevtools initialIsOpen={false} />
    </Query>
  );
}

export default AppContainer;
