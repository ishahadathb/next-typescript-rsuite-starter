/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import 'rsuite/lib/styles/index.less';
import AppLayout from '../component/layout/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
