type Props = {
  params: {
    id: string;
  };
};

export default async function SharePage({ params }: Props) {
  const decodedId = decodeURIComponent(params.id);
  const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}.png`;

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>ID recebido:</h1>
      <p>{decodedId}</p>
      <img
        src={imageUrl}
        alt="Ranking"
        style={{ maxWidth: '100%', marginTop: '1rem', borderRadius: '12px' }}
      />
    </main>
  );
}
