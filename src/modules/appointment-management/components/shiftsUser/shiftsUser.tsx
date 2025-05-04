import InstitutionalInfo from "./institutionalInfo";
import ShiftActual from "./shiftActual";
import ShiftsList from "./shiftsList";
import { InfoCardItem } from "@appointment-management/components/InfoCardItem";

type shiftItem = {
  id: number;
  turn: string;
  namePatient: string;
  specialty: "Medicina general" | "Psicologia" | "Odontologia";
};

type CarroselItem = {
  type: "image" | "video";
  title: string;
  duration: number;
  url: string;
};

type shiftActualProps = {
  shitftItems: shiftItem[];
  carroselItems: CarroselItem[];
};

const getTitleClassName = (specialty: shiftItem["specialty"]) => {
  const baseClasses = "font-semibold text-lg";
  switch (specialty) {
    case "Medicina general":
      return `${baseClasses} text-health-medicine-primary`;
    case "Psicologia":
      return `${baseClasses} text-health-psychology-primary`;
    case "Odontologia":
      return `${baseClasses} text-health-primary`;
    default:
      return baseClasses;
  }
};

const ShiftsUser = ({ shitftItems, carroselItems }: shiftActualProps) => {
  const [firstShift, ...otherShifts] = shitftItems;

  return (
    <div className="px-6 py-4">
      <div className="w-full h-full flex flex-row gap-4">
        <div className="flex-[2]">
          <ShiftsList>
            {otherShifts.map((shift) => (
              <InfoCardItem
                key={shift.id}
                id={shift.id}
                title={shift.turn}
                titleClassName={getTitleClassName(shift.specialty)}
                subtitle={shift.namePatient}
              >
                <p className="text-zinc-400">{shift.specialty}</p>
              </InfoCardItem>
            ))}
          </ShiftsList>
        </div>

        <div className="flex-[3] flex flex-col gap-4 h-full">
          <ShiftActual>
            {firstShift && (
              <InfoCardItem
                key={firstShift.id}
                id={firstShift.id}
                title={firstShift.turn}
                titleClassName={getTitleClassName(firstShift.specialty)}
                subtitle={firstShift.namePatient}
              >
                <p className="text-zinc-400">{firstShift.specialty}</p>
              </InfoCardItem>
            )}
          </ShiftActual>

          <InstitutionalInfo carroselItems={carroselItems} />
        </div>
      </div>
    </div>
  );
};

export default ShiftsUser;
