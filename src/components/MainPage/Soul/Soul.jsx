/* eslint-disable react/prop-types */
import "./Soul.css";
import img3 from "../../../assets/soul.png";
const Soul = (props) => {
  return (
    <div className="chat-Soul-cont">
      <div className="chat-Soul-cont-img">
        <img src={img3} alt="" />
      </div>
      <div className="chat-Soul-cont-content">
        <div className="chat-Soul-cont-heading">Soul</div>
        <div className="chat-Soul-cont-chat">{props.res}</div>
        <div className="chat-Soul-cont-time">{props.time}</div>
      </div>
    </div>
  );
};
export default Soul;
