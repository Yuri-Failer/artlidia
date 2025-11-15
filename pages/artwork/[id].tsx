import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '@/types/artwork';
import artworksData from '@/data/artworks.json';

interface ArtworkPageProps {
  artwork: Artwork;
}

export default function ArtworkPage({ artwork }: ArtworkPageProps) {
  return (
    <>
      <Head>
        <title>{artwork.title} | Artlidia</title>
        <meta name="description" content={artwork.description || `${artwork.title} - ${artwork.technique}`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/gallery"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Gallery
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {artwork.title}
                </h1>

                <div className="space-y-3 text-lg">
                  <div className="flex items-baseline">
                    <span className="font-semibold text-gray-700 w-32">Year:</span>
                    <span className="text-gray-900">{artwork.year}</span>
                  </div>

                  <div className="flex items-baseline">
                    <span className="font-semibold text-gray-700 w-32">Technique:</span>
                    <span className="text-gray-900">{artwork.technique}</span>
                  </div>

                  <div className="flex items-baseline">
                    <span className="font-semibold text-gray-700 w-32">Dimensions:</span>
                    <span className="text-gray-900">{artwork.dimensions}</span>
                  </div>

                  {artwork.frame && (
                    <div className="flex items-baseline">
                      <span className="font-semibold text-gray-700 w-32">Frame:</span>
                      <span className="text-gray-900 capitalize">{artwork.frame}</span>
                    </div>
                  )}
                </div>
              </div>

              {artwork.description && (
                <div className="pt-6 border-t border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = artworksData.map((artwork) => ({
    params: { id: artwork.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArtworkPageProps> = async ({ params }) => {
  const artwork = artworksData.find((art) => art.id === params?.id);

  if (!artwork) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artwork: artwork as Artwork,
    },
  };
};
