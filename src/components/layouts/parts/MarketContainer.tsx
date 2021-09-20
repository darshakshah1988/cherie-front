
import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import Pagination from '../../filters/Pagination';
import { MarketCard } from './MarketCard';
import Arts from '../../../admin/constants/Arts';


const PageCount= Arts.length;

function handelOnClick(){

}

export const MarketContainer = () => {

    const [data]=useState(Arts);  

    return (
        <MarketContainer.Wrapper>
            <MarketContainer.SwitchViewButtons>
                <MarketContainer.Button >
                     Traditional Artwork
                </MarketContainer.Button>
                <MarketContainer.ActiveButton>
                     NFT Artwork
                </MarketContainer.ActiveButton>

            </MarketContainer.SwitchViewButtons>

            <MarketContainer.CardContainer>                
                <MarketCard cardItems={data}></MarketCard>
                
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
    :active{
        background-color:  #F9F9F9;
    }

`;


MarketContainer.ActiveButton=styled.button`   
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
    
    :hover{
        background-color:  #F9F9F9;
;
    }
    :active{
        background-color:  #F9F9F9;
    }

`;