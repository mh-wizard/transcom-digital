"use client";

import { IoMdAdd } from "react-icons/io";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import { getCookie, setCookie } from "cookies-next";
import { addCategory } from "./form-action";

export default function AddNewCategory() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setInterval(() => {
        const isDone = getCookie("category-submit");

        if (isDone === "DONE") {
          setLoading(false);
          setCookie("category-submit", "false");
          setOpenModal(undefined);
        }
      }, 500);

      setTimeout(() => {
        const isDone = getCookie("product-submit");

        if (!isDone || isDone === "false") {
          setLoading(false);
          setCookie("category-submit", "false");
        }
      }, 5000);
    }
  }, [loading]);

  return (
    <>
      <Button onClick={() => setOpenModal("form-elements")} className="mb-5">
        <IoMdAdd className="mr-2 h-5 w-5" />
        Add New Category
      </Button>
      <Modal
        show={openModal === "form-elements"}
        size="md"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <form action={addCategory} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add New Category 🔆
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Name" htmlFor="base" />
              </div>
              <TextInput
                placeholder="Smartphone"
                type="text"
                id="base"
                name="name"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-2 block">
                <Label value="Image" />
              </div>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setCookie("category-img", res!![0].fileUrl);
                  alert("Upload Successfull");
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
            <div className="w-full">
              <Button
                type="submit"
                color="success"
                isProcessing={loading}
                onClick={() => setLoading(true)}
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
