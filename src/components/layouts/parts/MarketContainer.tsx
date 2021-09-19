
import React from 'react'
import styled from 'styled-components';
import Pagination from '../../filters/Pagination';
import { MarketCard } from './MarketCard';


function handelOnClick(){

}

export const MarketContainer = () => {
    return (
        <MarketContainer.Wrapper>
            <MarketContainer.SwitchViewButtons>
                <MarketContainer.Button>
                     Traditional Artwork
                </MarketContainer.Button>
                <MarketContainer.Button>
                     NFT Artwork
                </MarketContainer.Button>

            </MarketContainer.SwitchViewButtons>

            <MarketContainer.CardContainer>                
                <MarketCard></MarketCard>
                <MarketCard></MarketCard>
                <MarketCard></MarketCard>
                <MarketCard></MarketCard>
                <MarketCard></MarketCard>
                <MarketCard></MarketCard>
            </MarketContainer.CardContainer>



            <Pagination
                pageCount={Math.ceil(30/ 10)}
                onPageChange={handelOnClick}
                />
        </MarketContainer.Wrapper>
    )
}


MarketContainer.Wrapper=styled.div`


`;

MarketContainer.SwitchViewButtons=styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;


`;



MarketContainer.CardContainer= styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1140px;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;


`;

MarketContainer.Button=styled.button`   
    font-family: Poppins;
    width: 200px;
    height: 50px;
    left: 675px;
    top: 231px; 
    color:#FC6076;
    font-size: 12px;
    border-radius: 24px;
    border: none;
    margin-top: 15px;
    background-color: white;
    :hover{
        background-color:  #F9F9F9;
;
    }

`;