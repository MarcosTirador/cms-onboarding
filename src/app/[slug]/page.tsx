import RenderBlocks from '../../components/RenderBlocks';

async function getPageData(slug: string) {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}`, {
    cache: 'no-store',
  });
  const json = await res.json();
  return json?.docs?.[0];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = await getPageData(slug);

  if (!page) return <div>Página no encontrada</div>;

  return (
    <main>
      <h1>{page.title}</h1>
      <RenderBlocks blocks={page.layout} />
    </main>
  );
}
