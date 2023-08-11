import React from 'react'
import { Container } from 'react-bootstrap'

export const AllCredits = () => {
    return (
        <>
            <Container className="container-xl px-2 px-sm-3 buy-credits-page">
                <div className="mt-0 mt-md-5">
                    <div className="pricing pt-4">
                        <div className="cards d-flex justify-content-center align-items-center flex-wrap">
                            <div className="card shadow border-0">
                                <ul>
                                    <li className="pack">Basic</li>
                                    <li id="basic" className="price bottom-bar">$10</li>
                                    <li className="bottom-bar">3 Credits</li>
                                    <li><button className="btn btn-info"><i className="fas fa-chevron-right d-none"></i> <span>Buy Now</span></button></li>
                                </ul>
                            </div>
                            <div className="card active border-0">
                                <div className="card-ribbon">
                                    <span>most popular</span>
                                </div>
                                <ul>
                                    <li className="pack">Standard</li>
                                    <li id="professional" className="price bottom-bar">$50</li>
                                    <li className="bottom-bar">20 Credits</li>
                                    <li><button className="btn btn-primary active-btn"><i className="fas fa-chevron-right d-none"></i> <span>Buy Now</span></button></li>
                                </ul>
                            </div>
                            <div className="card shadow border-0">
                                <div className="ribbons">Best Price</div>
                                <ul>
                                    <li className="pack">Premium</li>
                                    <li id="master" className="price bottom-bar">$100</li>
                                    <li className="bottom-bar">45 Credits</li>
                                    <li><button className="btn btn-info"><i className="fas fa-chevron-right d-none"></i> <span>Buy Now</span></button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}
