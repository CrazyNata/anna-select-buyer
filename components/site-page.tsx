'use client';

import { useEffect, useState } from 'react';
import {
  AcidStreetSite,
  GallerySite,
  MidnightAtelierSite,
  PlayfulSelectSite,
  PraguePostcardSite,
  QuietLuxurySite,
} from '@/components/anna-sites';
import { RequestModal, type SiteTheme } from '@/components/anna-request';

const sites = {
  quiet: QuietLuxurySite,
  midnight: MidnightAtelierSite,
  postcard: PraguePostcardSite,
  acid: AcidStreetSite,
  gallery: GallerySite,
  playful: PlayfulSelectSite,
} as const;

export function SitePage({ theme }: { theme: SiteTheme }) {
  const [requestOpen, setRequestOpen] = useState(false);
  const Site = sites[theme];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setRequestOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`route-shell route-${theme}`}>
      <Site onRequest={() => setRequestOpen(true)} />
      <RequestModal open={requestOpen} onClose={() => setRequestOpen(false)} theme={theme} />
    </div>
  );
}
