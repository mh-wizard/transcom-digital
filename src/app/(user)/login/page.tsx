export default function Login() {
  return (
    <>
      <section className="login-area my-5">
        <div className="container">
          <div className="col-lg-5 mx-auto">
            <div className="section-title">
              <h3 className="fs-20 mb-3">Log In</h3>
              <p className="border-top py-3">
                Welcome back! Enter your mobile phone number to log in to your
                account. If you are a new user, your account will be created.
              </p>

              <form autoComplete="off">
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label d-block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number here..."
                  />
                </div>
                <button type="submit" className="btn bg-red text-white col-12">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
