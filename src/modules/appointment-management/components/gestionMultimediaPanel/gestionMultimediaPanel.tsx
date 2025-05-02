import {
  Card,
  CardBody,
  CardHeader,
  Form as FormHero,
  Tab,
  Tabs,
  CheckboxGroup,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import MultimediaItem from "./multimediaItem";

const items = [
  { id: 1, name: "Elemento 1" },
  { id: 2, name: "Elemento 2" },
];

const GestionMultimediaPanel = () => {
  const [selectedDuration, setSelectedDuration] = useState("8");
  const [list, setList] = useState(items);
  const [pendingDelete, setPendingDelete] = useState<Set<number>>(new Set());

  interface Item {
    id: number;
    name: string;
  }

  // Marcar un ítem para eliminar
  const handleDelete = (id: string | number): void => {
    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    setPendingDelete((prev) => new Set(prev.add(numericId)));
  };

  // Eliminar permanentemente los ítems marcados
  const handleSaveChanges = () => {
    setList((prev) => prev.filter((item) => !pendingDelete.has(item.id)));
    setPendingDelete(new Set()); // Limpiar el estado de eliminación temporal
  };

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
            <CardBody>
              {list.map((item) => (
                <MultimediaItem
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  type="Imagen"
                  duration={8}
                  onDelete={handleDelete}
                  isPendingDelete={pendingDelete.has(item.id)} // Añadir prop para mostrar oculto
                />
              ))}
              <Button
                className="w-full my-2 bg-health-primary text-white"
                type="button"
                onClick={handleSaveChanges}
              >
                <FontAwesomeIcon icon={faFloppyDisk} /> Guardar cambios
              </Button>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default GestionMultimediaPanel;
