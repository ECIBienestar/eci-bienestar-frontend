import ShiftsUser from "./modules/appointment-management/components/shiftsUser/shiftsUser";

// Tipo compartido para evitar duplicación
type ShiftItem = {
  id: number;
  turn: string;
  namePatient: string;
  specialty: "Medicina general" | "Psicologia" | "Odontologia";
};

const App = () => {
  const carroselItems: { type: "image" | "video"; title: string; duration: number; url: string }[] = [
    {
      type: "image",
      title: "Programa de bienestar",
      duration: 4,
      url: "https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566_1280.jpg",
    },
    {
      type: "image",
      title: "Programa de salud mental",
      duration: 3,
      url: "https://cdn.pixabay.com/photo/2017/10/07/14/55/depression-2826711_1280.jpg",
    },
    {
      type: "image",
      title: "Programa de odontología",
      duration: 4,
      url: "https://cdn.pixabay.com/photo/2015/03/11/05/03/dentistry-668191_1280.jpg",
    },
  ];

  const shitftItems: ShiftItem[] = [
    {
      id: 1,
      turn: "M-43",
      namePatient: "María González",
      specialty: "Medicina general",
    },
    {
      id: 2,
      turn: "P-17",
      namePatient: "Carlos Pérez",
      specialty: "Psicologia",
    },
    {
      id: 3,
      turn: "O-12",
      namePatient: "Lucía Fernández",
      specialty: "Odontologia",
    },
    {
      id: 4,
      turn: "P-215",
      namePatient: "Juan Ramírez",
      specialty: "Psicologia",
    },
  ];

  return (
    <div className="p-4 h-screen w-screen bg-gray-100">
      <ShiftsUser carroselItems={carroselItems} shitftItems={shitftItems} />
    </div>
  );
};

export default App;
