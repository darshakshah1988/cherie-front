import { useState, Fragment } from 'react';
import styled from 'styled-components';

import Breadcrumb from '../../reuseable/Breadcrumb';
import ArtistRenderer from './ArtistRenderer';
import { GridIcon, ListIcon } from '../../../svgs';

import Flexer from '../../styled/Flexer';
import AddLink from '../../styled/AddLink';

// Types
type DisplayMode = 'grid' | 'list';

// Component
export default function ArtistListing() {
  const [display, setDisplay] = useState<DisplayMode>('list');

  function changeDisplayMode(mode: DisplayMode) {
    setDisplay(mode);
  }

  return (
    <Fragment>
      <Flexer
        leftNode={
          <Breadcrumb
            data={[
              { path: '/admin', text: 'Dashboard' },
              { path: '', text: 'Artist Listing' }
            ]}
          />
        }
        rightNode={<AddLink href="/admin/artists/add">Add New Artist</AddLink>}
      />

      {/*  Text */}
      <ArtistListing.Heading>
        {/*  Heading */}
        <ArtistListing.SpanGap>Artist Listing</ArtistListing.SpanGap>

        {/* ButtonGroup */}
        <ArtistListing.ButtonIconGroup>
          <ArtistListing.IconButton
            type="button"
            className={display === 'grid' ? 'active' : ''}
            onClick={() => changeDisplayMode('grid')}
          >
            <GridIcon />
          </ArtistListing.IconButton>
          <ArtistListing.IconButton
            type="button"
            className={display === 'list' ? 'active' : ''}
            onClick={() => changeDisplayMode('list')}
          >
            <ListIcon />
          </ArtistListing.IconButton>
        </ArtistListing.ButtonIconGroup>
      </ArtistListing.Heading>

      {/* ================== ArtistRenderer ==================  */}
      <ArtistRenderer display={display} />
      {/* ================== End - ArtistRenderer ==================  */}
    </Fragment>
  );
}

ArtistListing.Heading = styled.h1`
  margin-bottom: 0;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.black};
  display: flex;
  align-items: center;
`;

ArtistListing.SpanGap = styled.span`
  margin-right: 24px;
`;

ArtistListing.ButtonIconGroup = styled.span`
  display: inline-flex;
  align-items: center;
  flex-direction: row;

  & > :not(:last-child) {
    margin-right: 12px;
  }
`;

ArtistListing.IconButton = styled.button`
  & {
    width: 48px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 4px;
    background-color: transparent;
    border: 1px solid #eee;
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.functional.primary};
    transition: border-color 0.1s ease-in, color 0.1s ease-in;
  }

  &.active {
    color: ${({ theme }) => theme.colors.functional.danger};
    border-color: #ffe2e4;
  }
`;
