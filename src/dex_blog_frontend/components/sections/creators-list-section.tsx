import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';

const creators = [
  {
    name: 'Creator 1',
    postTitle: 'Post title 1',
    avatarUrl: '/images/creators/1.jpg',
    postUrl: '#',
  },
  {
    name: 'Juca Kfouri',
    postTitle: 'O golpe em gestação no Santos',
    avatarUrl: '/images/creators/2.png',
    postUrl: '#',
  },
  {
    name: 'Paulo Camargo',
    postTitle: 'Você é pago para errar; só acerte mais do que erre',
    avatarUrl: '/images/creators/3.png',
    postUrl: '#',
  },
  {
    name: 'TixaNews',
    postTitle: "\'O que de errado temos feito?\', pergunta Gilmar",
    avatarUrl: '/images/creators/4.png',
    postUrl: '#',
  },
  {
    name: 'Milly Lacombe',
    postTitle: 'Paulistão feminino oferece futebol de alto nível',
    avatarUrl: '/images/creators/5.png',
    postUrl: '#',
  },
  {
    name: 'Creator 6',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/6.png',
    postUrl: '#',
  },
  {
    name: 'Creator 7',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/7.png',
    postUrl: '#',
  },
  {
    name: 'Creator 8',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/8.png',
    postUrl: '#',
  },
  {
    name: 'Creator 9',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/9.png',
    postUrl: '#',
  },
  {
    name: 'Creator 10',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/10.png',
    postUrl: '#',
  },
  {
    name: 'Creator 11',
    postTitle: 'Another post title',
    avatarUrl: '/images/creators/11.png',
    postUrl: '#',
  },
];

export function CreatorsListComponent() {
  return (
    <section className="my-12">
      <h2 className="font-headline text-3xl font-bold mb-8 text-center text-foreground">Nossos Criadores</h2>
      <div className="shadow-glow border border-border rounded-lg px-4 py-6 md:p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          autoplay
          autoplayDelay={5000}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {creators.map((creator, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 group">
                <Link 
                  href={creator.postUrl} 
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-muted"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-16 w-16 rounded-lg object-cover"
                      src={creator.avatarUrl}
                      alt={creator.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex h-16 flex-col justify-center overflow-hidden">
                    <p className="text-sm font-bold text-foreground truncate">{creator.name}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors truncate">{creator.postTitle}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4">
            <CarouselIndicatorGroup />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
