import { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { useForm, useFieldArray } from 'react-hook-form';
import cookie from 'js-cookie';
import { yupResolver } from '@hookform/resolvers/yup';

import { artistService } from '../../../services';
import { NewArtist } from '../../../types';
import { AlertColorType, ServerResponseMessageStatus } from '../../../../types';
import { addArtistValidationSchema } from '../../../helpers';
import Alert from '../../../../components/reusable/Alert';
import Spinner from '../../../../components/reusable/Spinner';
import { PlusIcon, ArtworkUploadCloseIcon } from '../../../svgs';

import ArtistSingleImageUploader from './ArtistSingleImageUploader';
import NotableArtworkUploader from './NotableArtworkUploader';
import {
  PrimaryStyles,
  DangerStyles,
  AdminSubmitButtonStyles
} from '../../../styles/reuse';
import Div from '../../../../components/styled/Div';
import ValidationText from '../../../../components/styled/ValidationText';
import AdminFormInput from '../../styled/AdminFormInput';
import AdminTextarea from '../../styled/AdminTextarea';

// Form Initial values
const initialValues = {
  name: '',
  overview: '',
  artistImage: null,
  notableArtworks: [
    {
      artworkName: '',
      artworkDescription: '',
      artworkFile: null
    }
  ]
};

// Component
export default function AddArtistForm() {
  // State management for the AddArtistForm
  const [
    serverSideSuccess,
    setServerSideSuccess
  ] = useState<ServerResponseMessageStatus | null>(null);

  const [alertColor, setAlertColor] = useState<AlertColorType>('danger');

  const [resetRender, setResetRender] = useState<boolean>(false); // use to reset the alert component

  // ------------------ useForm and useFieldArray hook ------------------
  const formOptions = {
    defaultValues: initialValues,
    resolver: yupResolver(addArtistValidationSchema)
  };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    formState,
    // watch,
    reset
  } = useForm<NewArtist>(formOptions);

  const { errors, isSubmitting } = formState;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notableArtworks' // Name of the field. Important: make sure name is in object shape: name=notableArtworks.0.name as we don't support flat arrays.
  });

  // const watchAllFields = watch(); // When pass nothing as argument, you are watching everything

  // ------------------ End - useForm and useFieldArray------------------

  // ------------------ Functions ------------------

  function resetForm() {
    if (confirm('Are you sure you want to reset the form?')) {
      reset(formOptions.defaultValues); // Reset the form
    }
  }

  function onSubmit(data: NewArtist) {
    setResetRender(true); // Reset the rendering behavior

    const token = cookie.get('token') || ''; // Get the auth token

    // ------------------ FormData Logic  ------------------
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('overview', data.overview);

    // Iterate notable artworks
    const length = data.notableArtworks.length;

    for (let i = 0; i < length; i++) {
      const {
        artworkName,
        artworkDescription,
        artworkFile
      } = data.notableArtworks[i];
      formData.append('artworkName', artworkName || '');
      formData.append('artworkDescription', artworkDescription || '');
      formData.append('notableArtworks', artworkFile || '');
    }

    // ------------------ End - FormData Logic  ------------------

    return artistService
      .addArtist(formData, token)
      .then(function(response) {
        console.log('response', response);
        setAlertColor('success');
        setResetRender(false);
        setServerSideSuccess(response);

        reset(formOptions.defaultValues); // Reset the form
      })
      .catch(function(error) {
        console.log('error', error);
        setAlertColor('danger');
        setResetRender(false);
        setServerSideSuccess(error);
      });
  }
  // ------------------ End - Functions ------------------

  // ------------------ JSX ------------------
  // console.log('watchAllFields', watchAllFields);

  return (
    <Fragment>
      {serverSideSuccess?.message && !resetRender ? (
        <Alert color={alertColor}>{serverSideSuccess.message}</Alert>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fragment>
          {/* Artist Heading */}
          <AddArtistForm.ArtistHeading>
            Artists Details
          </AddArtistForm.ArtistHeading>
          {/* End - Artist Heading */}

          {/* ------------------ Form for the Name and Description ------------------ */}
          <AddArtistForm.ArtistFormCard>
            {/* Flex */}
            <AddArtistForm.ArtistFormCardFlex>
              {/* Flex Item 1 */}
              <Div>
                <ArtistSingleImageUploader
                  control={control}
                  name="artistImage"
                  setValue={setValue}
                  setError={setError}
                  invalid={false}
                />
              </Div>
              {/* Flex Item 2 */}
              <Div>
                <Div $marginBottom={24}>
                  <AdminFormInput
                    type="text"
                    label={true}
                    labelText="Artist Name"
                    id="name"
                    placeholder="BEEPLE"
                    RHFRef={{ ...register('name') }}
                    invalid={errors?.name && true}
                    autoComplete="off"
                  />

                  {errors.name?.message && (
                    <ValidationText $fontWeight={500}>
                      {errors.name?.message}
                    </ValidationText>
                  )}
                </Div>

                <Div $marginBottom={32}>
                  <AdminTextarea
                    label={true}
                    labelText="Overview"
                    id="overview"
                    placeholder="BEEPLE@gmail.com"
                    RHFRef={{ ...register('overview') }}
                    invalid={errors?.overview && true}
                  />

                  {errors.overview?.message && (
                    <ValidationText $fontWeight={500}>
                      {errors.overview?.message}
                    </ValidationText>
                  )}
                </Div>
              </Div>
            </AddArtistForm.ArtistFormCardFlex>
            {/* End - Flex */}
          </AddArtistForm.ArtistFormCard>
          {/* ------------------ End - Form for the Name and Description ------------------ */}
        </Fragment>

        <Fragment>
          {/* NotableArtFlex */}
          <AddArtistForm.NotableArtFlex>
            {/* NotableArt Heading */}
            <AddArtistForm.ArtworkHeading>
              Notable Artwork
            </AddArtistForm.ArtworkHeading>
            {/* NotableArt Heading */}

            {/* Add NotableArt Button */}
            <AddArtistForm.NotableAddArtButton
              type="button"
              onClick={() => {
                append({ artworkFile: null });
              }}
            >
              <PlusIcon width={12} height={12} style={{ marginRight: '8px' }} />
              <span>Add Notable Artwork</span>
            </AddArtistForm.NotableAddArtButton>
            {/* Add NotableArt Button */}
          </AddArtistForm.NotableArtFlex>
          {/* End - NotableArtFlex */}

          {/* ------------------ Form for the Notable Artwork Section ------------------ */}

          {fields.map((field, index) => {
            return (
              <Fragment key={field.id}>
                {/* Section Heading */}
                {index !== 0 ? (
                  <Fragment>
                    <AddArtistForm.ArtworkIndexHeading>
                      Notable Artwork {index + 1}
                    </AddArtistForm.ArtworkIndexHeading>
                  </Fragment>
                ) : null}
                {/* End - Section Heading */}

                <AddArtistForm.ArtFormCard>
                  <Div $marginBottom={24}>
                    <AdminFormInput
                      type="text"
                      label={true}
                      labelText="Name of Artwork"
                      id={`notableArtworks.${index}.artworkName`}
                      placeholder="BEEPLE"
                      RHFRef={{
                        ...register(`notableArtworks.${index}.artworkName`)
                      }}
                      invalid={
                        errors?.notableArtworks?.[index]?.artworkName && true
                      }
                      autoComplete="off"
                    />

                    {errors?.notableArtworks?.[index]?.artworkName?.message && (
                      <ValidationText $fontWeight={500}>
                        {errors?.notableArtworks?.[index]?.artworkName?.message}
                      </ValidationText>
                    )}
                  </Div>

                  <Div $marginBottom={24}>
                    <AdminTextarea
                      label={true}
                      labelText="Brief Description"
                      id={`notableArtworks.${index}.artworkDescription`}
                      placeholder="BEEPLE@gmail.com"
                      RHFRef={{
                        ...register(
                          `notableArtworks.${index}.artworkDescription`
                        )
                      }}
                      invalid={
                        errors?.notableArtworks?.[index]?.artworkDescription &&
                        true
                      }
                    />

                    {errors?.notableArtworks?.[index]?.artworkDescription
                      ?.message && (
                      <ValidationText $fontWeight={500}>
                        {
                          errors?.notableArtworks?.[index]?.artworkDescription
                            ?.message
                        }
                      </ValidationText>
                    )}
                  </Div>
                  {/* ------------------ File Upload  ------------------ */}
                  <Div>
                    <NotableArtworkUploader
                      control={control}
                      name={`notableArtworks.${index}.artworkFile`}
                      setValue={setValue}
                      setError={setError}
                      invalid={
                        errors?.notableArtworks?.[index]?.artworkFile && true
                      }
                    />
                    {errors?.notableArtworks?.[index]?.artworkFile?.message && (
                      <ValidationText $fontWeight={500}>
                        {errors?.notableArtworks?.[index]?.artworkFile?.message}
                      </ValidationText>
                    )}
                  </Div>
                  {/* ------------------ End - File Upload  ------------------ */}

                  {/* Notable Art Close Button */}
                  <Fragment>
                    <AddArtistForm.NotableArtCloseButton
                      type="button"
                      onClick={() => remove(0)}
                    >
                      <ArtworkUploadCloseIcon />
                    </AddArtistForm.NotableArtCloseButton>
                  </Fragment>
                  {/* End - Notable Art Close Button */}
                </AddArtistForm.ArtFormCard>
              </Fragment>
            );
          })}

          {/* ------------------ End - Form for the Notable Artwork Section ------------------ */}
        </Fragment>

        {/* ------------------ Form Submit Button ------------------ */}
        <AddArtistForm.ButtonGroup>
          <AddArtistForm.ButtonA type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner marginRight={8} /> : null}
            <span>Save</span>
          </AddArtistForm.ButtonA>

          <AddArtistForm.ButtonB type="button" onClick={resetForm}>
            Cancel
          </AddArtistForm.ButtonB>
        </AddArtistForm.ButtonGroup>
        {/* ------------------ End - Form Submit Button ------------------ */}
      </form>
    </Fragment>
  );
  // ------------------ End - JSX ------------------
}

// Styled components
const FormCardStyles = css`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  padding: 48px;
  margin-top: 24px;
`;

const HeadingStyles = css`
  font-size: ${rem(18)};
  font-weight: 500;
  line-height: 1.2;
  color: #000;
`;

// ------------------ START ------------------

// Artist Form Card
AddArtistForm.ArtistFormCard = styled.div`
  ${FormCardStyles};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(48)};
`;

// Artist Details Heading
AddArtistForm.ArtistHeading = styled.h1`
  ${HeadingStyles};
  margin-bottom: ${rem(24)};
`;

// Flex
AddArtistForm.ArtistFormCardFlex = styled.div`
  display: flex;

  > div:first-child {
    flex-grow: 0;
    margin-right: ${rem(32)};
  }

  > div {
    flex-grow: 1;
  }
`;
// ------------------ END ------------------

// ------------------ START ------------------

// Notable Artwork Flex
AddArtistForm.NotableArtFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(32)};
`;

// Notable Artwork Heading
AddArtistForm.ArtworkHeading = styled.h1`
  ${HeadingStyles};
  margin-bottom: 0;
`;

AddArtistForm.ArtworkIndexHeading = styled.h1`
  ${HeadingStyles};
  margin-bottom: ${rem(32)};
`;

// Add Notable Artwork Button
AddArtistForm.NotableAddArtButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  padding: 12px 18px;

  border-radius: 3px;

  ${DangerStyles};

  &:focus {
    outline: 0;
  }
`;

// Notable Artwork Form Card
AddArtistForm.ArtFormCard = styled.div`
  ${FormCardStyles};
  position: relative;
  margin-bottom: ${rem(48)};
`;

// Notable Art Section Close Button
AddArtistForm.NotableArtCloseButton = styled.button`
  position: absolute;
  top: -12px;
  right: -8px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:focus {
    outline: 0;
  }

  > svg {
    width: 12px;
    height: 12px;
  }
`;
// End - Notable Art Section Close Button

// ------------------ END ------------------

// ------------------ START ------------------
// Button Group
AddArtistForm.ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button:not(:last-child) {
    margin-right: 16px;
  }
`;

AddArtistForm.ButtonA = styled.button`
  ${AdminSubmitButtonStyles};
  & {
    padding: 8px 40px;
  }
  ${PrimaryStyles};
`;

AddArtistForm.ButtonB = styled.button`
  ${AdminSubmitButtonStyles};

  & {
    padding: 8px 40px;
  }
  ${DangerStyles};
`;
// ------------------ END ------------------
