import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { rem } from 'polished';

import Div from '../../../../components/styled/Div';
import FormRow from '../../styled/FomRow';
import AdminFormInput from '../../styled/AdminFormInput';
import AdminFormDateInput from '../../styled/AdminFormDateInput';

export default function SalesInfoForm() {
  // ------------------ useForm hook ------------------
  const { control, register } = useForm();

  // ------------------ End - useForm hook ------------------

  return (
    <SalesInfoForm.Card>
      <SalesInfoForm.CardBody>
        {/* ------------------ 1st Form Row  ------------------ */}
        <FormRow styled={FRModify}>
          <Div>
            <AdminFormDateInput
              control={control}
              label={true}
              labelText="Sales start date"
              id="saleStartDate"
            />
          </Div>

          <Div>
            <AdminFormDateInput
              control={control}
              label={true}
              labelText="Sales end date"
              id="saleEndDate"
            />
          </Div>
        </FormRow>
        {/* ------------------ End - 1st Form Row  ------------------ */}

        {/* ------------------ 2nd Form Row  ------------------ */}
        <FormRow styled={FRModify2}>
          {/* ------------------ First Col  ------------------ */}
          <Div>
            <Div $marginBottom={8}>
              <SalesInfoForm.Label htmlFor="firstSaleStartDate">
                1st Sale start date and sale qty
              </SalesInfoForm.Label>
            </Div>

            <FormRow styled={FRModify}>
              <Div>
                <AdminFormDateInput
                  control={control}
                  label={false}
                  id="firstSaleStartDate"
                />
              </Div>

              <Div>
                <AdminFormInput
                  type="text"
                  label={false}
                  id="firstSaleQty"
                  RHFRef={{ ...register('firstSaleQty') }}
                  placeholder="Sale Qty"
                  autoComplete="off"
                />
              </Div>
            </FormRow>
          </Div>
          {/* ------------------ End - First Col  ------------------ */}

          {/* ------------------ Second Col  ------------------ */}
          <Div>
            <Div $marginBottom={8}>
              <SalesInfoForm.Label htmlFor="secondSaleStartDate">
                2nd Sales start date and sale qty
              </SalesInfoForm.Label>
            </Div>

            <FormRow styled={FRModify}>
              <Div>
                <AdminFormDateInput
                  control={control}
                  label={false}
                  id="secondSaleStartDate"
                />
              </Div>

              <Div>
                <AdminFormInput
                  type="text"
                  label={false}
                  id="secondSaleQty"
                  RHFRef={{ ...register('secondSaleQty') }}
                  placeholder="Sale Qty"
                  autoComplete="off"
                />
              </Div>
            </FormRow>
          </Div>
          {/* ------------------ End - Second Col  ------------------ */}
        </FormRow>
        {/* ------------------ End - 2nd Form Row  ------------------ */}

        {/* ------------------ 3rd Form Row  ------------------ */}
        <FormRow styled={FRModify3}>
          {/* ------------------ First Col  ------------------ */}
          <Div>
            <Div $marginBottom={8}>
              <SalesInfoForm.Label htmlFor="thirdSaleStartDate">
                3rd Sale start date and sale qty
              </SalesInfoForm.Label>
            </Div>

            <FormRow styled={FRModify}>
              <Div>
                <AdminFormDateInput
                  control={control}
                  label={false}
                  id="thirdSaleStartDate"
                />
              </Div>

              <Div>
                <AdminFormInput
                  type="text"
                  label={false}
                  id="thirdSaleQty"
                  RHFRef={{ ...register('thirdSaleQty') }}
                  placeholder="Sale Qty"
                  autoComplete="off"
                />
              </Div>
            </FormRow>
          </Div>
          {/* ------------------ End - First Col  ------------------ */}
        </FormRow>
        {/* ------------------ End - 3rd Form Row  ------------------ */}
      </SalesInfoForm.CardBody>
    </SalesInfoForm.Card>
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

const FRModify2 = css`
  flex-direction: column;
  & {
    @media (min-width: 992px) {
      flex-direction: row;
      & > div {
        margin-bottom: 0;
      }
    }
  }
`;

const FRModify3 = css`
  flex-direction: column;
  & {
    @media (min-width: 992px) {
      flex-direction: row;
      & > div {
        max-width: 50%;
        margin-bottom: 0;
      }
    }
  }
`;

SalesInfoForm.Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #718898;
  user-select: none;
`;

// Styles
SalesInfoForm.SingleRow = styled.div<{
  $marginBottom?: number;
}>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;

  & > div {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }

  & > div {
    margin-bottom: ${({ $marginBottom }) =>
      $marginBottom ? rem($marginBottom) : rem(20)};
  }
`;

SalesInfoForm.Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  margin-top: 24px;
  min-height: 100vh;
  height: 100%;
`;

SalesInfoForm.CardBody = styled.div`
  padding: ${rem(48)};
`;
