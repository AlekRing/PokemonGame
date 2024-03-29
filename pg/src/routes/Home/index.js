import Header from '../../components/header/header';
import Layout from '../../components/layout/layout';

import './style.module.css';

import urlBg from '../../assets/bg2.jpg';
import urlBg2 from '../../assets/bg3.jpg';

const HomePage = ({ onChangePage }) => {

  const handleClickButton = (page) => {
      onChangePage && onChangePage(page);
  }

  return (
    <>
      <Header title="Fight and catch" descr="...your own pokemon"
        onClickButton={handleClickButton}/>
      <Layout urlBg={urlBg} title="Description" id="myId" desc="">
        <div>
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. 
        </div>
      </Layout>
      <Layout title="Rules" id="myId" desc="1. In start of game you will need to choose 5 pokemon to fight.
      2.Fight against another summoner" />
      <Layout urlBg2={urlBg2} title="Come to the Dark Side" id="myId" desc="we have cookies" />
    </>
  );
}

export default HomePage;
