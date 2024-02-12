"use client";

export default function ShowPDF({
  URL = "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fplaceholder.pdf?alt=media&token=16eb75f7-9f43-4ef3-8b1e-17cc54a8d241",
}: {
  URL: any;
}) {
  return <iframe src={URL} className="w-full h-screen" />;
}
