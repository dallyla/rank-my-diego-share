// pages/share/[id].tsx

import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Props {
  id: string;
  cloudinaryName: string;
}

export default function SharePage({ id, cloudinaryName }: Props) {
  const imageUrl = `https://res.cloudinary.com/${cloudinaryName}/image/upload/${id}`;

  return (
    <>
      <Head>
        <title>Ranking Diego Martins</title>
        <meta property="og:title" content="Meu Ranking da Diego Martins 🎤✨" />
        <meta property="og:description" content="Veja meu ranking das músicas favoritas!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={`https://rank-my-diego.vercel.app/share/${encodeURIComponent(id)}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Meu Ranking da Diego Martins</h1>
        <img
          src={imageUrl}
          alt="Ranking"
          style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1rem' }}
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  if (!id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      cloudinaryName: process.env.CLOUDINARY_NAME || '',
    },
  };
};
