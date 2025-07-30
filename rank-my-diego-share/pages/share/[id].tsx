// pages/share/[id].tsx

import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface Props {
  id: string;
  imageUrl: string;
  pageUrl: string;
}

export default function SharePage({ id, imageUrl, pageUrl }: Props) {
  return (
    <>
      <Head>
        <title>Ranking Diego Martins</title>
        <meta property="og:title" content="Meu Ranking da Diego Martins 🎤✨" />
        <meta property="og:description" content="Veja meu ranking das músicas favoritas!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <img
          src={imageUrl}
          alt="Ranking"
          style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1rem' }}
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const id = params?.id;
  const cloudName = process.env.CLOUDINARY_NAME;

  if (!id || typeof id !== 'string' || !cloudName) {
    return { notFound: true };
  }

  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${id}`;
  const host = req.headers.host;
  const protocol = host?.includes('localhost') ? 'http' : 'https';
  const pageUrl = `${protocol}://${host}/share/${encodeURIComponent(id)}`;

  return {
    props: {
      id,
      imageUrl,
      pageUrl,
    },
  };
};
