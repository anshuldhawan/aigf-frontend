import React, { useDebugValue, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creditList } from "../../Redux/actions";
import AddCard from "../../Components/AddCards/AddCard";

export const AllCredits = () => {
  const dispatch = useDispatch();
  const { creditLists, loading } = useSelector((s) => s.Credit);
  const [showModal, setShowModal] = useState(false);

  const getCreditList = () => {
    dispatch(creditList());
  };
  useEffect(() => {
    getCreditList();
  }, []);
  return (
    <>
      <Container className="container-xl px-2 px-sm-3 buy-credits-page">
        <div className="mt-0 mt-md-5">
          <div className="pricing ">
            <div className="cards d-flex justify-content-center align-items-center flex-wrap my-4">
              {creditLists?.map((item, index) => {
                return (
                  <div className="card shadow border-0 mx-3">
                    <ul>
                      <li className="pack text-capitalize">
                        {item?.creditType}
                      </li>
                      <li id="basic" className="price bottom-bar">
                        ${item?.price}
                      </li>
                      <li className="bottom-bar">
                        {item?.creditQuantity} Credits
                      </li>
                      <li>
                        <button className="btn btn-info">
                          <i className="fas fa-chevron-right d-none"></i>{" "}
                          <span>Buy Now</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}

              {/* <div className="card active border-0">
                <div className="card-ribbon">
                  <span>most popular</span>
                </div>
                <ul>
                  <li className="pack">Standard</li>
                  <li id="professional" className="price bottom-bar">
                    $50
                  </li>
                  <li className="bottom-bar">20 Credits</li>
                  <li>
                    <button className="btn btn-primary active-btn">
                      <i className="fas fa-chevron-right d-none"></i>{" "}
                      <span>Buy Now</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card shadow border-0">
                <div className="ribbons">Best Price</div>
                <ul>
                  <li className="pack">Premium</li>
                  <li id="master" className="price bottom-bar">
                    $100
                  </li>
                  <li className="bottom-bar">45 Credits</li>
                  <li>
                    <button className="btn btn-info">
                      <i className="fas fa-chevron-right d-none"></i>{" "}
                      <span>Buy Now</span>
                    </button>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* payment section  */}

        <AddCard show={showModal} onHide={() => setShowModal(false)} />
      </Container>
    </>
  );
};
