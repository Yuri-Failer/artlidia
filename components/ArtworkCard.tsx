import Link from 'next/link';
import Image from 'next/image';
import { Artwork } from '@/types/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={`/artwork/${artwork.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {artwork.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {artwork.year}
        </p>
        <p className="text-sm text-gray-500">
          {artwork.technique}
        </p>
        {artwork.dimensions && (
          <p className="text-xs text-gray-400 mt-1">
            {artwork.dimensions}
          </p>
        )}
      </div>
    </Link>
  );
}
