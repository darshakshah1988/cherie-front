import styled, { css } from 'styled-components';
import { rem } from 'polished';

// Props
type Props = {
  step: number;
  formToggleStep: (step: number) => void;
};

// Component
export default function FormSteps(props: Props) {
  const { step, formToggleStep } = props;

  return (
    <div>
      {/* ============= Steps ============= */}
      <FormSteps.Wrapper>
        <FormSteps.Nav>
          <li>
            <FormSteps.Button
              type="button"
              className={step === 0 ? 'active' : ''}
              onClick={() => formToggleStep(0)}
            >
              Basic Details
            </FormSteps.Button>
          </li>

          <li>
            <FormSteps.Button
              type="button"
              className={step === 1 ? 'active' : ''}
              onClick={() => formToggleStep(1)}
            >
              Investment Info
            </FormSteps.Button>
          </li>

          <li>
            <FormSteps.Button
              type="button"
              className={step === 2 ? 'active' : ''}
              onClick={() => formToggleStep(2)}
            >
              Sales Info
            </FormSteps.Button>
          </li>

          <li>
            <FormSteps.Button
              type="button"
              className={step === 3 ? 'active' : ''}
              onClick={() => formToggleStep(3)}
            >
              Statistical Info
            </FormSteps.Button>
          </li>
        </FormSteps.Nav>
      </FormSteps.Wrapper>
      {/* ============= End - Steps ============= */}
    </div>
  );
}

// Styles
FormSteps.Wrapper = styled.div`
  display: flex;
`;

FormSteps.Button = styled.button<{ $disabled?: boolean }>`
  display: block;
  padding: ${rem(10)} ${rem(48)};

  color: #656565;
  font-size: 1rem;
  font-weight: 500;

  background-color: transparent;
  border: 1px solid transparent;
  box-shadow: none;

  user-select: none;
  border-radius: 9999px;
  transition: border-color 0.2s linear, background-color 0.2s ease,
    box-shadow 0.2s ease, color 0.2s ease;

  &:focus {
    outline: 0;
  }

  /* For Disable */
  ${({ $disabled }) => {
    if ($disabled) {
      return css`
        &:disabled,
        && {
          cursor: pointer;
          pointer-events: none;
        }
      `;
    }
  }}
`;

FormSteps.Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  width: 680px;

  padding: ${rem(8)} ${rem(12)};
  background-color: #f9f9f9;

  @media (min-width: 1200px) {
    flex-direction: row;
    border-radius: 9999px;
    margin: 0;
    width: auto;
  }

  ${FormSteps.Button}.active {
    color: #272b2f;
    background-color: #fff;
    border-color: #f1f1f1;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  }
`;
