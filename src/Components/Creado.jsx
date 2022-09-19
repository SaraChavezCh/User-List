import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import creado from "../assets/css/creado.css";

class Creado extends React.Component {
    state={
        modalOpen: false,
    }
    openingModal=()=>{
        this.setState({modalOpen: !this.state.abierto});
    }
  render() {
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button color="success" onClick={this.openingModal}>Mostrar modal</Button>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>
            <h1> este es el componente modal</h1>
          </ModalHeader>

          <ModalBody></ModalBody>

          <ModalFooter></ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Creado;
