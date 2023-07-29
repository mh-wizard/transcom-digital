"use client";

import { MdDelete } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Delete({
  url,
  redirect,
}: {
  url: string;
  redirect: string;
}) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [loading, setLoading] = useState(false);

  const deleteCategory = async () => {
    setLoading(true);
    const res = await fetch(url, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.error) {
      alert(data.error);
      setLoading(false);
      return;
    } else {
      window.location.href = `${redirect}`;
    }
  };

  return (
    <>
      <MdDelete
        color="red"
        size={24}
        className="border-red-500 border-2 rounded-full cursor-pointer"
        onClick={() => {
          props.setOpenModal("pop-up");
        }}
      />
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                isProcessing={loading}
                onClick={deleteCategory}
              >
                Yes, I&lsquo;m sure
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
