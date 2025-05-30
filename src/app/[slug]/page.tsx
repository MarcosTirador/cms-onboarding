import RenderBlocks from '../../blocks/RenderBlocks';
import PageWrapper from '@/components/PageWrapper';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { cache } from 'react'

export const getPageData = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] ?? null
})

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const page = await getPageData({ slug });

  if (!page) return <div>Página no encontrada</div>;
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
      <RenderBlocks blocks={page.layout} />
    </PageWrapper>
  );
}
