import "./Loader.css";
import LoaderIcon from "../images/Loader.svg";
import { FC } from "react";
interface ILoaderProps {
  className: string;
}
const Loader: FC<ILoaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <img src={LoaderIcon} alt="Loading..." className="loader"></img>
    </div>
  );
};

export default Loader;
