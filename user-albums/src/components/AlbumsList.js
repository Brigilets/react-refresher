import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";

import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  // if we call the same hook twice with the same data RTK makes only 1 request
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation(user);

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} user={user} />;
    });
  }
  const handleAddAlbum = () => {
    addAlbum(user);
  };
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums By {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + New Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
