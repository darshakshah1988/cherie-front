import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';

import { ArtistData } from '../../../types';
import { DeleteIcon, EditIcon, PlusIcon } from '../../../svgs';

import { OutlinePrimaryStyles } from '../../../styles/reuse';

// Component
export default function ArtistGridCard(props: ArtistData) {
  const { id, status, description, title, image } = props;
  return (
    <ArtistGridCard.Card>
      <ArtistGridCard.CardBody>
        <ArtistGridCard.CardImageWrap>
          <img src={image.src} alt={image.alt} />

          {/* =========== Absolute =========== */}

          <ArtistGridCard.CardStatus $status={status}>
            {status}
          </ArtistGridCard.CardStatus>

          <ArtistGridCard.CardLinkGroup>
            <Link href={`/admin/artists/edit/${id}`}>
              <a>
                <EditIcon width={14} height={14} />
              </a>
            </Link>

            <div role="link">
              <DeleteIcon width={14} height={14} />
            </div>
          </ArtistGridCard.CardLinkGroup>

          {/* =========== End - Absolute =========== */}
        </ArtistGridCard.CardImageWrap>

        <ArtistGridCard.CardTitle>{title}</ArtistGridCard.CardTitle>

        <ArtistGridCard.CardDescription>
          {description}
        </ArtistGridCard.CardDescription>

        <Link href="/admin/artworks/add" passHref>
          <ArtistGridCard.AddArtworkLink>
            <PlusIcon />
            <span>Add Artwork</span>
          </ArtistGridCard.AddArtworkLink>
        </Link>
      </ArtistGridCard.CardBody>
    </ArtistGridCard.Card>
  );
}

ArtistGridCard.Card = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

ArtistGridCard.CardBody = styled.div`
  flex: 1 1 auto;
  padding: 16px 16px;
`;

ArtistGridCard.CardImageWrap = styled.div`
  display: block;
  position: relative;

  /* Image on the card will be Square. */
  & {
    padding-top: 100%;
    background-color: #eee;
  }

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Manage Square Image. */
  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & > img {
    border-radius: 5px;
  }
`;

// =========== Absolute ===========
ArtistGridCard.CardStatus = styled.div<{ $status: string }>`
  position: absolute;
  top: 14px;
  left: 14px;

  font-size: 10px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ $status }) =>
    $status === 'Active' ? '#1bb964' : '#FC686F'};
  border-radius: 99999px;
  padding: 4px 12px;
`;

ArtistGridCard.CardLinkGroup = styled.div`
  background-color: #000;
  display: inline-flex;
  align-items: center;
  padding: 2px 18px;
  border-radius: 9999px;

  position: absolute;
  top: 14px;
  right: 14px;

  & > a {
    color: #fff;
    margin-right: 12px;
  }

  & > div {
    color: #fff;
    cursor: pointer;
  }
`;

// =========== End - Absolute ===========

// Title
ArtistGridCard.CardTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #272b2f;
  margin-top: 16px;
  margin-bottom: 8px;
`;

ArtistGridCard.CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #aaaaaa;
  margin-bottom: 16px;
`;

ArtistGridCard.AddArtworkLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-basis: 100%;
  padding: ${rem(12)} ${rem(14)};
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
