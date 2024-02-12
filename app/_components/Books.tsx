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
          ImageFront={"/assets/photos/books/lauhapurush_transparent.png"}
          ImageBack={"/assets/photos/placeholder.jpg"}
          URL={"/books/2"}
          DownloadPath={"/assets/book-pdf/lauhapurush.pdf"}
          available={true}
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
          ImageFront={"/assets/photos/books/ironman_transparent.png"}
          ImageBack={"/assets/photos/ironman_inaugration.jpg"}
          DownloadPath={"/assets/book-pdf/ironman.pdf"}
          available={true}
          URL={"/books/1"}
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
          ImageFront={"/assets/photos/books/janaandolan_transparent.png"}
          ImageBack={"/assets/photos/placeholder.jpg"}
          URL={"/book/3"}
          available={false}
          DownloadPath={""}
        />
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation
          animateOnce={false}
          delay={100}
          animateIn="animate__fadeInRight"
        > */}
        <BookSection
          BookName={"इतिहस पुरुषहरु को दृस्ती मा गणेशमान सिंह "}
          Description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
          }
          ImageFront={"/assets/photos/books/itihas_transparent.png"}
          ImageBack={"/assets/photos/placeholder.jpg"}
          URL={"/book/1"}
          available={false}
          DownloadPath={""}
        />
        {/* </ScrollAnimation> */}
      </div>
    </>
  );
}
