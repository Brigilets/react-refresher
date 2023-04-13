import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal actionBar={actionBar}>
      <p>Important agreement to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} className="mb-2" primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur justo ac mi imperdiet tristique. Etiam ac facilisis ante,
        quis aliquam eros. Quisque vitae dolor et turpis blandit gravida vel sed
        tellus. Curabitur tortor leo, ultricies eu rhoncus quis, porttitor nec
        tortor. Morbi enim felis, tincidunt ut euismod vel, gravida ut erat.
        Integer accumsan dui sit amet imperdiet ullamcorper. In dapibus massa
        sit amet cursus posuere. Aliquam id augue tincidunt, scelerisque libero
        vel, finibus metus. Aenean vitae orci nec tortor pretium fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur justo ac mi imperdiet tristique. Etiam ac facilisis ante,
        quis aliquam eros. Quisque vitae dolor et turpis blandit gravida vel sed
        tellus. Curabitur tortor leo, ultricies eu rhoncus quis, porttitor nec
        tortor. Morbi enim felis, tincidunt ut euismod vel, gravida ut erat.
        Integer accumsan dui sit amet imperdiet ullamcorper. In dapibus massa
        sit amet cursus posuere. Aliquam id augue tincidunt, scelerisque libero
        vel, finibus metus. Aenean vitae orci nec tortor pretium fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur justo ac mi imperdiet tristique. Etiam ac facilisis ante,
        quis aliquam eros. Quisque vitae dolor et turpis blandit gravida vel sed
        tellus. Curabitur tortor leo, ultricies eu rhoncus quis, porttitor nec
        tortor. Morbi enim felis, tincidunt ut euismod vel, gravida ut erat.
        Integer accumsan dui sit amet imperdiet ullamcorper. In dapibus massa
        sit amet cursus posuere. Aliquam id augue tincidunt, scelerisque libero
        vel, finibus metus. Aenean vitae orci nec tortor pretium fringilla.
      </p>
    </div>
  );
};

export default ModalPage;
