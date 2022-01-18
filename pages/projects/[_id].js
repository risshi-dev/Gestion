import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "next/head";
import dashboard from "../../styles/Dashboard.module.css";
import Cards from "../../styles/Cards.module.css";
import Header from "../../components/Header/Header.js";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Cards/Cards";
import EditCardModal from "../../components/Cards/EditCardModal";
import { useState } from "react";
import Chat from "../../components/Chat/Chat";

const sampleCards = [
  {
    _id: 1,
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
    _id: 2,
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

const emptyCard = {
  title: "",
  todo: [],
  comments: [],
  description: "",
};

export default function Project() {
  const [openModal, setOpenModal] = useState(false);

  const [cards, setCards] = useState(sampleCards);
  const [activeCard, setActiveCard] = useState(emptyCard);

  const setModal = (isOpen) => setOpenModal(isOpen);
  const onCardClick = (card) => {
    setModal(true);
    setActiveCard(card);
  };

  // edits a existing card
  const handleEditModalClose = () => {
    const newCards = cards;
    for (let card of newCards) {
      if (card._id === activeCard._id) {
        card = activeCard;
        break;
      }
    }
    setCards(newCards);

    //resetting the active card
    setActiveCard(emptyCard);
  };

  // creates a new card
  // TODO: this function will eventually send a request and create a card in DB and get back its _id (right now edit modal doesn't work for newly created cards)
  const handleCreateCard = (title) => {
    if (title.length > 0) {
      setCards([...cards, { ...emptyCard, title: title }]);
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
          <Sidebar handleCreateCard={handleCreateCard} />
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
          <div className="sideScreen">
            <Chat />
          </div>
        </div>
      </div>
      <EditCardModal
        card={activeCard}
        setCard={setActiveCard}
        isOpen={openModal}
        handleEditModalClose={handleEditModalClose}
        setModal={setModal}
      />
    </div>
  );
}
