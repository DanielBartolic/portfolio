import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'AI image generation projects, LoRA training, and full-stack applications.',
}

const projects = [
  {
    title: 'realstagram.ai',
    description:
      'Production SaaS for AI image generation. Full-stack Next.js app with Supabase auth, Stripe billing, Cloudflare R2 storage, and multiple AI generation endpoints deployed on RunPod serverless.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'RunPod', 'ComfyUI', 'Cloudflare R2'],
    link: 'https://realstagram.ai',
    linkText: 'realstagram.ai',
  },
  {
    title: 'Custom LoRA Training Pipeline',
    description:
      'End-to-end pipeline for training character and style LoRAs using ai-toolkit. Includes dataset preparation, training configuration, and deployment to ComfyUI workflows for production use.',
    tags: ['ai-toolkit', 'LoRA', 'Flux', 'ComfyUI', 'Python'],
    link: 'https://huggingface.co/diobrando0',
    linkText: 'huggingface.co/diobrando0',
  },
  {
    title: 'ComfyUI Production Workflows',
    description:
      'Advanced ComfyUI workflow designs for human image generation — including text-to-image, image-to-image, ControlNet conditioning, and upscaling pipelines. Deployed as serverless endpoints.',
    tags: ['ComfyUI', 'ControlNet', 'Docker', 'RunPod', 'Vast.ai'],
  },
  {
    title: 'AI Instagram Account',
    description:
      'Fully AI-generated Instagram account showcasing character generations from my custom LoRA models and ComfyUI workflows.',
    tags: ['ComfyUI', 'LoRA', 'Flux', 'Stable Diffusion'],
    link: 'https://www.instagram.com/sunii11_miaww/',
    linkText: '@sunii11_miaww',
  },
  {
    title: 'ComfyUI-Qwen3.5',
    description:
      'Custom ComfyUI nodes for integrating Qwen 3.5 directly into ComfyUI workflows. Enables LLM-powered prompt generation and text processing within image generation pipelines.',
    tags: ['ComfyUI', 'Qwen 3.5', 'Python', 'Custom Nodes'],
    link: 'https://github.com/DanielBartolic/ComfyUI-Qwen3.5',
    linkText: 'github.com/DanielBartolic/ComfyUI-Qwen3.5',
  },
  {
    title: 'Pinterest Scraper',
    description:
      'Tool for scraping images from Pinterest — used for building LoRA training datasets and collecting reference images for AI generation workflows.',
    tags: ['Python', 'Scraping', 'Dataset Preparation'],
    link: 'https://github.com/DanielBartolic/pinterest-scraper',
    linkText: 'github.com/DanielBartolic/pinterest-scraper',
  },
  {
    title: 'Model Deployment Infrastructure',
    description:
      'Docker images and serverless deployment configs for running any open-source model on RunPod/Vast.ai. Includes cold start optimization, webhook handlers, and multi-endpoint architecture.',
    tags: ['Docker', 'RunPod', 'Vast.ai', 'vLLM', 'llama.cpp'],
  },
  {
    title: 'Bernstein Polynomials',
    description:
      'University seminar work at FMF Ljubljana. Bernstein polynomials are a family of polynomials used to uniformly approximate any continuous function on a closed interval — the core proof behind the Weierstrass approximation theorem. They are also the mathematical foundation of Bézier curves, which power all modern vector graphics, SVG rendering, and font design.',
    tags: ['Mathematics', 'Approximation Theory', 'Bézier Curves', 'FMF Ljubljana'],
  },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tighter mb-4">Projects</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        From training LoRA models to deploying full-stack AI applications.
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {project.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
