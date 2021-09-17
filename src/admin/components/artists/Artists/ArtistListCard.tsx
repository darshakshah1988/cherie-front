import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';

import { ArtistData } from '../../../types';
import { DeleteIcon, EditIcon, PlusIcon } from '../../../svgs';

import Div from '../../../../components/styled/Div';
import { OutlinePrimaryStyles } from '../../../styles/reuse';

// Component
export default function ArtistListCard(props: ArtistData) {
  const { id, status, description, title, image } = props;
  return (
    <ArtistListCard.Card>
      <ArtistListCard.CardBody>
        <ArtistListCard.CardFlex>
          {/* ======= FlexA ======= */}
          <ArtistListCard.CardFlexA>
            <img src={image.src} alt={image.alt} />
          </ArtistListCard.CardFlexA>
          {/* ======= End - FlexA ======= */}

          {/* ======= FlexB ======= */}
          <ArtistListCard.CardFlexB>
            <ArtistListCard.CardTitlesWrapper>
              <ArtistListCard.CardTitle>{title}</ArtistListCard.CardTitle>
              <ArtistListCard.CardStatus $status={status}>
                {status}
              </ArtistListCard.CardStatus>
            </ArtistListCard.CardTitlesWrapper>

            <ArtistListCard.CardDescription>
              {description}
            </ArtistListCard.CardDescription>

            {/* ======= Add New Artwork Link ======= */}
            <Div $marginBottom={12}>
              <Link href="/admin/artworks/add" passHref>
                <ArtistListCard.AddArtworkLink>
                  <PlusIcon />
                  <span>Add Artwork</span>
                </ArtistListCard.AddArtworkLink>
              </Link>
            </Div>

            {/* ======= Add New Artwork Link ======= */}

            {/* ======= Absolute ======= */}
            <ArtistListCard.CardLinkGroup>
              <Link href={`/admin/artists/edit/${id}`}>
                <a>
                  <EditIcon width={18} height={18} />
                </a>
              </Link>

              <div role="link">
                <DeleteIcon width={18} height={18} />
              </div>
            </ArtistListCard.CardLinkGroup>
            {/* ======= End - Absolute ======= */}
          </ArtistListCard.CardFlexB>
          {/* ======= End - FlexB ======= */}
        </ArtistListCard.CardFlex>
      </ArtistListCard.CardBody>
    </ArtistListCard.Card>
  );
}

ArtistListCard.Card = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

ArtistListCard.CardBody = styled.div`
  flex: 1 1 auto;
  padding: 32px;
`;

/* ======= Flex =======  */
ArtistListCard.CardFlex = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  > div:first-child {
    margin-right: 32px;
  }
`;

ArtistListCard.CardFlexA = styled.div`
  & > img {
    display: block;
    border-radius: 5px;
    background-color: #eee;
    width: 185px;
    height: 185px;
    margin: 0 auto ${rem(24)};
  }

  @media (min-width: 768px) {
    & > img {
      margin: 0;
    }
  }
`;

ArtistListCard.CardFlexB = styled.div``;

/* ======= End - Flex =======  */

ArtistListCard.CardImageWrap = styled.div``;

/* ======= Titles =======  */
ArtistListCard.CardTitlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
`;

ArtistListCard.CardTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #272b2f;
  margin-bottom: 0;
  margin-right: 20px;
`;

ArtistListCard.CardStatus = styled.span<{ $status: string }>`
  font-size: 10px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ $status }) =>
    $status === 'Active' ? '#1bb964' : '#FC686F'};
  border-radius: 99999px;
  padding: 4px 16px;
`;

ArtistListCard.CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #aaaaaa;
  margin-bottom: 16px;
`;
/* ======= End - Titles =======  */

ArtistListCard.AddArtworkLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(6)} ${rem(14)};
  border-radius: 3px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;

  ${OutlinePrimaryStyles};

  > svg {
    margin-right: 8px;
    width: 12px;
    height: 12px;
  }
`;

/* ======= Link Group =======  */
ArtistListCard.CardLinkGroup = styled.div`
  display: inline-flex;
  align-items: center;

  & > a {
    color: #4e608e;
    margin-right: 12px;
  }

  & > div {
    color: #fc686f;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    position: absolute;
    top: 18px;
    right: 24px;
  }
`;

/* ======= End - Link Group =======  */
