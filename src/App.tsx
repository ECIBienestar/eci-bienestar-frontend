import './App.css'
import Layout from './modules/appointment-management/layout/layout.tsx';
import GestionMultimediaPanel from './modules/appointment-management/components/gestionMultimediaPanel/gestionMultimediaPanel.tsx';
import { RequestForm } from './modules/appointment-management/components/request/index.tsx';

function App() {
  return (
    <Layout 
    header="a" 
    body={
    <>
    <GestionMultimediaPanel />
    <RequestForm/>
    </>
    }
    >

    </Layout>
  )
}

export default App
