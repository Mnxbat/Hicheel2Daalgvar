import React from "react";
import styles from "./style.module.css";
import { getClasses } from "./getClasses";


const Button = ({variant, Text, img}) => {
    const buttonTypes = {
        white: 'White',
        genre: 'Genre',
        side: 'side',
        sidesub: 'sidesub',
        sidesublive: 'sidesublive'
    }
    return (
        <>
            <button 
                 className={getClasses(
                    [styles.button, styles[`button-${buttonTypes[variant]}`]])}
                    >

                        <img src={img} alt="fdas" className={variant === "White" ? styles.displayNone
                                                                                 : variant === 'Genre'? styles.displayNone
                                                                                                      : variant === 'side' ? styles.img
                                                                                                                         : variant === 'sidesub'? styles.img 
                                                                                                                         : styles.img}/> {Text}
                         </button>
        </>
    )
};
export default Button