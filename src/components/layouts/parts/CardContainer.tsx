import { Card } from '../parts/Card';
import styled from 'styled-components';

export const CardContainer = () => {
    return (
        <CardContainer.Wrapper>
             <CardContainer.Title>
                    NFT Artwork
            </CardContainer.Title>   
            <CardContainer.Artwork>
                   
                <Card/>    
                <Card/> 
                <Card/>

            </CardContainer.Artwork>
            <CardContainer.Title>
                Traditional Artwork
            </CardContainer.Title>

            <CardContainer.Artwork>
                   
                <Card/>    
                <Card/> 
                <Card/>

            </CardContainer.Artwork>

        </CardContainer.Wrapper>
    )
}

CardContainer.Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
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

`;

CardContainer.Artwork=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   

`;