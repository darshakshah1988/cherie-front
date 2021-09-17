import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { rem } from 'polished';

import Div from '../../../../components/styled/Div';
import FormRow from '../../styled/FomRow';
import AdminFormInput from '../../styled/AdminFormInput';
import AdminFormDateInput from '../../styled/AdminFormDateInput';
import AdminSingleFileUpload from '../../styled/AdminSingleFileUpload';
import AdminTextarea from '../../styled/AdminTextarea';

export default function BasicDetailsForm() {
  // ------------------ useForm hook ------------------
  const { register, control } = useForm();

  // ------------------ End - useForm hook ------------------

  return (
    <BasicDetailsForm.Card>
      <BasicDetailsForm.CardBody>
        <FormRow styled={FRModify1}>
          <Div>
            <AdminFormInput
              type="text"
              label={true}
              labelText="Artist Name"
              id="artistName"
              placeholder="BEEPLE"
              RHFRef={{ ...register('artistName') }}
              autoComplete="off"
            />
          </Div>

          <Div>
            <AdminFormDateInput
              control={control}
              label={true}
              labelText="Date"
              id="date"
            />
          </Div>
        </FormRow>

        {/* ------------------ New Wrapper  ------------------ */}

        <BasicDetailsForm.NewWrapper>
          <BasicDetailsForm.NewWrapperBody>
            <BasicDetailsForm.FormGroup>
              <BasicDetailsForm.FormGroupSideA>
                {/* ------------------ File Upload  ------------------ */}
                <AdminSingleFileUpload
                  control={control}
                  name="notableArtworks"
                  text="Add ARTWORK IMAGE"
                  width={314}
                  height={314}
                  acceptedFormats="image/jpg, image/jpeg, image/png"
                  onAcceptedFiles={a => undefined}
                  onRejectedFiles={a => undefined}
                />
                {/* ------------------ End - File Upload  ------------------ */}
              </BasicDetailsForm.FormGroupSideA>

              <BasicDetailsForm.FormGroupSideB>
                {/* ------------------ Row 2  ------------------ */}
                <FormRow styled={FRModify}>
                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Artwork Name"
                      id="artworkName"
                      placeholder="BEEPLE"
                      RHFRef={{ ...register('artworkName') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Artwork Price"
                      id="artworkPrice"
                      placeholder="$500"
                      RHFRef={{ ...register('artworkPrice') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Material"
                      id="material"
                      placeholder="BEEPLE"
                      RHFRef={{ ...register('material') }}
                      autoComplete="off"
                    />
                  </Div>
                </FormRow>
                {/* ------------------ End - Row 2  ------------------ */}

                {/* ------------------ Row 3  ------------------ */}
                <FormRow styled={FRModify}>
                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Artwork Source"
                      id="artworkSource"
                      placeholder="Add Source"
                      RHFRef={{ ...register('artworkSource') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Holdings"
                      id="holdings"
                      placeholder="Enter Holdings"
                      RHFRef={{ ...register('holdings') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Collectors"
                      id="collectors"
                      placeholder="Enter Collectors"
                      RHFRef={{ ...register('collectors') }}
                      autoComplete="off"
                    />
                  </Div>
                </FormRow>
                {/* ------------------ End - Row 3  ------------------ */}

                <Div $marginBottom={8}>
                  <BasicDetailsForm.Label htmlFor="size">
                    Size
                  </BasicDetailsForm.Label>
                </Div>

                {/* ------------------ Row 4  ------------------ */}
                <FormRow styled={FRModify}>
                  <Div>
                    <AdminFormInput
                      type="text"
                      label={false}
                      id="size"
                      placeholder="Dimension"
                      RHFRef={{ ...register('dimension') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={false}
                      id="length"
                      placeholder="Length"
                      RHFRef={{ ...register('length') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={false}
                      id="width"
                      placeholder="Width"
                      RHFRef={{ ...register('width') }}
                      autoComplete="off"
                    />
                  </Div>

                  <Div>
                    <AdminFormInput
                      type="text"
                      label={false}
                      id="height"
                      placeholder="Height"
                      RHFRef={{ ...register('height') }}
                      autoComplete="off"
                    />
                  </Div>
                </FormRow>
                {/* ------------------ End - Row 4  ------------------ */}
              </BasicDetailsForm.FormGroupSideB>
            </BasicDetailsForm.FormGroup>

            <Div>
              <AdminTextarea
                label={true}
                labelText="Brief Description"
                id="description"
                placeholder="BEEPLE@gmail.com"
                RHFRef={{ ...register('description') }}
              />
            </Div>
          </BasicDetailsForm.NewWrapperBody>
        </BasicDetailsForm.NewWrapper>
        {/* ------------------ End - New Wrapper  ------------------ */}
      </BasicDetailsForm.CardBody>
    </BasicDetailsForm.Card>
  );
}

// Styled
const FRModify1 = css`
  flex-direction: column;
  & {
    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }
`;

const FRModify = css`
  flex-direction: column;
  & {
    @media (min-width: 1320px) {
      flex-direction: row;
    }
  }
`;

BasicDetailsForm.Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #718898;
  user-select: none;
`;

BasicDetailsForm.Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  margin-top: 24px;
`;

BasicDetailsForm.CardBody = styled.div`
  padding: ${rem(48)};
`;

BasicDetailsForm.NewWrapper = styled.div`
  background-color: #fcfcfc;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  margin-top: ${rem(16)};
`;

BasicDetailsForm.NewWrapperBody = styled.div`
  padding: ${rem(32)};
`;

BasicDetailsForm.FormGroup = styled.div`
  position: relative;
  & {
    @media (min-width: 992px) {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      /* For Text area. */
      margin-bottom: ${rem(24)};
    }
  }
`;

BasicDetailsForm.FormGroupSideA = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(24)};
  & {
    @media (min-width: 992px) {
      display: flex;
      margin-right: ${rem(32)};
    }
  }
`;

BasicDetailsForm.FormGroupSideB = styled.div`
  & {
    @media (min-width: 992px) {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      min-width: 0;
      margin-bottom: 0;
    }
  }
`;
