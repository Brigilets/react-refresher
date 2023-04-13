const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.regular}
        alt={image.description}
        style={{
          height: "200px",
          width: "250px",
          marginRight: "10px",
        }}
      />
    </div>
  );
};
export { ImageShow };
