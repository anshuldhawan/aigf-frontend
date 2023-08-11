import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Profile1 from "../../assets/images/static/static-1.jpg";
import Profile2 from "../../assets/images/static/static-2.jpg";
import Profile4 from "../../assets/images/static/static-4.jpg";
import Profile5 from "../../assets/images/static/static-5.jpg";
import Profile7 from "../../assets/images/static/static-7.jpg";
import Profile8 from "../../assets/images/static/static-8.jpg";
import Profile9 from "../../assets/images/static/static-9.jpg";
import Profile10 from "../../assets/images/static/static-10.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getBot } from "../../Redux/actions";
import DummyImages from "../../assets/images/dummy.png";

export const SeeProfile = () => {
  const dispatch = useDispatch();
  const { botId } = useParams();
  const botData = useSelector((s) => s?.User?.getBot?.data);

  useEffect(() => {
    if (botId) {
      dispatch(getBot({ uid: botId }));
    }
  }, [botId]);
  return (
    <>
      <Container className="container-xl main-all-homeprofiles see-profile-all container px-2 px-sm-3">
        <div className="myprof d-block d-lg-flex">
          <div className="myproimg">
            <img src={botData?.profileImage || DummyImages} />
          </div>
          <div className="prodesc">
            <h2>{botData?.name}</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
            <p className="text-muted mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to={`/chats/${botId}`} className="btn my-btn btn-primary">
              Chat With Me
            </Link>
          </div>
        </div>

        <div className="row">
          {botData &&
            botData?.images?.length > 0 &&
            botData?.images.map((item) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="position-relative">
                    <div
                      className="proimg"
                      data-toggle="modal"
                      data-target="#locked"
                    >
                      <img src={item.url} />
                      <div className="lockedpro">
                        <i className="fas fa-lock"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile2} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile10} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile4} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile5} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile9} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile7} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile8} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};
