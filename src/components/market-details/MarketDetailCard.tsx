import styled from "styled-components"



export const MarketDetilCard = () => {
    return (
        <MarketDetilCard.Wrapper>
                
                    
                        <MarketDetilCard.Card>
                            <MarketDetilCard.Body>
                                <MarketDetilCard.Content>
                                    1 Piece: 101.2 Japanese Yen
                                </MarketDetilCard.Content>
                                <MarketDetilCard.Content>
                                    Sale Quantyti: 50 pcs
                                    Total Amount: 5592 Japanese Yen
                                    Registration: 2021-07-28
                                </MarketDetilCard.Content>

                                <button>Buying</button>
                
                            </MarketDetilCard.Body>
                            </MarketDetilCard.Card>
               

        </MarketDetilCard.Wrapper>
    )
}

MarketDetilCard.Wrapper=styled.div`



`;

MarketDetilCard.Body=styled.div`
    


`;

MarketDetilCard.Card=styled.div`
    


`;

MarketDetilCard.Content=styled.div`
    


`;