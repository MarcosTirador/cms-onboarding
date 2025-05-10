'use client';

import AccordionBlock from "@/app/[slug]/components/AccordionBlock";

type Block = {
  blockType: string;
  blockName?: string;
  [key: string]: any;
};

type Props = {
  blocks: Block[];
};

export default function RenderBlocks({ blocks }: Props) {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.blockType) {
          case 'heading':
            const HeadingTag = block.size || 'h2';
            return <HeadingTag key={i}>{block.text}</HeadingTag>;

          case 'text':
            return (
              <p key={i} style={{ fontSize: getFontSize(block.size) }}>
                {block.content}
              </p>
            );
            case 'button':
              return (
                <a
                  key={i}
                  href={block.url}
                  style={{
                    display: 'inline-block',
                    padding: block.size === 'sm' ? '0.25rem 0.5rem' :
                            block.size === 'lg' ? '0.75rem 1.5rem' :
                            '0.5rem 1rem',
                    backgroundColor: getButtonColor(block.variant),
                    color: block.variant === 'link' ? '#3b82f6' : 'white',
                    textDecoration: block.variant === 'link' ? 'underline' : 'none',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  {block.label}
                </a>
              );

            case 'accordion':
              return <AccordionBlock key={i} title={block.title} content={block.content} />;


            case 'flex':
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: block.direction,
                    alignItems: block.align,
                    justifyContent: block.justify,
                    gap: '1rem',
                  }}
                >
                  <RenderBlocks blocks={block.children} />
                </div>
              );

          default:
            return null;
        }
      })}
    </>
  );
}

function getFontSize(size: string) {
  switch (size) {
    case 'small':
      return '0.875rem';
    case 'large':
      return '1.5rem';
    default:
      return '1rem';
  }
}

function getButtonColor(variant: string) {
  switch (variant) {
    case 'primary':
      return '#3b82f6'; // azul
    case 'secondary':
      return '#6b7280'; // gris
    case 'destructive':
      return '#ef4444'; // rojo
    case 'outline':
      return 'transparent';
    case 'ghost':
      return 'transparent';
    case 'link':
      return 'transparent';
    default:
      return '#3b82f6';
  }
}
