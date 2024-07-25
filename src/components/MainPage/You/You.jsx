/* eslint-disable react/prop-types */
import "./You.css";
import img2 from "../../../assets/you.png";
const You = (props) => {
  return (
    <div className="chat-you-cont">
      <div className="chat-you-cont-img">
        <img src={img2} alt="" />
      </div>
      <div className="chat-you-cont-content">
        <div className="chat-you-cont-heading">You</div>
        <div className="chat-you-cont-chat">{props.ques}</div>
        <div className="chat-you-cont-time">{props.time}</div>
      </div>
    </div>
  );
};
export default You;
