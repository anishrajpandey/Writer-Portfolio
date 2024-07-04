import React, { useRef, useEffect, useState, MouseEventHandler } from "react";
import Testimonial from "./Testimonials";
const img =
  "https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk2NTQzNzY&ixlib=rb-4.0.3&q=85";
type Props = {
  [key: string]: any;
};
const Data = [
  {
    id: 1,
    Testimonial:
      "घनेन्द्र पुरुष ढकालको लेखनशैलीले हाम्रो साहित्यलाई नयाँ आयाम दिएको छ। उहाँका कथाहरूमा जीवनका विभिन्न रंग र भावनाको सुन्दर चित्रण पाउन सकिन्छ। उहाँको शब्दचयन र शैली अद्वितीय छ।",
    Name: "श्री हेमन्त शर्मा",
    Post: "",
    ImageName: "ghanendra.JPG",
  },
  {
    id: 2,
    Testimonial:
      "ढकालजीको लेखनले पाठकलाई पहिलो पृष्ठबाट अन्तिम पृष्ठसम्म बाँधेर राख्न सक्छ। उहाँका उपन्यासहरूमा कथाको प्रवाह र पात्रहरूको जीवन्तता अत्यन्तै सराहनीय छ। उहाँको लेखनबाट मैले धेरै कुरा सिक्ने अवसर पाएको छु।",
    Name: "श्रीमती सिता पोखरेल",
    Post: "Reader",
    ImageName: "ghanendra.JPG",
  },
  {
    id: 3,
    Testimonial:
      "घनेन्द्र पुरुष ढकालका लेखनमा मानव मनको गहिराइ र समाजका विभिन्न पाटाहरूको सूक्ष्म अध्ययन पाइन्छ। उहाँको लेखनले हरेक पटक नयाँ दृष्टिकोण र विचार प्रस्तुत गर्छ। नेपाली साहित्यमा उहाँको योगदान अमूल्य छ।",
    Name: "श्री कुमार थापा:",
    Post: "Reader",
    ImageName: "ghanendra.JPG",
  },
  {
    id: 4,
    Testimonial:
      "ढकाल सरका कविताहरूमा शब्दको जादू छ। उहाँका रचनाहरूले हृदयको अन्त्यसम्म छुन्छन् र गहिरो छाप छोड्छन्। उहाँको लेखनमा प्रकृति, प्रेम, र जीवनको सुन्दरतालाई अत्यन्तै कलात्मक ढंगले प्रस्तुत गरिएको छ।",
    Name: "श्रीमती रञ्जना कार्की",
    Post: "Reader",
    ImageName: "ghanendra.JPG",
  },
  {
    id: 5,
    Testimonial:
      "घनेन्द्र पुरुष ढकालको लेखनले मेरो मनमा सदैव एक विशेष स्थान पाएको छ। उहाँका कथाहरूले मलाई सोच्न बाध्य पार्छन् र जीवनलाई नयाँ दृष्टिकोणबाट हेर्न सिकाउँछन्। उहाँको लेखनले मलाई सधैं प्रेरणा र उर्जा दिन्छ।",
    Name: "श्री रमेश अधिकारी",
    Post: "Reader",
    ImageName: "ghanendra.JPG",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll">
        <Draggable rootClass={"drag"}>
          <div className="flex flex-row overflow-x-auto bg- ">
            {Data.map((options) => (
              <div
                className={`shrink-0 ${
                  options.id % 2 !== 0 ? "bg-blue-secondary" : "bg-gray-100"
                }`}
                key={options.id}
              >
                <Testimonial {...options} />
              </div>
            ))}
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
