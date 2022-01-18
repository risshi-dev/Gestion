import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "next/head";
import dashboard from "../../styles/Dashboard.module.css";
import Cards from "../../styles/Cards.module.css";
import Header from "../../components/Header/Header.js";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Cards/Cards";
import EditCardModal from "../../components/Cards/EditCardModal";
import { useState } from "react";

const sampleCards = [
  {
    id: 1,
    title: "Card one",
    description: "This is a description",
    todo: [
      {
        task: "This is a todo task",
        isChecked: false,
      },
      {
        task: "this is a another task",
        isChecked: true,
      },
    ],
    comments: [
      {
        id: "userid",
        comment: "this is a comment",
      },
    ],
  },
  {
    id: 2,
    title: "Card two",
    description: "This is another description",
    todo: [
      {
        task: "This is a todo task",
        isChecked: false,
      },
      {
        task: "this is a another task",
        isChecked: true,
      },
    ],
    comments: [
      {
        id: "userid",
        comment: "this is another comment",
      },
    ],
  },
];

export default function Project() {
  const [openModal, setOpenModal] = useState(false);

  const [cards, setCards] = useState(sampleCards);
  const [activeCard, setActiveCard] = useState();

  const setModal = (isOpen) => setOpenModal(isOpen);
  const onCardClick = (card) => {
    setModal(true);
    setActiveCard(card);
  };

  const handleModalClose = () => {
    setModal(false);

    // card edited
    if (activeCard._id) {
      const newCards = cards.filter((card) => card._id !== activeCard);
      newCards.push(activeCard);
      setCards(newCards);
    }
    //card created
    else {
    }
  };

  return (
    <div className={styles.container}>
      <div className={dashboard.container}>
        <Head>
          <title>Gestion Login</title>
          <meta name="description" content="Login in your account" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <div className={dashboard.Main}>
          <Sidebar />
          <div className={Cards.container}>
            {cards.map((card) => (
              <Card
                key={card.id}
                open={openModal}
                click={() => onCardClick(card)}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
      <EditCardModal
        card={activeCard}
        setCard={setActiveCard}
        isOpen={openModal}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}
