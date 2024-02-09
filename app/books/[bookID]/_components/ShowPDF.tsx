"use client";

export default function ShowPDF({
  URL = "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2FThe%20Ironman%20-%20PressReadyDummy2%20Book%202023.02.01%20SplitPages%20(1).pdf?alt=media&token=a21d7cb4-aacc-4bff-a5ea-41271cf700f2",
}: {
  URL: any;
}) {
  return <iframe src={URL} className="w-full h-screen" />;
}
