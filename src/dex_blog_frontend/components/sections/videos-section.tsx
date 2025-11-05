import { getVideos } from '@/lib/videos-data';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export const VideosSection = () => {
  const videos = getVideos();

  return (
    <section className="my-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline text-3xl font-bold">Vídeos.</h2>
          <Link href="#" className="text-primary hover:underline font-semibold flex items-center">
            Ver mais vídeos 
            <span className='ml-2'>&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="h-full group">
              <Card className="overflow-hidden shadow-glow h-full">
                <Link href={`/videos/${video.slug}`}>
                  <div className="relative h-40">
                    <Image
                      src={video.imageUrl}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-40">
                      <svg className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </div>
    </section>
  );
};
