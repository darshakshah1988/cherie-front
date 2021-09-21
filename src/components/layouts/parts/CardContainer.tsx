import {Card}  from '../parts/Card';
import styled from 'styled-components';
import Pagination from '../../filters/Pagination';
import { useEffect, useState } from 'react';
import Arts from '../../../admin/constants/Arts';
import {TradionalArts} from '../../../admin/constants/Arts';




const PageCount= Arts.length;
const secPageCount=TradionalArts.length;



export const CardContainer = () => {

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
    
    },[currentData]);
    
    function handlePageClicked(number:any){
        setCurrentPage(number.selected+1)
      
    }
    
    function handelSecondPage(number:any){  
        setCurrentSecondPage(number.selected+1)
    }
   
      
       
    return (
        <CardContainer.Wrapper>
             <CardContainer.Title>
                    NFT Artwork
            </CardContainer.Title>   
            <CardContainer.Artwork>                   
                <Card cardItems={currentData}/>              

            </CardContainer.Artwork>
            <Pagination
                pageCount={Math.ceil(PageCount/ 6)}
                onPageChange={handlePageClicked}
                />

            <CardContainer.Title>
                Traditional Artwork
            </CardContainer.Title>
            
            <CardContainer.Artwork>
                <Card cardItems={seconPagiData}/>
            </CardContainer.Artwork>

            <Pagination
                pageCount={Math.ceil(secPageCount/ 6)}
                onPageChange={handelSecondPage}
                />

        </CardContainer.Wrapper>
    )
}

CardContainer.Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1140px;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    
    
`;

CardContainer.Title = styled.div`
    display: flex;
    text-align: left;
    margin-top: 30px;
    margin-left: 0px;
    font-size:32px;
    width: 100%;
   
`;

CardContainer.Artwork=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   

`;