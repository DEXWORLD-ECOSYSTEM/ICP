
import { Post } from './types';

export const videos: Post[] = [
  {
    id: '1',
    title: 'Sábado tem dia abafado e com chance de chuvas | AGORA CNN',
    slug: 'video-1',
    excerpt: 'Previsão do tempo para o fim de semana.',
    imageUrl: '/images/ads/ad-vertical1.png',
    author: { id: '1', name: 'CNN Brasil' },
    category: { id: '1', name: 'Notícias' },
    tags: [{ id: '1', name: 'Previsão do Tempo' }],
    publishedAt: '2024-07-27T10:00:00.000Z',
    content: '',
  },
  {
    id: '2',
    title: 'Governo Federal gasta R$ 500 mil em postagens sobre segurança após operação no RJ | AGORA CNN',
    slug: 'video-2',
    excerpt: 'Análise dos gastos do governo em publicidade.',
    imageUrl: '/images/ads/ad-vertical2.png',
    author: { id: '1', name: 'CNN Brasil' },
    category: { id: '1', name: 'Notícias' },
    tags: [{ id: '2', name: 'Política' }],
    publishedAt: '2024-07-27T11:00:00.000Z',
    content: '',
  },
  {
    id: '3',
    title: 'À CNN, agência da ONU diz que falta tudo em Gaza, mas que fome é reversível | AGORA CNN',
    slug: 'video-3',
    excerpt: 'Situação humanitária em Gaza.',
    imageUrl: '/images/ads/ad-vertical3.png',
    author: { id: '1', name: 'CNN Brasil' },
    category: { id: '1', name: 'Notícias' },
    tags: [{ id: '3', name: 'Mundo' }],
    publishedAt: '2024-07-27T12:00:00.000Z',
    content: '',
  },
    {
    id: '4',
    title: 'Argentina prende brasileiros na fronteira e investiga se há ligação com CV | BOLETIM CNN',
    slug: 'video-4',
    excerpt: 'Investigação sobre crime na fronteira.',
    imageUrl: '/images/ads/ad-vertical4.png',
    author: { id: '1', name: 'CNN Brasil' },
    category: { id: '1', name: 'Notícias' },
    tags: [{ id: '4', name: 'Internacional' }],
    publishedAt: '2024-07-27T13:00:00.000Z',
    content: '',
  },
  {
    id: '5',
    title: 'Lula desembarca em Belém neste sábado (1°) | AGORA CNN',
    slug: 'video-5',
    excerpt: 'Agenda do presidente no Pará.',
    imageUrl: '/images/ads/ad-vertical5.png',
    author: { id: '1', name: 'CNN Brasil' },
    category: { id: '1', name: 'Notícias' },
    tags: [{ id: '2', name: 'Política' }],
    publishedAt: '2024-07-27T14:00:00.000Z',
    content: '',
  },
];

export const getVideos = () => {
  return videos;
};
