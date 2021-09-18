import {Card}  from '../parts/Card';
import styled from 'styled-components';
import Pagination from '../../filters/Pagination';
import { useEffect, useState } from 'react';
import Arts from '../../../admin/constants/Arts';
import { ArtCardData } from '../../../admin/types/artTypes';
import { number } from 'yup/lib/locale';



const PageCount= Arts.length;



export const CardContainer = () => {

    const [data,setData]=useState(Arts);        
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostsPerPage]=useState(6);
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost- postPerPage;
    const currentData=data.slice(indexOfFirstPost,indexOfLastPost)    
    
    useEffect(() => { 
    
    },[currentPage]);
    
    function handlePageClicked(number:any){
        
        console.log(number.selected)
        setCurrentPage(number.selected+1)
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
                pageCount={Math.ceil(30 / 10)}
                onPageChange={handlePageClicked}
                />

            <CardContainer.Title>
                Traditional Artwork
            </CardContainer.Title>

            <CardContainer.Artwork>
                <Card cardItems={data}/>
            </CardContainer.Artwork>

            <Pagination
                pageCount={Math.ceil(PageCount/ 10)}
                onPageChange={handlePageClicked}
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