"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Modal({
  ModalData,
  setModalData,
}: {
  ModalData: any;
  setModalData: any;
}) {
  function handleClose() {
    setModalData((prev: any) => ({ ...prev, show: false }));
  }

  return (
    <div
      className={`${
        ModalData.show ? "block" : "hidden"
      } fixed inset-0 top-0  bg-scroll py-12 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-start justify-center z-[1000]`}
    >
      <div className="p-8 border  shadow-lg rounded-lg  bg-white w-11/12">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            {ModalData.Title}
          </h3>
          <Button
            placeholder={""}
            className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
        <div className="  h-fit w-full pt-2">
          <Image
            src={ModalData.Image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="unable to load image"
          />
        </div>
      </div>
    </div>
  );
}
