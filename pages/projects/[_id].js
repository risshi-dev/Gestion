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
import { checkExtraSpaces, isAuth, objectsEqual } from "../../helper/helper";
import { useDispatch } from "react-redux";
import {
  createCard,
  editCard,
  getCards,
} from "../../stateManagement/Card/action";
import { useSelector } from "react-redux";
import _ from "lodash";

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
  const { loading, cards } = useSelector((state) => state.cardReducer);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    !isAuth() ? router.push("/login") : null;

    const projectId = router.query._id;
    dispatch(getCards({ projectId }));
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const [activeCard, setActiveCard] = useState(emptyCard);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const onCardClick = (card) => {
    setModal(true);
    setActiveCard(_.cloneDeep(card));
  };

  // edits a existing card
  const handleEditModalClose = () => {
    let newCard = { ...activeCard };

    // checking if the card is changed or not
    let index = cards.findIndex((card) => card._id === newCard._id);

    if (_.isEqual(cards[index], newCard)) {
      setActiveCard(emptyCard);
      return;
    }

    //resetting the active card
    setActiveCard(emptyCard);

    dispatch(editCard({ newCard }));
    return;
  };

  // creates a new card
  const handleCreateCard = (title) => {
    if (title.length > 0 && !checkExtraSpaces(title)) {
      const projectId = router.query._id;
      dispatch(createCard({ title, projectId }));
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
            {!loading &&
              cards.map((card) => (
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
