import { Header } from '@/components/site/header';
import { siteContent } from '@/content/site';

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <section
        className="home-gallery"
        aria-label="Fotos do grupo e dos eventos do DJUFF"
      >
        {siteContent.homePhotos.map((photo, index) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </section>
    </main>
  );
}
