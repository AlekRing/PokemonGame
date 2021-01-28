import s from "./footer.module.css";

const Footer = ({ title, id, desc }) => {
    return ( 
      <>
        <footer>
            <div className={s.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
