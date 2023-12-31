
import cl from './Navbar.module.css'
import MyButton from "../button/MyButton";
import React from "react";


const Navbar = ({title, changeM}) => {
  return (
      <nav className={cl.navbar}>
        <div className={cl.navbar_left}>
          <img width='40px' height='auto' src='https://www.anapa-official.ru/simai.data/image/logo/Coat_of_Arms_of_Anapa_(Krasnodar_krai).svg%20copy.png' alt=''/>
          <h1>{title}</h1>
        </div>
        <div className={cl.navbar_right}>
          <MyButton onClick={() => changeM(true)}>Добавить камеру</MyButton>
          <MyButton>
            Сменить тему
          </MyButton>
        </div>
      </nav>

      );
};

export default Navbar;