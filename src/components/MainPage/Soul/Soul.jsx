/* eslint-disable react/prop-types */
import { MdThumbDownOffAlt } from "react-icons/md";
import { MdThumbUpOffAlt } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import ReactModal from "react-modal";
import { useState, useCallback } from "react";
import "./Soul.css";
import img3 from "../../../assets/soul.png";
const Soul = (props) => {
  const [showStar, setShowStar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <div
      className="chat-Soul-cont"
      onMouseEnter={() => {
        setShowStar(true);
      }}
      onMouseLeave={() => {
        setShowStar(false);
      }}
    >
      <div className="chat-Soul-cont-img">
        <img src={img3} alt="" />
      </div>
      <div className="chat-Soul-cont-content">
        <div className="chat-Soul-cont-heading">Soul</div>
        <div className="chat-Soul-cont-chat">{props.res}</div>
        <div className="chat-Soul-cont-time">
          <div>{props.time}</div>
          <div style={{ display: "flex" }}>
            <MdThumbUpOffAlt fontSize={"14px"} onClick={handleOpenModal} />
            <div>
              <ReactModal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                shouldCloseOnOverlayClick={true}
                style={{
                  content: {
                    width: "500px",
                    height: "300px",
                    margin: "auto",
                    backgroundColor: "rgba(250, 247, 255, 1)",
                  },
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "30px",
                      justifyContent: "space-between",
                      width: "480px",
                    }}
                  >
                    <div style={{ height: "100%", fontSize: "24px" }}>
                      Provide Additional Feedback
                    </div>
                    <button
                      onClick={handleCloseModal}
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      <RxCross2 fontSize={"20px"} />
                    </button>
                  </div>

                  <input
                    type="text"
                    style={{
                      height: "220px",
                      width: "480px",
                      borderRadius: "8px",
                      border: "1px solid lightgrey",
                    }}
                  />
                  <button
                    style={{
                      height: "30px",
                      width: "80px",
                      backgroundColor: "rgba(215, 199, 244, 1)",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </ReactModal>
            </div>
            <MdThumbDownOffAlt
              fontSize={"14px"}
              style={{ paddingLeft: "6px" }}
            />
          </div>
        </div>
        <div className={` ${showStar ? "show-star" : "hide-star"}`}>
          {[...Array(5)].map((data, index) => {
            return <CiStar key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Soul;
