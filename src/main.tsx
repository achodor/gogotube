import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root, { loader as rootLoader } from './routes/root';
import Videos, { loader as videosLoader } from './routes/videos';
import VideoId, { loader as videoLoader } from './routes/videoId';
import Login, { loader as loginLoader } from './routes/login';
import ErrorMessage from './components/ErrorMessage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorMessage />,
    loader: rootLoader,
    children: [
      {
        path: '/videos',
        element: <Videos />,
        loader: videosLoader,
        errorElement: <ErrorMessage />,
        children: [
          {
            path: '/videos/:id',
            element: <VideoId />,
            errorElement: <ErrorMessage />,
            loader: videoLoader
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorMessage />,
    loader: loginLoader
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
