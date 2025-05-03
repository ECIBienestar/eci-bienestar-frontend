import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import InfoCardItem from "../InfoCardItem/InfoCardItem";

const MediaList = ({
  list,
  pendingDelete,
  handleDelete,
}: {
  list: Array<{ id: number; name: string; type: string; duration: number }>;
  pendingDelete: Set<number>;
  handleDelete: (id: number) => void;
}) => {
  return (
    <>
      {list
        .filter((item) => !pendingDelete.has(item.id))
        .map((item) => (
          <InfoCardItem
            key={item.id}
            id={item.id}
            title={item.name}
            subtitle={`${item.type} • ${item.duration}s`}
          >
            <button onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-pink-600 hover:text-pink-800"
              />
            </button>
          </InfoCardItem>
        ))}
    </>
  );
};

export default MediaList;
