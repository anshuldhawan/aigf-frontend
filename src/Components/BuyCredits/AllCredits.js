import React, { useDebugValue, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creditList } from "../../Redux/actions";
import AddCard from "../../Components/AddCards/AddCard";

export const AllCredits = () => {
  const dispatch = useDispatch();
  const { creditLists, loading } = useSelector((s) => s.Credit);
  const [showModal, setShowModal] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState({});

  const getCreditList = () => {
    dispatch(creditList());
  };
  useEffect(() => {
    getCreditList();
  }, []);

  const handlePayment = (data) => {
    setSelectedCredit(data);
    setShowModal(true);
  };

  return (
    <>
      <Container className="container-xl px-2 px-sm-3 buy-credits-page">
        <div className="mt-0 mt-md-5">
          <div className="pricing ">
            <div className="cards d-flex justify-content-center align-items-center flex-wrap my-4">
              {creditLists?.map((item, index) => {
                return (
                  <>
                    {item.type === "Normal" && (
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
                            <button
                              className="btn btn-info"
                              onClick={() => handlePayment(item)}
                            >
                              <i className="fas fa-chevron-right d-none"></i>{" "}
                              <span>Buy Now</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    {item.type === "Most Popular" && (
                      <div className="card active border-0">
                        <div className="card-ribbon">
                          <span>most popular</span>
                        </div>
                        <ul>
                          <li className="pack text-capitalize">
                            {item?.creditType}
                          </li>
                          <li id="professional" className="price bottom-bar">
                            ${item.price}
                          </li>
                          <li className="bottom-bar">
                            {item?.creditQuantity} Credits
                          </li>
                          <li>
                            <button
                              className="btn btn-primary active-btn"
                              onClick={() => handlePayment(item)}
                            >
                              <i className="fas fa-chevron-right d-none"></i>{" "}
                              <span>Buy Now</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    {item.type === "Best Price" && (
                      <div className="card shadow border-0">
                        <div className="ribbons">Best Price</div>
                        <ul>
                          <li className="pack">{item?.creditType}</li>
                          <li id="master" className="price bottom-bar">
                            ${item.price}
                          </li>
                          <li className="bottom-bar">
                            {item?.creditQuantity} Credits
                          </li>
                          <li>
                            <button
                              className="btn btn-info"
                              onClick={() => handlePayment(item)}
                            >
                              <i className="fas fa-chevron-right d-none"></i>{" "}
                              <span>Buy Now</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* payment section  */}

        <AddCard
          show={showModal}
          hide={() => setShowModal(false)}
          selectedCredit={selectedCredit}
        />
      </Container>
    </>
  );
};
