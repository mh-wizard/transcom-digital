"use client";

import { IoMdAdd } from "react-icons/io";
import {
  Button,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import { getCookie, setCookie } from "cookies-next";
import { addProduct } from "./form-action";

export default function AddNewProducts() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const isDone = getCookie("product-submit");

      if (isDone === "DONE") {
        setLoading(false);
        setCookie("product-submit", "false");
        setOpenModal(undefined);
      }
    }, 500);

    setTimeout(() => {
      const isDone = getCookie("product-submit");

      if (!isDone || isDone === "false") {
        setLoading(false);
        setCookie("product-submit", "false");
      }
    }, 5000);
  }, [loading]);

  return (
    <>
      <Button onClick={() => setOpenModal("form-elements")} className="mb-5">
        <IoMdAdd className="mr-2 h-5 w-5" />
        Add New Product
      </Button>
      <Modal
        show={openModal === "form-elements"}
        size="2xl"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <form action={addProduct} className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add New Product 🔆
            </h3>
            <div className="w-full flex justify-between">
              <div>
                <div className="mb-2 block">
                  <Label value="Name" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="Smartphone"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="SKU" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="SKU67890"
                  type="text"
                  name="sku"
                  required
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <div className="mb-2 block">
                  <Label value="Price" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="10000"
                  type="number"
                  name="price"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Discount" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="3.27"
                  type="text"
                  name="discount"
                  required
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <div className="mb-2 block">
                  <Label value="Emi Duration" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="36"
                  type="number"
                  name="emiDuration"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Exchange Offer" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="20000"
                  type="number"
                  name="exchangeOffer"
                  required
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <div className="mb-2 block">
                  <Label value="Warrenty On" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="Backcover and Screen"
                  type="text"
                  name="warrentyOn"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Warrenty Type" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="Free"
                  type="text"
                  name="warrentyType"
                  required
                />
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between items-center">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label htmlFor="stock" value="Stock" />
                </div>
                <Select id="stock" required name="stockAvailable">
                  <option value="true">Available</option>
                  <option value="false">Out</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Model" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="Galaxy S21 Ultra"
                  type="text"
                  name="model"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Offer Validtity" htmlFor="base" />
                </div>
                <TextInput
                  placeholder="May 23"
                  type="text"
                  name="offerValidityTill"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="mb-2 block">
                  <Label value="Image" />
                </div>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setCookie("product-img", res!![0].fileUrl);
                    alert("Upload Successfull");
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <div className="max-w-md" id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Features" />
                </div>
                <Textarea
                  id="featurs"
                  placeholder="Good Resolutions, Good Camera"
                  required
                  rows={4}
                  name="features"
                />
              </div>
            </div>
            <div className="w-full">
              <Button
                color="success"
                type="submit"
                onClick={() => setLoading(true)}
                isProcessing={loading}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
