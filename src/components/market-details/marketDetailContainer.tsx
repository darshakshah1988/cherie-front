import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { MarketContainer } from '../layouts/parts/MarketContainer'
import { MarketDetilCard } from './MarketDetailCard'
import Pagination from '../filters/Pagination'
const MarketDetailContainer = () => {
    function handelOnClick(){

    }


    return (
        <MarketDetailContainer.FullPageWrapper>
            <MarketContainer.Wrapper>
                <Image src="/ImageProd.png" height="200px" width="200px"></Image>
                <div>
                    <p> Yaoi kusama,2014</p>
                    <p> Total Split Ownerships:</p>
                    <p> 87,000 individuals</p>
                    <p> Public offering price:</p>
                    <p> 96.19 Japanese Yen</p>
                    

                </div>
            </MarketContainer.Wrapper>

            <div>
                <div>
                    <button>Full Trading</button>
                </div>
                <div>
                    <button>My Trading</button>
                </div>
            </div>

            <div>
                <MarketDetilCard></MarketDetilCard>
            </div>

            <div><Pagination
                        pageCount={Math.ceil(30/10)}
                        onPageChange={handelOnClick}
                        />
            </div>

            
        </MarketDetailContainer.FullPageWrapper>
    )
}

export default MarketDetailContainer


MarketDetailContainer.FullPageWrapper=styled.div`
    display: flex;
    flex-direction: row;
    width:1140px ;
`;

MarketContainer.Wrapper=styled.div`   
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    text-align: left;

`;