import s from "./footer.module.css";

const Footer = ({ title, id, desc }) => {
    return ( 
      <>
        <footer>
            <div className={s.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <a id={s.link} href='https://github.com/AlekRing' target='_blank'>Alek_Ring</a>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
