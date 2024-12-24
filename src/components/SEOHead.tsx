import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = "Super Natal - Divisão de Contas",
  description = "Divida facilmente as contas das suas compras de Natal com amigos e família. Calcule impostos e gere QR Code PIX automaticamente.",
  image = "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80",
  url = window.location.href,
}: SEOHeadProps) {
  const siteTitle = "Super Natal";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FF0000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={siteTitle} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#FF0000" />
      <meta name="msapplication-tap-highlight" content="no" />

      {/* PWA Tags */}
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}
