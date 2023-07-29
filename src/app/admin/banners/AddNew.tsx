"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function AddNew() {
  const router = useRouter();

  const postImage = async (img: string) => {
    const res = await fetch("/api/admin/banners", {
      method: "POST",
      body: JSON.stringify({ img }),
    });

    const data = await res.json();
    if (data) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="font-extrabold mt-2">Upload New Image</p>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          postImage(res!![0].fileUrl);
          alert("Upload Successfull");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
