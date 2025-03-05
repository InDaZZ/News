import "./Header.css";
import { ReactComponent as MenuImage } from "../images/hamburgerbar-mobile_navigation.svg";
import { ModalContext } from "../Context/Context";
import { useContext } from "react";
import SideBar from "../SideBar/SideBar";

function Header() {
  const context = useContext(ModalContext);
  const openModal = () => {
    context?.modal
      ? context?.setModal(null)
      : context?.setModal(<SideBar></SideBar>);
  };
  return (
    <header className="header">
      <div className="header__content-wraper">
        <button type="button" className="header__side-menu" onClick={openModal}>
          <MenuImage width={"100%"} />
        </button>
        <h1 className="header__title">BESIDER</h1>
      </div>
    </header>
  );
}

export default Header;
