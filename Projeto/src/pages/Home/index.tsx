import { Personalization, useEvaluation } from "@croct/plug-react";
import { Fragment, ReactElement, Suspense } from "react";

import logo from "../../components/Layout/logo.svg";
import PersonaSelector from "../../components/PersonaSelector";

import { Default } from "../Default";
import { Developer } from "../Developer";
import { GrowthHacker } from "../GrowthHacker";
import { Marketer } from "../Marketer";

import "./styles.css";

const developer = "user's persona is 'developer'";
const marketer = "user's persona is 'marketer'";
const growthHacker = "user's persona is 'growth-hacker'";
const fallbackHome = "user's persona is 'default'";

export function Home() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <a href="/" className="logo">
          <img src={logo} title="Croct" alt="Croct" />
        </a>
        <PersonaSelector />
      </nav>

      <div>
        <Suspense fallback="✨ Personalizing...">
          <Personalization
            expression={developer}
            fallback={true}
            initial={false}
          >
            {(isDeveloper: boolean) => <>{isDeveloper && <Developer />}</>}
          </Personalization>
        </Suspense>

        <Suspense fallback="✨ Personalizing...">
          <Personalization
            expression={marketer}
            fallback={true}
            initial={false}
          >
            {(isMarketer: boolean) => <>{isMarketer && <Marketer />}</>}
          </Personalization>
        </Suspense>

        <Suspense fallback="✨ Personalizing...">
          <Personalization
            expression={growthHacker}
            fallback={true}
            initial={false}
          >
            {(isGrowthHacker: boolean) => (
              <>{isGrowthHacker && <GrowthHacker />}</>
            )}
          </Personalization>
        </Suspense>

        <Suspense fallback="✨ Personalizing...">
          <Personalization expression={fallbackHome}>
            {(isDefault: boolean) => (
              <>{true && <Default />}</>
            )}
          </Personalization>
        </Suspense>
      </div>
    </div>
  );
}
