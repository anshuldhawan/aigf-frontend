import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { messageHistory, sendMessage } from "../../Redux/actions";
export const ChatFooter = ({ setMessaegState, BotData }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // let body = {
    //   message: "Response From Server",
    //   direction: "received",
    // };
    const callBack = (res) => {
      // setMessaegState((pre) => [...pre, ]);
      setText("");
      dispatch(messageHistory({ uid: BotData?.uid }));
    };
    dispatch(sendMessage({ uid: BotData?.uid, message: text }, callBack));
  };
  return (
    <>
      <div className="chat-footer">
        <div className="chat-text-input">
          <InputGroup className="mb-0">
            <Form.Control
              placeholder="Type your message here..."
              aria-label="chat"
              value={text}
              aria-describedby="basic-addon1"
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <div className="emoji-icon-send">
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsSvgjs="http://svgjs.com/svgjs"
                width="16"
                height="16"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M437.019 74.981C388.668 26.629 324.38 0 256 0S123.332 26.629 74.981 74.981C26.628 123.332 0 187.62 0 256s26.628 132.668 74.981 181.019C123.332 485.371 187.62 512 256 512s132.668-26.629 181.019-74.981C485.372 388.668 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 481.524c-124.354 0-225.524-101.17-225.524-225.524S131.646 30.476 256 30.476 481.524 131.646 481.524 256 380.354 481.524 256 481.524z"
                    fill="#b9b9b9"
                    data-original="#b9b9b9"
                  ></path>
                  <path
                    d="M200.622 188.396c-24.953-24.955-65.556-24.953-90.509 0-5.951 5.95-5.951 15.599 0 21.55 5.952 5.95 15.601 5.95 21.551 0 13.072-13.071 34.34-13.07 47.41 0 2.976 2.976 6.875 4.464 10.774 4.464s7.8-1.488 10.774-4.464c5.951-5.951 5.951-15.599 0-21.55zM401.884 188.396c-24.953-24.953-65.556-24.955-90.509 0-5.951 5.95-5.951 15.599 0 21.55 5.952 5.95 15.601 5.95 21.551 0 13.07-13.071 34.338-13.072 47.41 0 2.976 2.976 6.875 4.464 10.774 4.464s7.8-1.488 10.774-4.464c5.951-5.951 5.951-15.599 0-21.55zM391.111 267.175H120.889c-8.416 0-15.238 6.823-15.238 15.238 0 82.902 67.447 150.349 150.349 150.349s150.349-67.447 150.349-150.349c0-8.416-6.822-15.238-15.238-15.238zM256 402.286c-60.938 0-111.402-45.703-118.909-104.635H374.91c-7.508 58.932-57.972 104.635-118.91 104.635z"
                    fill="#b9b9b9"
                    data-original="#b9b9b9"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link onClick={handleSubmit} className="send-msg-btn">
              <div
                className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                role="button"
              >
                <i className="far fa-paper-plane"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
