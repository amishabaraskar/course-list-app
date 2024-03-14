import { Modal, Button } from "react-bootstrap";
import Form from './form';

function ModalForm({show,handleClose}) {
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry form</Modal.Title>
        </Modal.Header>
        <Modal.Body
        ><Form closeModal={handleClose}/></Modal.Body>
 
      </Modal>
    </>
  );
}

export default ModalForm;