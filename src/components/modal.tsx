import { Modal, Button, ModalFooter } from "react-bootstrap";
import Form from './form';

function ModalForm({show,handleClose}) {
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry form</Modal.Title>
        </Modal.Header>
        <Modal.Body
        ><Form closeModal={handleClose} /></Modal.Body>
        <ModalFooter>{id}</ModalFooter>
 
      </Modal>
    </>
  );
}

export default ModalForm;