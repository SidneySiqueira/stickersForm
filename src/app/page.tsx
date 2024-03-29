"use client"

import Form from '@/components/Form';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main style={{height: '100%'}}>
        <Form />
      </main>
    </div>
  );
};

export default Home;
