import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({
  title = 'The Game Changer Books - Libros Gratuitos para Emprendedores',
  description = 'Accede a nuestra colección de libros gratuitos sobre emprendimiento, marketing y desarrollo personal. Transforma tu vida y tu negocio con nuestras estrategias probadas.',
  keywords = 'libros gratuitos, emprendimiento, marketing, desarrollo personal, estrategias de negocio',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://www.thegamechangerbooks.com',
}: SEOProps) {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
} 