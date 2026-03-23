import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE_URL = "https://www.thetaclock.com";
const SHARE_IMAGE = `${SITE_URL}/share-image.png`;

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const url = `${SITE_URL}${path === "/" ? "" : path}/`;
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SHARE_IMAGE} />
      <meta property="og:url" content={url || canonical} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SHARE_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;
