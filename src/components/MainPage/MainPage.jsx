import "./MainPage.css";
import img1 from "../../assets/img1.png";
import { FaRegEdit } from "react-icons/fa";
const MainPage = () => {
  return (
    <div className="main-cont">
      <div className="history-Cont">
        <div className="history-nav">
          <img src={img1} alt="" height={"40px"} />
          <div>New Chat</div>
          <FaRegEdit fontSize={"20px"} />
        </div>
        <div className="history-btn">
          <button>Past Conversations</button>
        </div>
      </div>
      <div className="main-page">
        <div className="app-name">Bot AI</div>
        <div className="app-greet">
          <div>How Can I Help You Today?</div>
          <img src={img1} alt="" width={"70px"} />
        </div>
        <div className="app-feature">
          <div className="feature-cont">
            <div className="feature-cont-heading">Hi, what is the weather</div>
            <div className="feature-cont-content">
              Get immediate AI generated response
            </div>
          </div>
          <div className="feature-cont">
            <div className="feature-cont-heading">Hi, what is my location</div>
            <div className="feature-cont-content">
              Get immediate AI generated response
            </div>
          </div>
          <div className="feature-cont">
            <div className="feature-cont-heading">
              Hi, what is the temperature
            </div>
            <div className="feature-cont-content">
              Get immediate AI generated response
            </div>
          </div>
          <div className="feature-cont">
            <div className="feature-cont-heading">Hi, how are you</div>
            <div className="feature-cont-content">
              Get immediate AI generated response
            </div>
          </div>
        </div>
        <div className="app-interact-cont">
          <div className="input-cont">
            <input type="text" />
          </div>
          <div className="btn-cont">
            <button>Ask</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
