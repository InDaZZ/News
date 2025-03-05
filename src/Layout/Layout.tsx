import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalContextProvider from "../Context/Context";
import Modal from "../Modal/Modal";

const Layout = () => {
  return (
    <>
      <ModalContextProvider>
        <Header></Header>
        <Modal></Modal>
      </ModalContextProvider>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
