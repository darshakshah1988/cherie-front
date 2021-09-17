import { Fragment } from 'react';

import Breadcrumb from '../../reuseable/Breadcrumb';

import Flexer from '../../styled/Flexer';
import AddArtworkForm from './AddArtworkForm';

// Component
export default function AddArtwork() {
  // Here you can control state management of this component

  return (
    <Fragment>
      {/*  Text */}
      <Flexer
        leftNode={
          <Breadcrumb
            data={[
              { path: '/admin', text: 'Dashboard' },
              { path: '', text: 'Add Artwork' }
            ]}
          />
        }
      />

      {/*  Form */}
      <AddArtworkForm />
    </Fragment>
  );
}
