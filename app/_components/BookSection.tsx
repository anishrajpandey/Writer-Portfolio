import Image from "next/image";
import Link from "next/link";
import BookIcon from "../_globalComponents/icons/BookIcon";
import ArrowIcon from "../_globalComponents/icons/ArrowIcon";
import { DownloadIcon } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";

const BookSection = ({
  BookName = "Iron Man",
  Description = "Description ",
  ImageBack = "/Event.JPG",
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
      <main className="">
        <main className="bookSection grid md:grid-cols-3 grid-cols-1 mb-16  pb-10   px-12 gap-7">
          <div className="grid place-content-center col-span-1 ">
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeft">
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
                    width={200}
                    height={300}
                    alt="cannot load image"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          {/* <ScrollAnimation
            animateOnce={true}
            animateIn="animate__fadeInRight"
            className="w-fit"
          > */}
          <div className="right  col-span-2 md:py-12 md:p-16 grid justify-between gap-3 ">
            <h2 className="uppercase text-lg font-serif tracking-wider text-black">
              BOOK NAME
            </h2>
            <h1 className="text-xl md:text-4xl font-bold tracking-wide text-blue-primary uppercase ">
              {BookName}
            </h1>
            <p className="text-faded text-md md:text-lg py-4">{Description}</p>
            <div className="flex gap-5 flex-wrap-reverse">
              <Link href={URL}>
                <button
                  type="button"
                  className="text-white bg-blue-secondary hover:bg-blue-primary px-4 py-3 text-xl font-bold width-max flex justify-center gap-2 items-center rounded-lg"
                >
                  Read Now
                  <BookIcon />
                </button>
              </Link>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2FLauhapurus%20(1).pdf?alt=media&token=6e321487-1ca0-4daa-96c5-4723a56da2d7"
                download
              >
                <button
                  type="button"
                  className="text-white bg-orange-secondary hover:bg-orange-primary px-4 py-3 text-xl font-bold width-max flex justify-center gap-2 items-center rounded-lg"
                >
                  Download
                  <DownloadIcon />
                </button>{" "}
              </a>
            </div>
          </div>
          {/* </ScrollAnimation> */}
        </main>
      </main>
    </>
  );
};

export default BookSection;
