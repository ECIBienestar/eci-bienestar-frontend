import {
  Card,
  CardBody,
  CardHeader,
  Form as FormHero,
  Tab,
  Tabs,
  Alert,
  CheckboxGroup,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const GestionMultimediaPanel = () => {
  const [selectedDuration, setSelectedDuration] = useState("8");

  return (
    <Card className="p-5">
      <CardHeader className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          Panel de administracion
        </h1>
        <p className="text-xs font-normal text-zinc-500">
          Gestione el contenido multimedia
        </p>
      </CardHeader>

      <Tabs aria-label="Options" fullWidth>
        <Tab key="addMedia" title="Agregar">
          <Card>
            <CardBody className="flex flex-col gap-4">
              <FormHero className="flex flex-col gap-8">
                <CheckboxGroup
                  isRequired
                  label="Tipo de contenido"
                  classNames={{
                    label: "text-black text-sm",
                    wrapper:
                      "flex flex-row gap-8 max-md:!flex-col max-md:!gap-4",
                  }}
                >
                  <Checkbox value="image">Imagen</Checkbox>
                  <Checkbox value="video">Video</Checkbox>
                </CheckboxGroup>

                <Input
                  isRequired
                  label="Titulo"
                  labelPlacement="outside"
                  placeholder="Titulo del contenido"
                  type="text"
                />
                <Input
                  isRequired
                  label="URL del contenido"
                  labelPlacement="outside"
                  placeholder="URL de la imagen o video"
                  type="text"
                />

                <Select
                  className="max-w"
                  label="Duración (segundos)"
                  labelPlacement="outside"
                  placeholder="Seleccione la duración"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  {Array.from({ length: 7 }, (_, i) => (i + 1) * 2).map(
                    (item) => (
                      <SelectItem
                        key={item}
                        textValue={item.toString() + " segundos"}
                        id={item.toString()}
                      >
                        {item} segundos
                      </SelectItem>
                    )
                  )}
                </Select>

                <Button
                  className="w-full my-2 bg-health-primary text-white"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faUpload} /> Agregar contenido
                </Button>
              </FormHero>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="deleteMedia" title="Eliminar">
          <Card>
            <CardBody className="flex flex-col gap-4">
              <FormHero className="flex flex-col gap-8">
                
              </FormHero>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default GestionMultimediaPanel;
