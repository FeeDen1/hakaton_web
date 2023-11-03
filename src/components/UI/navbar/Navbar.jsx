
import cl from './Navbar.module.css'
import MyButton from "../button/MyButton";


const Navbar = ({title}) => {
  return (
      <nav className={cl.navbar}>
        <div className={cl.navbar_left}>
          <img width='35px' height='auto' src='https://www.anapa-official.ru/simai.data/image/logo/Coat_of_Arms_of_Anapa_(Krasnodar_krai).svg%20copy.png' alt=''/>
          <h1>{title}</h1>
        </div>
        <div className={cl.navbar_right}>

          <MyButton>
            Сменить тему
          </MyButton>
        </div>
      </nav>

      );
};

export default Navbar;