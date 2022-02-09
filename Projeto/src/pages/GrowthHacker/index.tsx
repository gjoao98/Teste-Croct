import { Personalization, Slot } from "@croct/plug-react";
import React, { Suspense } from "react";

import "./styles.css";

type HomeBanner = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

export const GrowthHacker: React.FC = () => {
  return (
    <Suspense fallback="✨ Personalizing...">
      <Personalization expression="user's persona is 'growth-hacker'">
        {(isGrowthHacker: boolean) =>
          isGrowthHacker ? (
            <Suspense fallback="✨ Personalizing content...">
              <Slot id="home-banner">
                {({ title, subtitle, cta }: HomeBanner) => (
                  <div className="container">
                    <div className="content">
                      <strong>{title}</strong>
                      <p>{subtitle}</p>
                      <button className="button">
                        <a href={cta.link}>{cta.label}</a>
                      </button>
                    </div>
                  </div>
                )}
              </Slot>
            </Suspense>
          ) : (
            <a href="/share"> Compartilhe com seu desenvolvedor </a>
          )
        }
      </Personalization>
    </Suspense>
  );
};
