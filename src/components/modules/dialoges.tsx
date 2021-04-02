import React from 'react';
import { Modal } from 'react-bootstrap';

const DialogModal = (props: any) => {
    return (
        <Modal show={props.showModal}>
            <Modal.Title>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={() => props.hideModal()}>×</span>
                    </button>
                </div>
            </Modal.Title>
            <Modal.Body>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            </Modal.Body>
            <Modal.Footer>
                {(props.modalType === 'Logout') ?
                    (
                        <div className="modal-footer">
                            <button className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                                onClick={() => props.hideModal()}>Cancel</button>
                            <button className="btn btn-primary" onClick={() => props.dispatchAction()}>Logout</button>
                        </div>
                    )
                    :
                    (
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Yes</button>
                            <button className="btn btn-primary" >No</button>
                        </div>
                    )
                }
            </Modal.Footer>
        </Modal>
    );
};

export { DialogModal };
