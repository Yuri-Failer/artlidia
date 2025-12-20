import { GetStaticProps } from 'next';
import Head from 'next/head';
import ArtworkCard from '@/components/ArtworkCard';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/types/artwork';

interface GalleryProps {
  artworks: Artwork[];
}

export default function Gallery({ artworks }: GalleryProps) {
  return (
    <>
      <Head>
        <title>Gallery | Artlidia</title>
        <meta name="description" content="Browse our collection of artworks" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
            <p className="mt-2 text-gray-600">Explore our collection of artworks</p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Masonry Grid Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1.5rem]">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="mb-6 [break-inside:avoid]">
                <ArtworkCard artwork={artwork} />
              </div>
            ))}
          </div>

          {artworks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No artworks available yet.</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  return {
    props: {
      artworks: artworksData as Artwork[],
    },
  };
};
