import React from "react";

export default function SharePage({
  params,
}: {
  params: { id: string };
}) {
  const decodedId = decodeURIComponent(params.id);
  const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}.png`;

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Meu Ranking da Diego Martins</h1>
      <p>ID: {decodedId}</p>
      <img
        src={imageUrl}
        alt="Ranking da Diego"
        style={{
          maxWidth: '100%',
          borderRadius: 12,
          marginTop: 16,
        }}
      />
    </main>
  );
}
