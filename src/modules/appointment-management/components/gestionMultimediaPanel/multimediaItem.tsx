import { Card } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type MultimediaItemProps = {
  id: string | number;
  title: string;
  type: string;
  duration: number;
  onDelete: (id: string | number) => void;
  isPendingDelete: boolean; // Nuevo prop
};

const MultimediaItem = ({
  id,
  title,
  type,
  duration,
  onDelete,
  isPendingDelete,
}: MultimediaItemProps) => {
  if (isPendingDelete) return null; // Ocultar el ítem si está marcado para eliminar

  return (
    <Card className="p-4 my-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="text-base font-normal text-black">{title}</p>
          <p className="text-xs font-normal text-zinc-500">
            {type} • {duration}s
          </p>
        </div>
        <button onClick={() => onDelete(id)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="text-pink-600 hover:text-pink-800"
          />
        </button>
      </div>
    </Card>
  );
};

export default MultimediaItem;