import React, { useRef, useEffect, useState } from "react";
import Testimonial from "./Testimonials";
const img =
  "https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk2NTQzNzY&ixlib=rb-4.0.3&q=85";

const Testimonials = () => {
  const journalRef = useRef(null);
  return (
    <>
      <div className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll">
        <Draggable innerRef={journalRef} rootClass={"drag"}>
          <div className="flex flex-row overflow-x-auto bg- " ref={journalRef}>
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

            {/* <div className=" shrink-0">
              <div className="w-fit">
              </div>
            </div> */}
          </div>
        </Draggable>
      </div>
    </>
  );
};

const Draggable = ({ rootClass = "", children }) => {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const handleDragStart = (e) => {
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
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
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
