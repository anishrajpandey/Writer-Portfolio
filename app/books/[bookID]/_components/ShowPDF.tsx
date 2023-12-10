"use client";
import { url } from "inspector";
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
    <div className="flex justify-center bg-gray-300 h-screen overflow-y-scroll w-full px-4 md:px-12 md:scale-110">
      <Document
        // file="https://www.africau.edu/images/default/sample.pdf"
        file={`/books/${Book}/${Chapter}.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Book}
        {Chapter}
        {createArrayFrom1ToN(numPages).map((pageNumber) => (
          <div key={pageNumber}>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
ShowPDF.propTypes = {
  Book: PropTypes.string.isRequired,
  Chapter: PropTypes.string.isRequired,
};
