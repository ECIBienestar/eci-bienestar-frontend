import './App.css'
import Card from "./modules/appointment-management/components/confirmation/Card/Card.tsx";
import Form from "./modules/appointment-management/components/request/Form.tsx";
import GestionPanel from "./modules/appointment-management/components/gestionPanel/gestionPanel.tsx";

function App() {
  return (
    <>
      <Card 
        themeColor="psychology" 
        patientName="John Doe" 
        speciality="Cardiology" 
        date="2023-10-01" 
      />
      <Form/>
      <GestionPanel/>
    </>
  )
}

export default App
