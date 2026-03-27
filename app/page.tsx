import Image from 'next/image'

const techStack = [
  { name: 'ComfyUI', logo: '/logos/comfyui.webp' },
  { name: 'Stable Diffusion', logo: '/logos/stablediffusion.svg' },
  { name: 'Flux', logo: '/logos/flux.svg' },
  { name: 'Gemini', logo: '/logos/gemini.svg' },
  { name: 'Qwen', logo: '/logos/qwen.png' },
  { name: 'ByteDance', logo: '/logos/bytedance.svg' },
  { name: 'Kling', logo: '/logos/kling.jpg' },
  { name: 'Hugging Face', logo: '/logos/huggingface.svg' },
  { name: 'AI Toolkit', logo: '/logos/ai-toolkit.jpg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'RunPod', logo: '/logos/runpod.svg' },
  { name: 'Vast.ai', logo: '/logos/vastai.svg' },
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Supabase', logo: '/logos/supabase.svg' },
  { name: 'Stripe', logo: '/logos/stripe.svg' },
  { name: 'Cloudflare', logo: '/logos/cloudflare.svg' },
  { name: 'Vercel', logo: '/logos/vercel.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'Linux', logo: '/logos/linux.svg' },
  { name: 'HTML', logo: '/logos/html5.svg' },
  { name: 'CSS', logo: '/logos/css3.svg' },
  { name: 'llama.cpp', logo: '/logos/llama.png' },
  { name: 'vLLM', logo: '/logos/vllm.png' },
  { name: 'KoboldCpp', logo: '/logos/koboldcpp.png' },
]

const featuredImages = [
  { src: '/images/gallery/a1da/ComfyUI_00645_.webp', alt: 'AI generated character — a1da' },
  { src: '/images/gallery/is4c/is4c_new2_cn_img07_postp_00001_.webp', alt: 'AI generated character — is4c' },
  { src: '/images/gallery/random/a.webp', alt: 'AI generated portrait' },
  { src: '/images/gallery/random/prompt_08.webp', alt: 'AI generated portrait' },
]

export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <Image
          src="/images/profile.webp"
          alt="Daniel Bartolic"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tighter mb-4">
            Daniel Bartolic
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 mb-2">
            AI Image Generation Expert & Full-Stack Developer
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            22 · Ljubljana / Koper, Slovenia
          </p>
        </div>
      </div>

      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        I specialize in deploying open-source AI models to production. I can take any
        open-source model available and deploy it to a serverless API — with deep hands-on experience
        in models like <strong>Qwen Image 2512</strong>, <strong>Flux</strong>, <strong>Z-Image</strong>,
        {' '}<strong>Wan 2.2</strong> for image and video generation, and <strong>Qwen 3.5</strong> for
        custom LLM chatbots. I build end-to-end pipelines from model weights to
        production endpoints using ComfyUI, vLLM, and llama.cpp — and optimize
        results by combining multiple endpoints to get the best quality at the lowest cost.
      </p>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        With a background in pure mathematics from the University of Ljubljana,
        I moved into AI full-time — and am currently building{' '}
        <a href="https://realstagram.ai" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600">
          realstagram.ai
        </a>
        , a SaaS platform for AI image generation.
      </p>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Every character I create is a custom-trained LoRA model. I design end-to-end
        pipelines from model training through ComfyUI workflows to serverless
        deployment on RunPod and Vast.ai. I also run an{' '}
        <a href="https://www.instagram.com/sunii11_miaww/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600">
          AI Instagram account
        </a>
        {' '}showcasing my workflow outputs.
      </p>

      <h2 className="text-xl font-semibold tracking-tighter mb-6">Featured Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {featuredImages.map((img) => (
          <a key={img.src} href="/gallery" className="block overflow-hidden rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={500}
              className="object-cover aspect-[3/4] hover:scale-105 transition-transform duration-300"
            />
          </a>
        ))}
      </div>

      <h2 className="text-xl font-semibold tracking-tighter mb-6">Tech Stack</h2>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-12">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain dark:invert-0 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 text-center leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold tracking-tighter mb-6">Education</h2>
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-4">
          <Image src="/logos/fmf.png" alt="FMF" width={48} height={48} className="shrink-0" />
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              Faculty of Mathematics and Physics, University of Ljubljana
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Undergraduate Program in Pure Mathematics — 4 years
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/logos/ers.svg" alt="ERS" width={48} height={48} className="shrink-0" />
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              ERS — High School
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Computer Science Diploma
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
