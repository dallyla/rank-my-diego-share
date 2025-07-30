// type Props = {
//     params: Promise<{ id: string }>;
//   };
  
//   export const dynamic = "force-dynamic";
  
//   export default async function Page({ params }: Props) {
//     const { id } = await params; // AQUI: await para resolver o params
//     const decodedId = decodeURIComponent(id);
//     const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;
  
//     return (
//       <div style={{ padding: 32, textAlign: "center" }}>
//         <h1>Meu Ranking da Diego Martins</h1>
//         <img
//           src={imageUrl}
//           alt="Ranking da Diego"
//           style={{
//             maxWidth: "100%",
//             borderRadius: 12,
//             marginTop: 16,
//           }}
//         />
//       </div>
//     );
//   }
  
//   export async function generateMetadata({ params }: Props) {
//     const { id } = await params; // AQUI TAMBÉM: await para resolver o params
//     const decodedId = decodeURIComponent(id);
//     const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;
  
//     return {
//       title: "Meu Ranking da Diego Martins 🎤✨",
//       description: "Veja meu ranking das músicas favoritas!",
//       openGraph: {
//         title: "Meu Ranking da Diego Martins 🎤✨",
//         description: "Veja meu ranking das músicas favoritas!",
//         images: [imageUrl],
//         url: `https://rank-my-diego-share.vercel.app/share/${encodeURIComponent(decodedId)}`,
//         type: "website",
//       },
//       twitter: {
//         card: "summary_large_image",
//         images: [imageUrl],
//       },
//     };
//   }

  //tentativa 2

// type Props = {
//   params: { id: string[] };
// };

// export default async function Page({ params }: Props) {
//   // 'id' agora é array, vamos juntar para formar o public_id completo
//   const fullId = params.id.join('/'); // "rank-my-diego/rank-diego-1753909805333"
//   const decodedId = decodeURIComponent(fullId);
//   const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;

//   return (
//     <div style={{ padding: 32, textAlign: "center" }}>
//       <h1>Meu Ranking da Diego Martins</h1>
//       <img
//         src={imageUrl}
//         alt="Ranking da Diego"
//         style={{ maxWidth: "100%", borderRadius: 12, marginTop: 16 }}
//       />
//     </div>
//   );
// }

// export async function generateMetadata({ params }: Props) {
//   const fullId = params.id.join('/');
//   const decodedId = decodeURIComponent(fullId);
//   const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${decodedId}`;

//   return {
//     title: "Meu Ranking da Diego Martins 🎤✨",
//     description: "Veja meu ranking das músicas favoritas!",
//     openGraph: {
//       title: "Meu Ranking da Diego Martins 🎤✨",
//       description: "Veja meu ranking das músicas favoritas!",
//       images: [imageUrl],
//       url: `https://rank-my-diego.vercel.app/share/${encodeURIComponent(decodedId)}`,
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       images: [imageUrl],
//     },
//   };
// }


//tentativa 3

// import { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//   params: {
//     id: string;
//   };
// };

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const publicId = params.id;
//   const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${publicId}.png`;

//   return {
//     title: 'Veja meu ranking!',
//     description: 'Confira meu desempenho no Look At Me!',
//     openGraph: {
//       title: 'Veja meu ranking!',
//       description: 'Confira meu desempenho no Look At Me!',
//       images: [imageUrl],
//       url: `https://rank-my-diego-share.vercel.app/share/${publicId}`,
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: 'Veja meu ranking!',
//       description: 'Confira meu desempenho no Look At Me!',
//       images: [imageUrl],
//     },
//   };
// }

// export default function SharePage({ params }: Props) {
//   const publicId = params.id;
//   const imageUrl = `https://res.cloudinary.com/dqon7a1wv/image/upload/${publicId}.png`;

//   return (
//     <main style={{ textAlign: 'center', padding: '2rem' }}>
//       <h1>Veja meu ranking!</h1>
//       <p>Compartilhe com seus amigos!</p>
//       <img
//         src={imageUrl}
//         alt="Ranking gerado"
//         style={{ maxWidth: '100%', borderRadius: '12px', margin: '2rem 0' }}
//       />
//       <a
//         href={imageUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           display: 'inline-block',
//           padding: '0.75rem 1.5rem',
//           background: '#6C5DD3',
//           color: 'white',
//           textDecoration: 'none',
//           borderRadius: '8px',
//         }}
//       >
//         Abrir imagem em tamanho real
//       </a>
//     </main>
//   );
// }


type Props = {
  params: {
    id: string;
  };
};

export default async function SharePage({ params }: Props) {
  const { id } = await params; // <- solução compatível com App Router
  const decodedId = decodeURIComponent(id);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>ID recebido:</h1>
      <p>{decodedId}</p>
    </main>
  );
}