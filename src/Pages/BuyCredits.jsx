import React from 'react'
import { AllCredits } from '../Components/BuyCredits/AllCredits'
import { Header } from '../Layout/Header'
import { Navigation } from '../Layout/Navigation'

export const BuyCredits = () => {
    return (
        <>
            <div className='main-layout d-flex flex-row h-100'>
                <Navigation />
                <div className='profiles-home main-visible'>
                    <Header />
                    <AllCredits />
                </div>
            </div>
        </>
    )
}
