import React, { Suspense } from "react";
import { Personalization, Slot } from "@croct/plug-react";
import { Link } from "react-router-dom";

import HomeBanner from "../../components/HomeBanner";

import "./styles.css";

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
    <Suspense fallback="✨ Personalizing...">
      <Personalization expression="user's persona is 'marketer'">
        {(isMarketer: boolean) =>
          isMarketer ? (
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
