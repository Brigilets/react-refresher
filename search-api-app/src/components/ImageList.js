import { ImageShow } from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((img) => {
        return <ImageShow key={img.id} image={img} alt={img.description} />;
      })}
    </div>
  );
};
export { ImageList };
