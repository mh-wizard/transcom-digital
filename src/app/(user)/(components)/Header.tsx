"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Provider";

export default function Header() {
  const toggleMenu = () => {};
  const { cart } = useContext(CartContext);

  return (
    <header className="header-area">
      <div className="header-top-area py-2 text-capitalize fs-12 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <span className="fw-bold">need help?</span>
              <a href="/" className="btn btn-sm btn-danger fs-12 mx-2">
                click here
                <span>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="col-lg-6 text-end">
              <a href="/" className="border-end text-danger">
                b2b / dealership
              </a>
              <a href="/" className="border-end text-dark">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                store location
              </a>
              <a href="/" className="text-dark">
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
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                track order status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* search */}
      <div className="header-middle-area py-3 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1 d-lg-none">
              <div onClick={toggleMenu} id="open-menu-icon">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </div>
              <div onClick={toggleMenu} id="close-menu-icon" className="d-none">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </div>
            </div>
            <div className="col-5 col-lg-2">
              <Link href="/" className="header-logo">
                <picture>
                  <img
                    src="https://transcomdigital.com/_next/image?url=%2Ficons%2Ftranscom_logo.svg&w=1500&q=100"
                    alt=""
                  />
                </picture>
              </Link>
            </div>
            <div className="col-6 col-lg-8 d-none d-lg-block">
              <form action="" className="search position-relative">
                <div className="form-group">
                  <input type="text" name="" id="" className="form-control" />
                  <button
                    type="submit"
                    className="position-absolute top-0 end-0 d-block bg-danger text-white rounded border-0"
                  >
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-4 offset-2 col-lg-2 offset-lg-0 text-end">
              <div className="row">
                <Link href="/" className="col">
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
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </Link>
                <Link href="/cart" className="col">
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
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span>{cart.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="header-bottom-area py-3 border-bottom fw-bold d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="menu">
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Products{" "}
                    <span>
                      <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">Refrigaretors</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">TV | AV</div>
                        <div className="col-3 text-end">
                          <FontAwesomeIcon icon={faChevronRight} size="sm" />
                        </div>
                      </a>
                      <ul className="sub-menu-2">
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Samsung</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Sony</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Walton</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Hitachi</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Rangs</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">LG</div>
                            <div className="col-3 text-end">
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                size="sm"
                              />
                            </div>
                          </a>
                          <ul className="sub-menu-3">
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-2023</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-6590</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-6549</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-3915</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">Smart Phones</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Brands
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Shohoj Kisti
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Exchange
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Gift Voucher
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Campaign
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="actions text-end">
                <a href="#" className="px-3">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Wishlist
                </a>
                <Link href="/login" className="px-3">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
