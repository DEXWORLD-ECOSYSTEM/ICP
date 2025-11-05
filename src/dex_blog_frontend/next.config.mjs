// /home/sandro/ICP/dex_blog/src/dex_blog_frontend/next.config.mjs

import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 CHAVE ESSENCIAL PARA O ICP:
  // Define o output como exportação estática, permitindo que o frontend rode em um Canister.
  output: 'export',

  // Configurações existentes
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    // Atenção: ignoreBuildErrors: true é aceitável durante a migração, mas deve ser removido depois.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Configurações de domínio para imagens remotas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Garante que o build estático funcione corretamente com o Next.js 16/17+
  experimental: {
    optimizePackageImports: [
      '@/components/ui',
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);