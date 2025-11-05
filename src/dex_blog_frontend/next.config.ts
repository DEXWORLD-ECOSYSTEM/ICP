import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // <--- Linha ESSENCIAL adicionada:
  output: 'export',

  // Opcional: Desabilitar o carregador de imagens padrão para SSG
  images: {
    unoptimized: true,
  },

  // Opcional: Configurações de compilador se necessário
  // compiler: {
  //   styledComponents: true,
  // },
};

export default nextConfig;