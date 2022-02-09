import { ReactElement, Suspense } from "react";
import PersonaSelector from "../../components/PersonaSelector";

import "./styles.css";

export function Default() {
  return (
    <div className="content">
      <h1>Qual sua função entre Developer, Marketer ou Growth Hacker?</h1>
      <h2>Selecione uma delas para ter maiores informações.</h2>

      <PersonaSelector />
    </div>
  );
}
