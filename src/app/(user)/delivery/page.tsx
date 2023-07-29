"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import OrderSummary from "../(components)/OrderSummary";

export default function Delivery() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <section className="cart-area my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title border-bottom pb-3 mb-3">
                <h3 className="d-inline align-bottom fs-20 fw-bold">
                  Checkout Process
                </h3>
              </div>
              <div className="checkout-process mb-5">
                <div className="row justify-content-center align-items-center">
                  <div className="col-6 col-lg-4 text-end d-flex justify-content-end">
                    <span className="step-icon text-white fs-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      01. <br />
                      Customer Info
                    </span>
                  </div>
                  <div className="col-lg-1 text-center d-none d-lg-block">
                    <span className="d-block border-top border-2 border-danger"></span>
                  </div>
                  <div className="col-6 col-lg-4 text-end d-flex fw-bold">
                    <span className="step-icon text-white fs-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      02. <br />
                      Shipping Info
                    </span>
                  </div>
                </div>
              </div>
              <div className="delivery-type mb-5">
                <div className="section-title border-bottom pb-3 mb-3">
                  <h3 className="d-inline align-bottom fs-20 fw-bold">
                    Choose Delivery Type
                  </h3>
                </div>
                <ul
                  className="nav nav-pills mt-3 fs-16 fw-bold bg-light p-2 rounded d-flex text-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item col-6 rounded p-2 button-active"
                    role="presentation"
                  >
                    <div
                      className="active pill-active"
                      id="pills-home-delivery-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home-delivery"
                      role="tab"
                      aria-controls="pills-home-delivery"
                      aria-selected="true"
                    >
                      Home Delivery
                    </div>
                  </li>
                  <li
                    className="nav-item col-6 rounded p-2"
                    role="presentation"
                  >
                    <div
                      className=""
                      id="pills-store-pickup-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-store-pickup"
                      role="tab"
                      aria-controls="pills-store-pickup"
                      aria-selected="false"
                    >
                      Feature
                    </div>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="product-overview tab-pane fade py-5 show active"
                    id="pills-home-delivery"
                    role="tabpanel"
                    aria-labelledby="pills-home-delivery-tab"
                    tabIndex={0}
                  >
                    <div className="card my-2 border-light border-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="col-2 col-md-1">
                            <i
                              className="fas fa-truck"
                              style={{ fontSize: "30px" }}
                            ></i>
                          </div>
                          <div className="col-10 col-md-11">
                            <h3 className="fw-bold fs-16">Regular Delivery</h3>
                            <p className="fs-15">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Vel, magnam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card my-2 border-light border-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="col-2 col-md-1">
                            <i
                              className="fas fa-truck"
                              style={{ fontSize: "30px" }}
                            ></i>
                          </div>
                          <div className="col-10 col-md-11">
                            <h3 className="fw-bold fs-16">Regular Delivery</h3>
                            <p className="fs-15">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Vel, magnam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="" className="delivery-time mt-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label fs-16 fw-bold">
                          Preferred Delivery Time
                        </label>
                        <select
                          name=""
                          id=""
                          className="form-control form-select"
                        >
                          <option value="">10:00AM - 12:00PM</option>
                          <option value="">01:00PM - 05:00PM</option>
                          <option value="">06:00PM - 10:00PM</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-store-pickup"
                    role="tabpanel"
                    aria-labelledby="pills-store-pickup-tab"
                    tabIndex={0}
                  >
                    {/* <!-- <div className="card my-2">
                                    <div className="card-body text-center">
                                        <h3 className="fs-20 fw-bold">Coming soon!</h3>
                                    </div>
                                </div> --> */}
                    <form action="" className="store-pickup mt-3">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              Division
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control form-select"
                            >
                              <option value="">10:00AM - 12:00PM</option>
                              <option value="">01:00PM - 05:00PM</option>
                              <option value="">06:00PM - 10:00PM</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              District
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control form-select"
                            >
                              <option value="">10:00AM - 12:00PM</option>
                              <option value="">01:00PM - 05:00PM</option>
                              <option value="">06:00PM - 10:00PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              Thana/Upazila
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control form-select"
                            >
                              <option value="">10:00AM - 12:00PM</option>
                              <option value="">01:00PM - 05:00PM</option>
                              <option value="">06:00PM - 10:00PM</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              Store
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control form-select"
                            >
                              <option value="">10:00AM - 12:00PM</option>
                              <option value="">01:00PM - 05:00PM</option>
                              <option value="">06:00PM - 10:00PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              Date
                            </label>
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              htmlFor=""
                              className="form-label fs-16 fw-bold"
                            >
                              Time
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control form-select"
                            >
                              <option value="">10:00AM - 12:00PM</option>
                              <option value="">01:00PM - 05:00PM</option>
                              <option value="">06:00PM - 10:00PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 fs-10">
                  By clicking the next button, you agree with the{" "}
                  <Link href="/terms" className="text-primary fw-bold">
                    Terms & Conditions.
                  </Link>
                </div>
                <div className="col-lg-3 text-center">
                  <Link href="/checkout" className="text-red">
                    Back
                  </Link>
                </div>
                <div className="col-lg-3">
                  <Link
                    href="/payment"
                    className="btn bg-red d-block text-white"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
}
