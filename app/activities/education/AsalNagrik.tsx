import ImageComponent from "../_components/ImageComponent";
import TextComponent from "../_components/TextComponent";
import TextAndImageComponent from "../_components/TextAndImageComponent";
import TitleComponent from "../_components/TitleComponent";
import MainArticleComponent from "../_components/MainArticleComponent";

export default function AsalNagrik() {
  return (
    <MainArticleComponent>
      <TitleComponent
        Title={"Asal Nagrik Banau (असल नागरिक बनौं) "}
        URL={"#"}
      />
      <ImageComponent FileName={"asalnagrik1.jpg"} />

      <TextComponent
        Title={"को हुन असल नागरिक ?"}
        Description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipit."
        }
      />
      <TextComponent
        Title={"My Aim"}
        Description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, aspernatur tenetur id nisi ex hic earum similique aliquam! Soluta, reprehenderit ea iste debitis dignissimos suscipit."
        }
      />

      <TextAndImageComponent
        FileName={"asalnagrikmeeting.jpg"}
        Title={""}
        Description={
          'यहि माघ ३ गते देखि १२ गते सम्म आयोजना हुने "असल नागरिक बनौं " दोस्रो तालिममा असल नागरिक बन्न उत्साहित युवा युवती एकिकृत भइ संकलप व्यक्त गर्दै ।'
        }
      />

      <TitleComponent
        Title={
          "मुलुकभर असल नेताहरूको खडेरी परेको आजको अवस्थामा गणेशमान सिंह फाउन्डेसनले ‘असल नागरिक बनौं ‘ भन्ने पवित्र र आशा जगाउने खालको १० दिने दोस्रो समुहको तालिम आयोजना गर्यौ ।"
        }
        URL={"https://www.simpaninews.com/2024/02/122434/"}
      />
      <ImageComponent FileName={"mediacoverage.jpg"} />

      <div className="grid w-full place-content-center">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fganeshmansinghfoundation%2Fposts%2Fpfbid02eWT12pqrCZ9BcMhr1op5L1etZbzSSe8hvVCHjmPbpo5pF6e3jatQKTNbHaKoJQpCl&show_text=true&width=500"
          width="500"
          height="665"
          // allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </MainArticleComponent>
  );
}
