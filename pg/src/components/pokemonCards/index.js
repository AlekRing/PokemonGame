import cn from 'classnames';
 
import CardBacked from "../../assets/card-back-side.jpg";

import s from "./style.module.css";

const PokemonCard = ({ type, id, name, values, img, isSelected,
                        revertCard, active, minimize,  className, possession}) => {
    
    const handleClick = () => {
        revertCard && revertCard(id)
    }
    
    return ( 
      <>
            <div className={cn(className ,s.pokemonCard, {
                            [s.active]: active,
                            [s.selected]: isSelected
                        })}
                onClick={handleClick}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type], s[possession])} style={{backgroundColor: possession}}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{values.top}</div>
                                <div className={cn(s.count, s.right)}>{values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={`${name}`} />
                            </div>
                            { !minimize && (<div className={s.info}>
                                <span className={s.number}>#{ id }</span>
                                <h3 className={s.name}>
                                    { name }
                                </h3>
                                <small className={s.type}>
                                    Type: <span>{ type }</span>
                                </small>
                            </div> )}
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>
                        <img src={CardBacked} alt="Сard Backed" />
                    </div>
                </div>
            </div>
      </>
    );
  }
  
  export default PokemonCard;
