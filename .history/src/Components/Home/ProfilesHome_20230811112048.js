import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile1 from "../../assets/images/static/static-1.jpg";
import { userBotList } from "../../Redux/actions";

export const ProfilesHome = () => {
  const dispatch = useDispatch();
  const BotList = useSelector((s) => s?.User?.botList?.data);
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    dispatch(userBotList());
  }, [dispatch, userToken]);

  console.log(BotList, "list her");

  return (
    <>
      <Container className="container-xl px-2 px-sm-3 main-all-homeprofiles">
        <Row className="row justify-content-center">
          {BotList &&
            BotList.length > 0 &&
            BotList.map((item, idx) => {
              return (
                <Col lg={3} md={6} key={idx}>
                  <div className="position-relative mb-30">
                    <Link
                      to={`/profile/${item.uid}`}
                      className="proimg unlocked"
                    >
                      <img className="w-100" src={item.profileImage} />
                    </Link>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
