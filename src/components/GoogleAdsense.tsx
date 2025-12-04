import { useEffect } from 'react';

interface GoogleAdsenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export const GoogleAdsense = ({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' }
}: GoogleAdsenseProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Adsense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
    />
  );
};

// Componente para banner horizontal
export const HorizontalAd = () => (
  <div className="my-8 flex justify-center">
    <GoogleAdsense 
      adSlot="1234567890"
      adFormat="horizontal"
      style={{ display: 'block', width: '100%', maxWidth: '970px', height: '90px' }}
    />
  </div>
);

// Componente para anúncio no meio do conteúdo
export const InArticleAd = () => (
  <div className="my-6">
    <GoogleAdsense 
      adSlot="2345678901"
      adFormat="fluid"
      style={{ display: 'block', textAlign: 'center' }}
    />
  </div>
);

// Componente para sidebar
export const SidebarAd = () => (
  <div className="mb-6">
    <GoogleAdsense 
      adSlot="3456789012"
      adFormat="rectangle"
      fullWidthResponsive={false}
      style={{ display: 'block', width: '300px', height: '250px' }}
    />
  </div>
);
