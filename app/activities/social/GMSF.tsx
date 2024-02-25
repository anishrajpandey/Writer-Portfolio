import ImageComponent from "../_components/ImageComponent";
import TextComponent from "../_components/TextComponent";
import TextAndImageComponent from "../_components/TextAndImageComponent";
import TitleComponent from "../_components/TitleComponent";

const GMSF = () => {
  return (
    <main className="w-screen md:w-[80vw] mx-auto  py-8 px-2 md:px-6 ">
      <TitleComponent
        URL={"https://ganeshmansinghfoundation.org/"}
        Title={"Ganesh Man Singh Foundation"}
      />

      <ImageComponent FileName={"gmsf.png"} />

      <TextComponent
        Title={"Introduction"}
        Description={
          "It is Ganesh Man Singh Foundation's pride to continue Ganesh Man Singh's legacy. Singh, besides being one of Nepal's most revered and respected leader, ensured a positive development of Nepal, and Nepalis throughout his lifetime. Considered Nepal's Father of Democracy, Singh in his lifetime resisted against two regimes to ensure Nepalis weren't deprived of their inherent right to democracy. He first led a movement against the autocratic Rana regime which ruled over Nepal for more than 100 years, and later against the 'partyless' Panchayat System introduced by then King Mahendra. The Foundation continues to cherish Singh's belief in democracy, and other activities which include development of sports, infrastructure, improvement of living standards of all Nepalis, and much more."
        }
      />
      <TextAndImageComponent
        FileName={"ganeshman.jpg"}
        Title={"Ganesh Man Singh"}
        Description={
          "Ganesh Man Singh was the leader of the democratic movement of 1990 in Nepal. He is revered as the Father of Democracy and the Iron-man of Nepali politics. He joined Praja Parishad to protest against the autocratic rule of the Ranas"
        }
      />

      <TextComponent
        Title={"Impact"}
        Description={
          "It is Ganesh Man Singh Foundation's pride to continue Ganesh Man Singh's legacy. Singh, besides being one of Nepal's most revered and respected leader, ensured a positive development of Nepal, and Nepalis throughout his lifetime. Considered Nepal's Father of Democracy, Singh in his lifetime resisted against two regimes to ensure Nepalis weren't deprived of their inherent right to democracy. He first led a movement against the autocratic Rana regime which ruled over Nepal for more than 100 years, and later against the 'partyless' Panchayat System introduced by then King Mahendra. The Foundation continues to cherish Singh's belief in democracy, and other activities which include development of sports, infrastructure, improvement of living standards of all Nepalis, and much more."
        }
      />

      <TextComponent
        Title={"Histrory of Ganesh Man Singh"}
        Description={`Ganesh Man Singh was born in the year 1915 at Yetkha, near Hanuman Dhoka in Kathmandu, Nepal. At the time of his birth, Nepal was ruled by the autocratic Rana regime. From early years, Singh exhibited signs of resilience, determination, and zero tolerance towards injustice – all inherent traits of a great leader.
Ganesh Man Singh lost his father Gyan Man Singh at an early age; his own grandfather too had passed away at the age of 33, and was therefore raised by his eldest grandfather Ratna Man Singh. Ratna Man Singh, who served as a Sardar during Ganesh Man Singh’s birth, rose all the way up to the position of a Badakazi during his service to the Ranas.
Singh studied in Durbar High School until Grade 6, from where he was expelled for dishonoring a fellow Rana classmate. He was home-schooled before moving to Calcutta for further studies. Singh’s interest in politics began in Calcutta, after interacting with other fellow students about the affairs of Nepal, and through own personal introspection. After returning to Nepal, Singh joined the Praja Parishad, an underground party which resisted the Rana regime. Other members of Praja Parishad included martyrs Dharma Bhakta Mathema, Shukraraj Shastri, and Ganga Lal Shrestha – all of whom where dear friends of Ganesh Man Singh.
Singh was arrested and sentenced along with other members of Praja Parishad. He was able to escape from jail, and fled to India – from where, in partnership with B P Koirala and Subarna Shumsher was able to launch Nepali Congress – the party which fought for democracy for Nepalis from the Ranas.
Singh again seven years in Sundari Jal Detention Centre without trial, and many years in exile in India while protesting King Mahendra’s partyless Panchayat system.
In 1991, he served as the Supreme Leader of the People’s Movement, which was able to restore democracy in Nepal.
Singh was married to Mangala Devi Singh; someone who he has said is his source of strength and inspiration. Together, they raised five children – two sons and three daughters.`}
      />
    </main>
  );
};
export default GMSF;
