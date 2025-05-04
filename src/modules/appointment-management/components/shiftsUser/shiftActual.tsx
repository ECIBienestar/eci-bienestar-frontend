import { Card, CardHeader, CardBody } from "@heroui/react";

type ShiftsListProps = {
  children?: React.ReactNode;
};

const shiftActual = ({ children }: ShiftsListProps) => {
  return (
    <Card>
      <CardHeader
        className="px-4 flex-col items-start text-white rounded-t-xl"
        style={{
          background: "linear-gradient(to right, #00BCFF, #0078B4)",
        }}
      >
        <h4 className="font-bold text-large">Atendiendo ahora</h4>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default shiftActual;
