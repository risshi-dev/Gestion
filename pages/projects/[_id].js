import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "next/head";
import dashboard from "../../styles/Dashboard.module.css";
import Cards from "../../styles/Cards.module.css";
import Header from "../../components/Header/Header.js";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Cards/Cards";
import EditCardModal from "../../components/Cards/EditCardModal";
import { useCallback, useEffect, useState } from "react";
import Chat from "../../components/Chat/Chat";
import ProjectInfo from "../../components/Project/ProjectInfo";
import SideScreen from "../../components/Project/SideScreen";
import { useRouter } from "next/router";
import { isAuth } from "../../helper/helper";

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
  const router = useRouter();
  useEffect(() => {
    !isAuth() ? router.push("/login") : null;
  }, []);

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
    let newCards = [...cards];

    for (let i = 0; i < newCards.length; i++) {
      if (newCards[i]._id === activeCard._id) {
        newCards[i] = activeCard;
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

  //SideScreen
  const [isSideScreen, setSideScreen] = useState(false);
  const [activeScreen, setActiveScreen] = useState("");

  const setScreen = (screen) => setActiveScreen(screen);
  const screenVisible = (is) => setSideScreen(is);

  const openSideScreen = useCallback(() => {
    if (!isSideScreen) {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "320px";
    } else {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "0px";
    }
  }, [isSideScreen]);

  useEffect(() => {
    if (activeScreen !== "") openSideScreen();
  }, [isSideScreen, activeScreen, openSideScreen]);

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
          <Sidebar
            handleCreateCard={handleCreateCard}
            openSideScreen={openSideScreen}
            setSideScreen={setScreen}
            screenVisible={screenVisible}
          />
          <div className={Cards.container}>
            {cards.map((card) => (
              <Card
                key={card._id}
                open={openModal}
                click={() => onCardClick(card)}
                card={card}
              />
            ))}
          </div>
          <SideScreen
            screen={activeScreen}
            screenVisible={screenVisible}
            openSideScreen={openSideScreen}
          />
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
