import { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import FormSteps from './FormSteps';
import BasicDetailsForm from './BasicDetailsForm';
import InvestmentInfoForm from './InvestmentInfoForm';
import SalesInfoForm from './SalesInfoForm';
import StatisticalInfoForm from './StatisticalInfoForm';

import Div from '../../../../components/styled/Div';
import {
  AdminSubmitButtonStyles,
  DangerStyles,
  PrimaryStyles
} from '../../../styles/reuse';

export default function AddArtworkForm() {
  // Here we can manage the state of whole artwork form
  const [formStep, setFormStep] = useState<number>(0);

  const formToggleStep = useCallback((step: number) => {
    setFormStep(step);
  }, []);

  const formCompleteStep = useCallback(() => {
    setFormStep(prev => {
      if (prev === 3) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, []);

  const formBackStep = useCallback(() => {
    setFormStep(prev => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [formStep]);

  return (
    <Fragment>
      <Div $marginBottom={24}>
        <FormSteps formToggleStep={formToggleStep} step={formStep} />
      </Div>

      <Div $marginBottom={32}>
        {formStep === 0 ? <BasicDetailsForm /> : null}
        {formStep === 1 ? <InvestmentInfoForm /> : null}
        {formStep === 2 ? <SalesInfoForm /> : null}
        {formStep === 3 ? <StatisticalInfoForm /> : null}
      </Div>

      <AddArtworkForm.ButtonWrapper>
        <Div>
          <AddArtworkForm.ButtonA>Save as draft</AddArtworkForm.ButtonA>
        </Div>
        <Div>
          <AddArtworkForm.ButtonA type="button" onClick={formCompleteStep}>
            Send for approval
          </AddArtworkForm.ButtonA>
        </Div>
        <Div>
          <AddArtworkForm.ButtonB type="button" onClick={formBackStep}>
            Cancel
          </AddArtworkForm.ButtonB>
        </Div>
      </AddArtworkForm.ButtonWrapper>
    </Fragment>
  );
}

// Styles
AddArtworkForm.ButtonWrapper = styled.div`
  & > div:not(:last-child) {
    margin-bottom: ${rem(16)};
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: nowrap;

    & > div:not(:last-child) {
      margin-bottom: 0;
      margin-right: ${rem(16)};
    }
  }
`;

AddArtworkForm.ButtonA = styled.button`
  ${AdminSubmitButtonStyles};
  ${PrimaryStyles};
  & {
    padding: ${rem(10)} ${rem(32)};
  }
`;
AddArtworkForm.ButtonB = styled.button`
  ${AdminSubmitButtonStyles};
  ${DangerStyles};
  & {
    padding: ${rem(10)} ${rem(32)};
  }
`;
