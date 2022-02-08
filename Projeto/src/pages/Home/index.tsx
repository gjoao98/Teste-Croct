import { ReactElement, Suspense } from "react";
import { Personalization, Slot } from "@croct/plug-react";
import { Link } from "react-router-dom";

import HomeBanner from "../../components/HomeBanner";
import Layout from "../../components/Layout";
import PersonaSelector from "../../components/PersonaSelector";

export function Home() {
  return (
    <div>
      <Layout>
        <h1>Selecione sua função</h1>
      </Layout>
    </div>
  );
}
