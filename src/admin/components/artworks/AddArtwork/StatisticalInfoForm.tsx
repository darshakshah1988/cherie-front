import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { rem } from 'polished';

import Div from '../../../../components/styled/Div';
import FormRow from '../../styled/FomRow';
import AdminFormInput from '../../styled/AdminFormInput';
import AdminSingleGraphUpload from '../../styled/AdminSingleGraphUpload';

export default function StatisticalInfoForm() {
  // ------------------ useForm hook ------------------
  const { control, register } = useForm();

  // ------------------ End - useForm hook ------------------

  return (
    <StatisticalInfoForm.Card>
      <StatisticalInfoForm.CardBody>
        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Similar work average annual growth"
              id="similarAnnualGrowth"
              RHFRef={{ ...register('similarAnnualGrowth') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Statistics about the similar artwork"
              id="similarStat"
              RHFRef={{ ...register('similarStat') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Works from high trading volume and trading price"
              id="highTrade"
              RHFRef={{ ...register('highTrade') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Estimated value"
              id="estimatedValue"
              RHFRef={{ ...register('estimatedValue') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Average Annual value growth rate of similar artwork"
              id="similarAverageGrowth"
              RHFRef={{ ...register('similarAverageGrowth') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Average annual auction transaction in last 3 years"
              id="auctionLast"
              RHFRef={{ ...register('auctionLast') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        <FormRow styled={FRModify}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Average number of auction in last 3 year"
              id="auctionNumber"
              RHFRef={{ ...register('auctionNumber') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Average annual auction bid rate over last 3 years"
              id="auctionBid"
              RHFRef={{ ...register('auctionBid') }}
              autoComplete="off"
            />
          </Div>
        </FormRow>

        {/* ------------------ File Upload  ------------------ */}
        <FormRow styled={FRModify2}>
          <Div>
            <AdminSingleGraphUpload
              control={control}
              name="graphUploadA"
              text="Upload Graph"
              onAcceptedFiles={a => undefined}
              onRejectedFiles={a => undefined}
            />
          </Div>
          <Div>
            <AdminSingleGraphUpload
              control={control}
              name="graphUploadB"
              text="Upload Graph"
              onAcceptedFiles={a => undefined}
              onRejectedFiles={a => undefined}
            />
          </Div>
        </FormRow>
        {/* ------------------ End - File Upload  ------------------ */}
      </StatisticalInfoForm.CardBody>
    </StatisticalInfoForm.Card>
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
  margin-top: ${rem(8)};
  & {
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`;

StatisticalInfoForm.Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  margin-top: 24px;
  min-height: 100vh;
  height: 100%;
`;

StatisticalInfoForm.CardBody = styled.div`
  padding: ${rem(48)};
`;
