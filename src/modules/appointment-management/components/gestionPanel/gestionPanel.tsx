import {
  Card,
  CardBody,
  CardHeader,
  Form as FormHero,
  Switch,
  Tab,
  Tabs,
  Alert,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { specialties } from "@appointment-management/data/specialties";

const GestionPanel = () => {
  const [availability, setAvailability] = useState(
    Object.fromEntries(specialties.map((s) => [s.key, true]))
  );

  const [availabilityShifts, setAvailabilityShifts] = useState(true);

  const handleToggleShifts = () => {
    setAvailabilityShifts((prev) => !prev);
  };

  const handleToggle = (key: string) => {
    setAvailability((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Card className="p-5">
        <CardHeader className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold max-sm:text-2xl">
            Panel de administrador
          </h1>
          <p className="text-xs font-normal text-zinc-500">
            Gestion de disponibilidad de turnos
          </p>
        </CardHeader>
        <Tabs aria-label="Options" fullWidth>
          <Tab key="speciality" title="Especialidad">
            <Card>
              <CardHeader className="flex flex-col items-start gap-2">
                <p className="text-l">
                  Gestion de disponibilidad por especialidad
                </p>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <FormHero
                  className="flex flex-col gap-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  {specialties.map((speciality) => {
                    const isAvailable =
                      availabilityShifts && availability[speciality.key];
                    return (
                      <div
                        key={speciality.key}
                        className="w-full flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          {isAvailable ? (
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="text-green-500"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              className="text-red-500"
                            />
                          )}
                          <span>{speciality.label}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">
                            {isAvailable ? "Disponible" : "No disponible"}
                          </span>
                          <Switch
                            color="danger"
                            isSelected={isAvailable}
                            aria-label={speciality.label}
                            checked={availability[speciality.key]}
                            onChange={() => handleToggle(speciality.key)}
                            isDisabled={!availabilityShifts}
                          />
                        </div>
                      </div>
                    );
                  })}
                  {availabilityShifts ? (
                    <></>
                  ) : (
                    <Alert
                      color="warning"
                      className="w-full"
                      description="La gestión de disponibilidad esta desabilitada. Habilite los turnos para poder gestionar la disponibilidad."
                    />
                  )}
                </FormHero>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="shifts" title="Turnos">
            <Card>
              <CardHeader className="flex flex-col items-start gap-2">
                {availabilityShifts ? (
                  <Alert
                    color="success"
                    className="w-full my-5"
                    title="Turnos habilitados"
                    description="Todos los turnos estan habilitados. Puede gestionar la disponibilidad de cada especialidad."
                  />
                ) : (
                  <Alert
                    color="danger"
                    className="w-full my-2"
                    title="Turnos deshabilitados"
                    description="Todos los turnos estan deshabilitados. No se puede gestionar la disponibilidad de cada especialidad."
                  />
                )}
                <Button
                className="w-full my-2"
                color={availabilityShifts ? "success" : "danger"}
                onPress={handleToggleShifts}
                children={availabilityShifts ? "Deshabilitar turnos" : "Habilitar turnos"} 
                />
              </CardHeader>
            </Card>
          </Tab>
        </Tabs>
      </Card>
    </>
  );
};

export default GestionPanel;
