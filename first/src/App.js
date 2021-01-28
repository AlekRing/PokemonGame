import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';

import './App.css';

import urlBg from './assets/bg2.jpg';
import urlBg2 from './assets/bg3.jpg';


const App = () => {
  const bgColor = 'gray'
  return (
    <>
      <Header title="Hello there!" descr="so good" />
      <Layout urlBg={urlBg} title="Come to the Dark Side" id="myId" desc="we have cookies"/>
      <Layout bgColor={bgColor} title="Come to the Dark Side" id="myId" desc="we have cookies"/>
      <Layout urlBg2={urlBg2} title="Come to the Dark Side" id="myId" desc="we have cookies"/>
      <Footer />
    </>
  );
}

export default App;
