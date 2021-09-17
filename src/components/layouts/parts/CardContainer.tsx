import { Card } from '../parts/Card';
import styled from 'styled-components';
import Pagination from '../../filters/Pagination';
import { useState } from 'react';

const cardData=[{
    title: "Tahnee LansdaleUntitled Greens, 2014",
    Holders: "345 People ",
    SolesRate: "35%",
    ResidualQuantity:"345,345 Pieces",   
    PublishDate:" 13 Sep 2021",
    },
    {
        title: "Tahnee LansdaleUntitled Greens, 2014",
        Holders: "345 People ",
        SolesRate: "35%",
        ResidualQuantity:"345,345 Pieces",   
        PublishDate:" 13 Sep 2021",
    },
    {
        title: "Tahnee LansdaleUntitled Greens, 2014",
        Holders: "345 People ",
        SolesRate: "35%",
        ResidualQuantity:"345,345 Pieces",   
        PublishDate:" 13 Sep 2021",
    }




]




function handlePageClicked(){


}




export const CardContainer = () => {
    return (
        <CardContainer.Wrapper>
             <CardContainer.Title>
                    NFT Artwork
            </CardContainer.Title>   
            <CardContainer.Artwork>
                   
                {
                    cardData.map((data)=>(<Card/>))
                }

            </CardContainer.Artwork>
            <Pagination
                pageCount={Math.ceil(50 / 10)}
                onPageChange={handlePageClicked}
                />

            <CardContainer.Title>
                Traditional Artwork
            </CardContainer.Title>

            <CardContainer.Artwork>
                   {
                    cardData.map((data)=>(<Card/>))
                    }
            </CardContainer.Artwork>

            <Pagination
                pageCount={Math.ceil(50 / 10)}
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
    margin-left: 10px;
    font-size:32px;
    width: 100%;
`;

CardContainer.Artwork=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   

`;