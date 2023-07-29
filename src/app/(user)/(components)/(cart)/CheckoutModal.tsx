import Modal from "react-bootstrap/Modal";

export default function CheckoutModal(props: {
  show: boolean;
  setShow: (arg0: boolean) => void;
  phone: string;
  setPhone: (arg0: string) => void;
  setOnNext: (arg0: boolean) => void;
}) {
  const handleClose = () => props.setShow(false);

  const onNextEvent = () => {
    if (props.phone !== "") {
      props.setOnNext(true);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="col-lg-5 mx-auto" style={{ width: "100%" }}>
              <div className="section-title">
                <p className="">
                  Welcome back! Enter your mobile phone number to log in to your
                  account. If you are a new user, your account will be created.
                </p>
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label d-block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name=""
                    id="phone"
                    className="form-control"
                    placeholder="Enter phone number here..."
                    onChange={(e) => props.setPhone(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  onClick={onNextEvent}
                  className="btn bg-red text-white col-12"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
