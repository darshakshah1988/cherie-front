import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { isArrayLike } from 'lodash';
import { CardContent } from '@material-ui/core';



export const Card = () => {
   
   
    return (

       <Card.Wrapper>
           <Card.Media>
                <Image src='/ImageProd.png' height="100%" width="100%" layout="fill" />
                <Card.Button>On Sale</Card.Button>

            </Card.Media>
            <Card.Content>
                <Card.TopContent>
                <Card.Title>
                    TAHNEE LANDSLIDE Untitled Greens,2014
                </Card.Title>

                <Card.Details>
                    Holders: 345 People
                </Card.Details>

                <Card.Details>
                    Sales Rate: 35%
                </Card.Details>
                
                <Card.Details>
                   Residual Qualtity:345,345 Pieces
                </Card.Details>
                
                <Card.Details>
                   Publish Date: 13 Sep 2021
                </Card.Details>

                </Card.TopContent>
                <Card.ContentBottom>
                    <Card.Action>
                        10 Likes
                    </Card.Action>

                    <Card.Action>
                        38 comments
                    </Card.Action>

                </Card.ContentBottom>

                <Card.Seperator/>
                
                <Card.ContentBottom>
                    <Card.Action>
                        <Card.BottomButton> <img src="/Like.svg" alt="An SVG of an eye" />  Like</Card.BottomButton>
                    </Card.Action>

                    <Card.Action>
                        <Card.BottomButton><img src="/Comment.svg" alt="An SVG of an eye" />  Comment</Card.BottomButton>
                    </Card.Action>

                </Card.ContentBottom>
                


               
            </Card.Content>
       </Card.Wrapper>
    )
}

Card.Wrapper = styled.div`    
    display: flex;
    
    text-align: left;
    margin-top : 20px ;
    margin-bottom: 20px;
    background-color: #F9F9F9;  
    max-width: 300px;  
    flex-direction:column;
    min-height: 500px;
    border-radius:10px ;
    align-items: left;
    margin-left: 10px;
  
  
`;

Card.Button=styled.button`
   
    position:absolute;
    margin-top: 5px;
    margin-right: 5px;
    top: 0;
    right: 0;   
    color: #1BB964;
    font-size: 12px;
    border-radius: 15px;

`;





Card.Media = styled.div`
    position: relative;
    flex: 50%;
    width: 100%;
    object-fit: cover;
    padding:0px;
  
`;

Card.Content = styled.div`
    margin-top: 10px;
   margin: 10px 10px 10px 10px;
   
  
`;

Card.Title = styled.div`
    margin-bottom: 10px;
  
`;

Card.Details = styled.p`
    font-family: Poppins;
    font-size: 16px;
    margin: 0px;
  
`;

Card.Action=styled.div`
    flex: 50;


`;
Card.Seperator=styled.hr`
    border-top: 8px  #EAEAEA;
    border-radius: 5px;

`;
Card.ContentBottom=styled.div`
    display: flex;
    margin-top: 10px;
   
`;

Card.TopContent=styled.div`
    padding: 10px;


`;



Card.BottomButton=styled.button`
    background-color: #F9F9F9;
    border: none;
    text-align: center;
     text-decoration: none;
     padding: 10px ;
     

`;




