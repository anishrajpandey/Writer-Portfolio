import Image from "next/image";

export default function ImageComponent({ FileName }: any) {
  return (
    <div className="relative w-full md:h-like-screen h-[50vh] my-2 md:my-6 overflow-hidden">
      <Image
        src={`/assets/photos/${FileName}`}
        fill
        alt="Could Not load image"
        className="rounded-md"
      />
    </div>
  );
}
