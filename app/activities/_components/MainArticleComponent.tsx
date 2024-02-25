import React from "react";

export default function MainArticleComponent({ children }: any) {
  return (
    <main className="w-screen md:w-[80vw] mx-auto bg-gray-50 py-8 px-2 md:px-6 ">
      {children}
    </main>
  );
}
