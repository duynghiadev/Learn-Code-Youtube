import React, { lazy } from 'react';
import routes from '@/configs/routes';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@/components/Protected/ProtectedRoute';
import ClientLayout from '@/components/Layout/ClientLayout';
const Login = lazy(() => import('@/pages/Authentication/Login'));
const Register = lazy(() => import('@/pages/Authentication/Register'));
const Learning = lazy(() => import('@/pages/Learning/Learning'));
const Tutorial = lazy(() => import('@/pages/Tutorial/Tutorial'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Course = lazy(() => import('@/pages/Course/Course'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const SetAvatar = lazy(() => import('@/pages/SetAvatar/SetAvatar'));
const Chat = lazy(() => import('@/pages/Chat/Chat'));
const LearningPaths = lazy(() => import('@/pages/LearningPaths/LearningPaths'));
const Blog = lazy(() => import('@/pages/Blog/Blog'));
const Privacy = lazy(() => import('@/pages/Privacy/Privacy'));
const Terms = lazy(() => import('@/pages/Terms/Terms'));
const NewPost = lazy(() => import('@/pages/NewPost/NewPost'));
const CourseGroup = lazy(() => import('@/pages/CourseGroup/CourseGroup'));
const Classroom = lazy(() => import('@/pages/Classroom/Classroom'));

const router = createBrowserRouter([
  {
    id: 'loading',
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        id: routes.login.id,
        path: routes.login.path,
        element: <Login />,
      },
      {
        id: routes.register.id,
        path: routes.register.path,
        element: <Register />,
      },
      {
        id: routes.course.id,
        path: routes.course.path,
        element: <Learning />,
      },
      {
        id: routes.learningPaths.id,
        path: routes.learningPaths.path,
        element: <Tutorial />,
      },
      {
        id: routes.blog.id,
        path: routes.blog.path,
        element: <Blog />,
      },
      {
        id: routes.privacy.id,
        path: routes.privacy.path,
        element: <Privacy />,
      },
      {
        id: routes.terms.id,
        path: routes.terms.path,
        element: <Terms />,
      },
      {
        id: routes.classroom.id,
        path: routes.classroom.path,
        element: <Classroom />,
      },
      {
        id: routes.learningPathsSlug.id,
        path: routes.learningPathsSlug.path,
        element: <LearningPaths />,
      },
      {
        id: routes.profile.id,
        path: routes.profile.path,
        element: <Profile />,
      },
      {
        id: routes.home.id,
        path: routes.home.path,
        element: <Home />,
      },
      {
        id: routes.courseGroups.id,
        path: routes.courseGroups.path,
        element: <CourseGroup />,
      },
      {
        id: 'protected',
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            id: routes.courseSlug.id,
            path: routes.courseSlug.path,
            element: <Course />,
          },
          {
            id: routes.newPost.id,
            path: routes.newPost.path,
            element: <NewPost />,
          },
          {
            id: routes.setAvatar.id,
            path: routes.setAvatar.path,
            element: <SetAvatar />,
          },
          {
            id: routes.chat.id,
            path: routes.chat.path,
            element: <Chat />,
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <h1>Tính năng đang được phát triển hoặc trang không tồn tại</h1>,
  },
]);

export default router;
