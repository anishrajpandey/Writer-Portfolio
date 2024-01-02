"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import PropTypes from "prop-types";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
export default function ShowPDF({
  Book,
  Chapter,
}: {
  Book: any;
  Chapter: any;
}) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  function createArrayFrom1ToN(n: any) {
    return Array.from({ length: n }, (_, index) => index + 1);
  }
  return (
    <iframe
      src="https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2FThe%20Ironman%20-%20PressReadyDummy2%20Book%202023.02.01%20SplitPages%20(1).pdf?alt=media&token=a21d7cb4-aacc-4bff-a5ea-41271cf700f2"
      className="w-full h-screen"
      // width="4800"
      // height="800"
    />
    // <div className="flex justify-center bg-gray-300 h-screen overflow-y-scroll w-full px-4 md:px-12 md:scale-110">

    // </div>
  );
}
ShowPDF.propTypes = {
  Book: PropTypes.string.isRequired,
  Chapter: PropTypes.string.isRequired,
};
