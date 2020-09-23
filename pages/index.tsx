import React from 'react';
import Head from 'next/head';
import { Button } from 'rsuite';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Button>Awesome button</Button>
    <div>This content area</div>
  </div>
);

export default Home;
