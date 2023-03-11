import { useState } from "react";

function FileImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  function onImageChange(e) {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0], 'img""""""""');
    // setSelectedImage(event.target.files[0]);
  }
  return (
    <div className="mb-1">
      <div className="">
        <input
          type="file"
          name="myImage"
          accept="files/*"
          multiple
          // onChange={(event) => {
          //   console.log(event.target.files[0]);
          //   setSelectedImage(event.target.files[0]);
          // }}
          onChange={onImageChange}
        />
      </div>
      <br />
      {/* {selectedImage && <img src={selectedImage} height={"200px"} />} */}
      {/* {selectedImage.map((imageSrc) => ( */}
      {selectedImage && (
        // <img src={selectedImage} height={"700px"} width={"700px"} />
        <img width={"250px"} src={URL.createObjectURL(selectedImage)} />
      )}
      {/* // ))} */}
    </div>
  );
}
export default FileImage;
