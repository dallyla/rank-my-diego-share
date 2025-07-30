type Props = {
    params: Promise<{ id: string }>;
  };
  
  export const dynamic = "force-dynamic";
  
  export default async function Page({ params }: Props) {
    const { id } = await params; // AQUI: await para resolver o params
    const decodedId = decodeURIComponent(id);
    const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;
  
    return (
      <div style={{ padding: 32, textAlign: "center" }}>
        <h1>Meu Ranking da Diego Martins</h1>
        <img
          src={imageUrl}
          alt="Ranking da Diego"
          style={{
            maxWidth: "100%",
            borderRadius: 12,
            marginTop: 16,
          }}
        />
      </div>
    );
  }
  
  export async function generateMetadata({ params }: Props) {
    const { id } = await params; // AQUI TAMBÉM: await para resolver o params
    const decodedId = decodeURIComponent(id);
    const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;
  
    return {
      title: "Meu Ranking da Diego Martins 🎤✨",
      description: "Veja meu ranking das músicas favoritas!",
      openGraph: {
        title: "Meu Ranking da Diego Martins 🎤✨",
        description: "Veja meu ranking das músicas favoritas!",
        images: [imageUrl],
        url: `https://rank-my-diego-share.vercel.app/share/${encodeURIComponent(decodedId)}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        images: [imageUrl],
      },
    };
  }
  