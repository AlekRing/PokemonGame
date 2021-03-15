import s from "./layout.module.css";

// impor/t

const Layout = ({ title, id, desc, urlBg, urlBg2, bgColor, children}) => {
    const BG = () => {
        if (urlBg || urlBg2) {
            return {backgroundImage: 
                `url(${urlBg || urlBg2})`}
        } else return {backgroundColor: bgColor}
    }

    return ( 
      <>
        <section className={s.root} id={id}
            style={BG()}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`full ${s.desc}`} >
                        <p>{desc}</p>
                        {children}
                    </div>
                </article>
            </div>
        </section>
      </>
    );
  }
  
  export default Layout;