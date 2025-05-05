import { useState } from "react";
import ShiftsPrincipal from "./modules/appointment-management/features/ShiftsPrincipal/ShiftsPrincipal";
import GestionShifts from "./modules/appointment-management/features/gestionShifts/gestionShifts";
import FormShift from "./modules/appointment-management/features/formshift/formshift";


const App = () => {
  const [vista, setVista] = useState<"principal" | "gestion" | "formShift">("principal");

  return (
    <>
      {vista === "principal" && <ShiftsPrincipal irAGestion={() => setVista("gestion")} irAFormShift={() => setVista("formShift")} />}
      {vista === "gestion" && <GestionShifts volver={() => setVista("principal")} />}
      {vista === "formShift" && <FormShift volver={() => setVista("principal")} />}
    </>
  );
};

export default App;
