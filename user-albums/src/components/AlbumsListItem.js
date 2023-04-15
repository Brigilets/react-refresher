import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation(album);

  const handleDelete = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleDelete}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <div>
      <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />
      </ExpandablePanel>
    </div>
  );
};

export default AlbumsListItem;
