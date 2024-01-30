import React, { useRef, useEffect, useState, MouseEventHandler } from "react";
import Testimonial from "./Testimonials";
const img =
  "https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk2NTQzNzY&ixlib=rb-4.0.3&q=85";
type Props = {
  [key: string]: any;
};
const Testimonials = () => {
  return (
    <>
      <div className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll">
        <Draggable rootClass={"drag"}>
          <div className="flex flex-row overflow-x-auto bg- ">
            <div className="shrink-0 bg-blue-secondary">
              <Testimonial />
            </div>
            <div className="shrink-0">
              <Testimonial />
            </div>
            <div className="shrink-0">
              <Testimonial />
            </div>
            <div className="shrink-0">
              <Testimonial />
            </div>
            <div className="shrink-0">
              <Testimonial />
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
};

// const connect = function (Component: React.FC): React.FC<Props> {
//   const ComponentWrapper = function (props: Props): JSX.Element {
//     return <Draggable {...props} />;
//   };

//   return ComponentWrapper;
// };

const Draggable = ({
  rootClass = "",
  children,
}: {
  rootClass: any;
  children: any;
}) => {
  const ourRef = useRef<any>(null);

  const [isMouseDown, setIsMouseDown] = useState<any>(false);

  const mouseCoords = useRef<any>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const [isScrolling, setIsScrolling] = useState<any>(false);
  const handleDragStart = (e: any) => {
    if (!ourRef.current) return;
    const slider = ourRef.current?.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current?.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    console.log(walkX, walkY);
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass + "flex overflow-x-scroll"}
    >
      {children}
    </div>
  );
};
export default Testimonials;
