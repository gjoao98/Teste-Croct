import React, { Suspense } from 'react';
import { Slot } from '@croct/plug-react';
import { Link } from 'react-router-dom';

import HomeBanner from '../../components/HomeBanner';

type HomeBanner = {
    title: string;
    subtitle: string;
    cta: {
      label: string;
      link: string;
    };
  };

export const Marketer: React.FC = () => {
  return (
    <div>
    <Suspense fallback="✨ Personalizing content...">
        <Slot id="home-banner">
            {({title, subtitle, cta}: HomeBanner) => (
                <div>
                    <strong>{title}</strong>
                    <p>{subtitle}</p>
                    <a href={cta.link}>{cta.label}</a>
                </div>
            )}
        </Slot>
    </Suspense>

    <Link to="/">
        Voltar para Home   
    </Link>
</div>
  );
}