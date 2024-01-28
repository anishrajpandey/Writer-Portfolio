import Image from "next/image";
import React from "react";

const AboutAuthor = () => {
  return (
    <section>
      <h1 className="mb-0  mt-12 text-3xl font-extrabold text-gray-900 text-center  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-primary from-orange-primary tracking-widest uppercase">
          About the Author
        </span>{" "}
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 min-h-[300px]  py-4 gap-2 justify-center items-center">
        <div className="w-9/12 mx-auto relative min-h-[250px] rounded-lg overflow-hidden ">
          {/* <div className="relative  mx-auto w-32"> */}
          <Image src={"/ghanendra.jpg"} fill alt="photo" />
        </div>
        {/* </div>s */}
        <div className="text-sm flex justify-center items-center md:text-md ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos saepe
          laborum repudiandae quaerat. Totam beatae, voluptas nobis, natus
          nesciunt reprehenderit incidunt repudiandae quos temporibus aliquam
          placeat ipsam, doloremque unde quidem? laborum repudiandae quaerat.
          Totam beatae, voluptas nobis, natus nesciunt reprehenderit incidunt
          repudiandae quos temporibus aliquam placeat ipsam, doloremque unde
          quidem? laborum repudiandae quaerat. Totam beatae, voluptas nobis,
          natus nesciunt reprehenderit incidunt repudiandae quos temporibus
          aliquam placeat ipsam, doloremque unde quidem?
        </div>
      </main>
    </section>
  );
};

export default AboutAuthor;
