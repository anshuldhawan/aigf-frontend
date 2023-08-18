import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, generatePath } from "react-router-dom";
import Profile1 from "../../assets/images/static/static-1.jpg";
import Profile2 from "../../assets/images/static/static-2.jpg";
import Profile3 from "../../assets/images/static/static-3.jpg";
import Profile4 from "../../assets/images/static/static-4.jpg";
import Profile5 from "../../assets/images/static/static-5.jpg";
import Profile7 from "../../assets/images/static/static-7.jpg";
import Profile8 from "../../assets/images/static/static-8.jpg";
import Profile9 from "../../assets/images/static/static-9.jpg";
import Profile10 from "../../assets/images/static/static-10.jpg";
import { useSelector, useDispatch } from "react-redux";
import { unlockBotList } from "../../Redux/Bots/actions";

export const AllCollection = () => {
  const { unlockBots, loading } = useSelector((s) => s.Bots);
  const dispatch = useDispatch();

  const getUnlockBotList = () => {
    dispatch(unlockBotList());
  };

  useEffect(() => {
    getUnlockBotList();
  }, []);

  const getPath = (id) => {
    const path = generatePath("/profile/:botId", { botId: id });
    return path;
  };

  return (
    <>
      <Container className="container-xl px-2 px-sm-3 main-all-homeprofiles">
        <Row className="row justify-content-start">
          {unlockBots?.map((item, index) => {
            const img = item?.images?.[0]?.url;
            console.log(img, "item");
            return (
              <Col lg={3} md={6} key={index}>
                <div className="position-relative mb-30">
                  <Link to={getPath(item?.uid)} className="proimg unlocked">
                    <img className="w-100" src={img} />
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
