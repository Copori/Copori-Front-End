import "../style/style.css";
import Title from "./Title/Title";
import GoodBooks from "./GoodBooks/GoodBooks";

function Main() {
  //View
  return (
    <div className="main">
      <Title />
      <GoodBooks />
    </div>
  );
}

export default Main;
