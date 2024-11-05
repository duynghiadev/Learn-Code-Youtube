import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';

import router from '@/router';
import { themeDark } from '@/configs/theme';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider theme={themeDark}>
        <RouterProvider router={router} />
        <ToastContainer />
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
