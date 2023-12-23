import Image from "next/image";
import Link from "next/link";

const BookSection = ({
  BookName = "Iron Man",
  Description = "Description ",
  ImageBack = "/Event.jpg",
  ImageFront = "/book1.png",
  URL = "/books/read",
}: {
  BookName: String;
  Description: String;
  ImageBack: any;
  ImageFront: any;
  URL: any;
}) => {
  //     const bookData = [{
  //          BookName: String;
  //   Description: String;
  //   ImageBack: any;
  //   ImageFront: any;
  //   URL: any

  //     }]
  return (
    <>
      <main className="bg-url[('/Event.jpg')]">
        <main className="bookSection grid md:grid-cols-3 grid-cols-1 mb-16 bg-blue-secondary  pb-10  px-12 gap-7">
          <div className="grid place-content-center col-span-1 ">
            <div className="relative">
              <div className="border-8  rounded-xl border-white w-fit">
                <Image
                  src={ImageBack}
                  width={400}
                  height={350}
                  alt="cannot load image"
                />
              </div>
              <div className="absolute -right-12 -bottom-12 w-fit ">
                <Image
                  src={ImageFront}
                  width={140}
                  height={150}
                  alt="cannot load image"
                />
              </div>
            </div>
          </div>
          <div className="right col-span-2 pl-12 py-12 md:p-16 grid justify-between gap-3 ">
            <h2 className="uppercase text-lg font-serif tracking-wider text-black">
              BOOK NAME
            </h2>
            <h1 className="text-xl md:text-4xl font-bold tracking-wide text-blue-primary uppercase ">
              {BookName}
            </h1>
            <p className="text-faded text-md md:text-lg py-4">{Description}</p>
            <Link href={URL}>
              <button
                type="button"
                className="text-white bg-blue-secondary hover:bg-blue-secondary focus:ring-4 focus:outline-none focus:ring-blue-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-fit"
              >
                Read
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </main>
      </main>
    </>
  );
};

export default BookSection;
