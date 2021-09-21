
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import Pagination from '../../filters/Pagination';
import { MarketCard } from './MarketCard';
import Arts from '../../../admin/constants/Arts';
import {TradionalArts} from '../../../admin/constants/Arts';
import { toUpper } from 'lodash';

const PageCount= Arts.length;
const PageSecCount=TradionalArts.length;


export const MarketContainer = () => {
    const [change,setChange]=useState(false);
    const [nftPage,setNftpage]=useState(false);


    const [data]=useState(Arts);  
    const [currentPage,setCurrentPage]=useState(1);    
    const [postPerPage]=useState(6);
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost- postPerPage;
    const currentData=data.slice(indexOfFirstPost,indexOfLastPost)   
    
    
    const [dataSec]=useState(TradionalArts);      
    const [currentSecondPage,setCurrentSecondPage]=useState(1); 
    const [postPerSecPage]=useState(6);
    const indexOfLastPostSec=currentSecondPage * postPerSecPage;
    const indexOfFirstPostSec=indexOfLastPostSec- postPerPage; 
    const seconPagiData=dataSec.slice(indexOfFirstPostSec,indexOfLastPostSec);


    useEffect(() => {     
    },[currentData,nftPage]);

    function handlePageClicked(number:any){
        setCurrentPage(number.selected+1);
        setCurrentSecondPage(number.selected+1);
       
    }
    function onClickNFT(){
        setChange(true);   
        setNftpage(false); 
        
    }
    function onClickTraditional(){
        setChange(false);
        setNftpage(true); 
        
        
    }

    return (
        <MarketContainer.Wrapper>
            <MarketContainer.SwitchViewButtons>
                
                <MarketContainer.Button onClick={onClickTraditional} primary={change}>
                     Traditional Artwork
                </MarketContainer.Button>
                <MarketContainer.Button  onClick={onClickNFT} primary={nftPage}>
                     NFT Artwork
                </MarketContainer.Button>

            </MarketContainer.SwitchViewButtons>

            {
                change ?                 
                <MarketContainer.CardContainer>                
                <MarketCard cardItems={seconPagiData}></MarketCard>  
                </MarketContainer.CardContainer>                     
                :
                <MarketContainer.CardContainer>                
                <MarketCard cardItems={currentData}></MarketCard>
                </MarketContainer.CardContainer>
            }{
                change? 
                
                <Pagination
                        pageCount={Math.ceil(PageSecCount/ 6)}
                        onPageChange={handlePageClicked}
                />:
                <Pagination
                        pageCount={Math.ceil(PageCount/ 6)}
                        onPageChange={handlePageClicked}
                        />
            }
            
           
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

interface Props{
    primary:boolean;
}


MarketContainer.Button=styled.button <Props>`
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
    }
    background: ${props => props.primary ? "white" : "#F9F9F9"};
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