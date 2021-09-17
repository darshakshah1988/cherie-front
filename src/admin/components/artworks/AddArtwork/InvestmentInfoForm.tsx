import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { rem } from 'polished';

import Div from '../../../../components/styled/Div';
import FormRow from '../../styled/FomRow';
import AdminFormInput from '../../styled/AdminFormInput';

export default function InvestmentInfoForm() {
  // ------------------ useForm hook ------------------
  const { register } = useForm();

  // ------------------ End - useForm hook ------------------

  return (
    <InvestmentInfoForm.Card>
      <InvestmentInfoForm.CardBody>
        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Title holders"
              id="artistName"
              placeholder="BEEPLE"
              RHFRef={{ ...register('titleHolders') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Ownership sales rate%"
              id="saleRate"
              placeholder="%"
              RHFRef={{ ...register('saleRate') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Percentage of shares left to be sold"
              id="sharesLeft"
              placeholder="%"
              RHFRef={{ ...register('sharesLeft') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Residual ownership/ total ownership"
              id="ownership"
              RHFRef={{ ...register('ownership') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Qty of our holdings"
              id="qtyHoldings"
              placeholder="%"
              RHFRef={{ ...register('qtyHoldings') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Cherie full amount public offering price"
              id="pop"
              RHFRef={{ ...register('pop') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>
      </InvestmentInfoForm.CardBody>
    </InvestmentInfoForm.Card>
  );
}

// Styled
const FRModify = css`
  flex-direction: column;
  & {
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`;

InvestmentInfoForm.Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  margin-top: 24px;
  min-height: 100vh;
  height: 100%;
`;

InvestmentInfoForm.CardBody = styled.div`
  padding: ${rem(48)};
`;
