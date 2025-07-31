type SharePageProps = {
  params: { id: string };
};

export default function SharePage({ params }: SharePageProps) {
  const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${params.id}.png`;

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Meu Ranking da Diego Martins</h1>
      <img
        src={imageUrl}
        alt="Ranking da Diego"
        style={{ maxWidth: '100%', borderRadius: 12, marginTop: 16 }}
      />
    </main>
  );
}
