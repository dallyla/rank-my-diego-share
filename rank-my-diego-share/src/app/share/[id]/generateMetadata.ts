import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = decodeURIComponent(params.id);
  const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${id}`;

  return {
    title: "Meu Ranking da Diego Martins 🎤✨",
    description: "Veja meu ranking das músicas favoritas!",
    openGraph: {
      title: "Meu Ranking da Diego Martins 🎤✨",
      description: "Veja meu ranking das músicas favoritas!",
      images: [imageUrl],
      url: `https://rank-my-diego-share.vercel.app/share/${encodeURIComponent(id)}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [imageUrl],
    },
  };
}
