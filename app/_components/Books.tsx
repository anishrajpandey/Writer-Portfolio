import React from "react";
import styles from "../../styles/Style.module.css";
import Title from "../_globalComponents/Title";
import BookSection from "./BookSection";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Books() {
  return (
    <>
      <Title> books</Title>
      <div className={styles.bgDots}>
        {/* <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeft"> */}
        <BookSection
          BookName={"लौहपुरुष (Lauha Purush)"}
          Description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
          }
          ImageFront={"/assets/books/lauhapurush_transparent.png"}
          ImageBack={"/assets/photos/placeholder.JPG"}
          URL={"/book/1/read"}
        />
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation
          animateOnce={true}
          delay={100}
          animateIn="animate__fadeInRight"
        > */}
        <BookSection
          BookName={"Iron Man"}
          Description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
          }
          ImageFront={"/assets/books/ironman_transparent.png"}
          ImageBack={"/assets/photos/placeholder.JPG"}
          URL={"/book/1/read"}
        />
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation
          animateOnce={true}
          delay={100}
          animateIn="animate__fadeInLeft"
        > */}
        <BookSection
          BookName={"जन-आन्दोलन:२०४६"}
          Description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
          }
          ImageFront={"/assets/books/janaandolan_transparent.png"}
          ImageBack={"/assets/photos/placeholder.JPG"}
          URL={"/book/1/read"}
        />
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation
          animateOnce={true}
          delay={100}
          animateIn="animate__fadeInRight"
        > */}
        <BookSection
          BookName={"इतिहस पुरुषहरु को दृस्ती मा गणेशमान सिंह "}
          Description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
          }
          ImageFront={"/assets/books/itihas_transparent.png"}
          ImageBack={"/assets/photos/placeholder.JPG"}
          URL={"/book/1/read"}
        />
        {/* </ScrollAnimation> */}
      </div>
    </>
  );
}
