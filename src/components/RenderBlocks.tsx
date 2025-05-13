'use client';

// import AccordionBlock from "@/app/[slug]/components/AccordionBlock";
import { Button as OnceUIButton } from '@/once-ui/components';
import { Text } from '@/once-ui/components';
import TailwindAccordion from '@/components/TailwindAccordion';


type Props = {
  blocks: Block[];
};

export default function RenderBlocks({ blocks }: Props) {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.blockType) {
          case 'heading':
            return (
              <Text
                key={i}
                as={block.size ?? 'h2'}
                className="mb-4 font-bold text-gray-800"
              >
                {block.text}
              </Text>
            );
          case 'text':
            return (
              <Text
                key={i}
                as="p"
                size={block.size ?? 'normal'}
                className="mb-4 text-gray-700 leading-relaxed"
              >
                {block.content}
              </Text>
            );

          case 'button':
            return (
              <OnceUIButton
                key={i}
                variant={block.variant ?? 'primary'}
                size={block.size ?? 'md'}
                as="a"
                href={block.url}
                className="mb-4"
              >
                {block.label}
              </OnceUIButton>
            );

          case 'accordion':
            return (
              <TailwindAccordion
                key={i}
                title={block.title}
                content={block.content}
              />
            );
            type Block = {
              blockType: string;
              blockName?: string;
              [key: string]: any;
            };


          case 'flex':
            return (
              <div
                key={i}
                className={`flex ${block.direction === 'column' ? 'flex-col' : 'flex-row'}
                              items-${mapAlign(block.align)}
                              justify-${mapJustify(block.justify)}
                              gap-4 mb-4`}
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

function mapAlign(align: string) {
  switch (align) {
    case 'flex-start': return 'start';
    case 'center': return 'center';
    case 'flex-end': return 'end';
    case 'stretch': return 'stretch';
    default: return 'start';
  }
}

function mapJustify(justify: string) {
  switch (justify) {
    case 'flex-start': return 'start';
    case 'center': return 'center';
    case 'flex-end': return 'end';
    case 'space-between': return 'between';
    case 'space-around': return 'around';
    default: return 'start';
  }
}