import React from "react";
import "./MovieList.css";
import MovieCardList from "../components/Card/MovieCards.js"
import Number1 from "../Assets/1.jpg"
import Number2 from "../Assets/2.jpg"
import Number3 from "../Assets/3.png"
import Number4 from "../Assets/4.png"
import Number5 from "../Assets/5.png"
import Number6 from "../Assets/6.png"
import Number7 from "../Assets/7.png"
import Number8 from "../Assets/8.png"
import Number9 from "../Assets/9.png"
import Number10 from "../Assets/10.jpg"
import Number11 from "../Assets/11.jpg"
import Number12 from "../Assets/12.png"
import Number13 from "../Assets/13.jpg"
import Number14 from "../Assets/14.png"
import Number15 from "../Assets/15.png"
import Number16 from "../Assets/16.png"
import Number17 from "../Assets/17.png"
import Number18 from "../Assets/18.png"

// Geriin daaalgvar 1 

const Movie_List = () =>{
    return(
            <div className="Movie">
                <div className="MovieContainer">
                    <MovieCardList title="Иргэний боловсрол III" img={Number1}/>
                    <MovieCardList title="Иргэний боловсрол II" img={Number2}/>
                    <MovieCardList title="Дарам Дэрэм хоёр эрх мэдэлд суралцсан нь" img={Number3}/>
                    <MovieCardList title="Bears learn justice, teacher's manual" img={Number4}/>
                    <MovieCardList title="Justice" img={Number5}/>
                    <MovieCardList title="Privacy" img={Number6}/>
                    <MovieCardList title="Responsibility" img={Number7}/>
                    <MovieCardList title="Authority" img={Number8}/>
                    <MovieCardList title="Altaakhai learns privacy, teacher's manual" img={Number9}/>
                    <MovieCardList title="Иргэний боловсрол 4" img={Number10}/>
                    <MovieCardList title="Иргэний боловсрол V" img={Number11}/>
                    <MovieCardList title="Daram and Derem learn authority, teacher's manual" img={Number12}/>
                    <MovieCardList title="Иргэний боловсрол I" img={Number13}/>
                    <MovieCardList title="Алтаахай эрх чөлөө, нөхөрлөлд суралцсан нь" img={Number14}/>
                    <MovieCardList title="Бамбаруушнууд шударга ёсонд суралцсан нь" img={Number15}/>
                    <MovieCardList title="Төгөлдөр үүрэг хариуцлагад суралцсан нь" img={Number16}/>
                    <MovieCardList title="Төгөлдөр үүрэг хариуцлагад суралцсан нь, багшийн гарын авлага" img={Number17}/>
                    <MovieCardList title="ЕБС-ын иргэний боловсролын сургалтын хөтөлбөр" img={Number18}/>
                </div>
            </div>
    );
}
export default Movie_List;