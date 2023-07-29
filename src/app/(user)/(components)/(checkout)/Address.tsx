import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Address(props: {
  show: boolean;
  setShow: (arg0: boolean) => void;
}) {
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Billing Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Address Label
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select..</option>
                    <option value="1">Home</option>
                    <option value="2">Office</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    First Name
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Last Name
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type=""
                    name=""
                    placeholder=""
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Phone Number
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Email Address
                  </label>
                  <input
                    type=""
                    name=""
                    placeholder=""
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Division
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select..</option>
                    <option value="1">Barisal</option>
                    <option value="2">Chittagong</option>
                    <option value="3">Dhaka</option>
                    <option value="4">Khulna</option>
                    <option value="5">Mymensingh</option>
                    <option value="6">sylhtet</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="form-label fw-bold">
                  District
                  <span className="text-black">
                    <sup>*</sup>
                  </span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select..</option>
                  <option value="1">Barisal</option>
                  <option value="2">Chittagong</option>
                  <option value="3">Dhaka</option>
                  <option value="4">Khulna</option>
                  <option value="5">Mymensingh</option>
                  <option value="6">sylhtet</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Thana/Upazilla
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select..</option>
                    <option value="1">Barisal</option>
                    <option value="2">Chittagong</option>
                    <option value="3">Dhaka</option>
                    <option value="4">Khulna</option>
                    <option value="5">Mymensingh</option>
                    <option value="6">sylhtet</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Postal Code
                  </label>
                  <input
                    type=""
                    name=""
                    placeholder="Type here"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Land Mark
                  </label>
                  <input
                    type=""
                    name=""
                    placeholder="Type here"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Road Number/Number
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="Type here"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    House Number/Block Number
                    <span className="text-black">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="Type here"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="" className="form-label fw-bold">
                    Flat Number
                  </label>
                  <input
                    type=""
                    name=""
                    placeholder="Type here"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add New
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
