import React, { Fragment } from 'react';

import { userService } from '../../services';
import MetaHead from '../../components/reusable/MetaHead';
import FormLayout from '../../components/reusable/FormLayout';
import SigninForm from '../../components/auth/signin/SigninForm';
import ShopList from '../../components/shop/ShopList';


export default function ShopPage() {
  return (
    <Fragment>
      <ShopList></ShopList>
    </Fragment>
  );
}

