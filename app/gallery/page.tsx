import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'AI-generated images created with custom ComfyUI workflows and LoRA models.',
}

const characters = [
  {
    name: 'a1da',
    description: 'Custom LoRA character — trained with ai-toolkit',
    images: [
      '/images/gallery/a1da/ComfyUI_00645_.webp',
      '/images/gallery/a1da/ComfyUI_00010_ (2).webp',
      '/images/gallery/a1da/ComfyUI_00011_.webp',
      '/images/gallery/a1da/realstagram_postp_00019_.webp',
      '/images/gallery/a1da/realstagram_postp_00023_ (1).webp',
      '/images/gallery/a1da/realstagram_postp_00089_.webp',
      '/images/gallery/a1da/realstagram_postp_00173_.webp',
      '/images/gallery/a1da/realstagram_postp_00200_.webp',
      '/images/gallery/a1da/realstagram_postp_00326_.webp',
      '/images/gallery/a1da/realstagram_postp_00803_.webp',
    ],
  },
  {
    name: 'is4c',
    description: 'Custom LoRA character — trained with ai-toolkit',
    images: [
      '/images/gallery/is4c/is4c_new2_cn_img07_postp_00001_.webp',
      '/images/gallery/is4c/realstagram_postp_00930_.webp',
      '/images/gallery/is4c/realstagram_postp_00939_.webp',
      '/images/gallery/is4c/realstagram_postp_01228_.webp',
      '/images/gallery/is4c/realstagram_postp_01257_.webp',
    ],
  },
  {
    name: 'Various Generations',
    description: 'Random human generations from custom workflows',
    images: [
      '/images/gallery/random/a.webp',
      '/images/gallery/random/ComfyUI_01569_.webp',
      '/images/gallery/random/realstagram_postp_01021_.webp',
      '/images/gallery/random/realstagram_postp_01092_.webp',
      '/images/gallery/random/realstagram_postp_01161_.webp',
      '/images/gallery/random/realstagram_postp_01197_.webp',
      '/images/gallery/random/realstagram_postp_01541_.webp',
    ],
  },
]

export default function GalleryPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tighter mb-4">Gallery</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        All images are AI-generated using my custom ComfyUI workflows and LoRA
        models trained with{' '}
        <a
          href="https://github.com/ostris/ai-toolkit"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600"
        >
          ai-toolkit
        </a>
        . Each character is a unique LoRA I trained from scratch.
      </p>

      <div className="mb-12">
        <h2 className="text-xl font-semibold tracking-tighter mb-3">
          ControlNet Example
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Depth map conditioning used to guide the generation process.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/controlnet/depthmap.webp"
              alt="Depth map input"
              width={600}
              height={800}
              className="rounded-lg object-cover aspect-[3/4]"
            />
            <p className="text-xs text-neutral-500 mt-2 text-center">
              Depth map input
            </p>
          </div>
          <div>
            <Image
              src="/images/controlnet/generated.webp"
              alt="Generated output"
              width={600}
              height={800}
              className="rounded-lg object-cover aspect-[3/4]"
            />
            <p className="text-xs text-neutral-500 mt-2 text-center">
              Generated output
            </p>
          </div>
        </div>
      </div>

      {characters.map((character) => (
        <div key={character.name} className="mb-12">
          <h2 className="text-xl font-semibold tracking-tighter mb-1">
            {character.name}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {character.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {character.images.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`${character.name} generation`}
                width={400}
                height={500}
                className="rounded-lg object-cover aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
