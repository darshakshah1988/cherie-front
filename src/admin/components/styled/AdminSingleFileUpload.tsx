import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

import { ImageUploadIcon } from '../../svgs';

import { InvalidBorderUtility } from '../../styles/reuse';

// Types
type Props = {
  control: any; // This object contains methods for registering external components into RHF.
  name: string; // Name of the field which you want to register with RHF.
  text: string;
  acceptedFormats: string;
  onAcceptedFiles: (acceptedFiles: Array<any>) => void; // This function will invoke through parent.
  onRejectedFiles: (rejectedFiles: Array<any>) => void; // This function will invoke through parent.
  width?: number;
  height?: number;
  invalid?: boolean | undefined;
};

export default function AdminSingleFileUpload(props: Props) {
  const {
    control,
    name,
    text,
    acceptedFormats,
    onAcceptedFiles,
    onRejectedFiles,
    width,
    height,
    invalid
  } = props;

  const [files, setFiles] = useState([]);

  // ------------------ Functions ------------------

  const onDrop = useCallback(
    acceptedFiles => {
      onRejectedFiles([]); // Invoke function of the parent component when files will be rejected.
      onAcceptedFiles(acceptedFiles); // Invoke function of the parent component when files will be accepted.
      // Update the state to render file preview
      const filesWithPreview = acceptedFiles.map((file: any) => {
        return { ...file, preview: URL.createObjectURL(file) };
      });
      setFiles(filesWithPreview);
    },
    [onAcceptedFiles, onRejectedFiles]
  );

  const onDropRejected = useCallback(
    rejectedFiles => {
      // Invoke function of the parent component when files will be rejected.
      onRejectedFiles(rejectedFiles);
    },
    [onRejectedFiles]
  );

  const thumbs = files.map((file: any, index: number) => {
    return (
      <AdminSingleFileUpload.FileUploadThumb key={`${file.name}-${index}`}>
        <img src={file.preview} alt={file.name} />
      </AdminSingleFileUpload.FileUploadThumb>
    );
  });

  // ------------------ End - Functions ------------------

  // ------------------ useDropzone hook ------------------
  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFormats,
    multiple: false,
    onDrop: onDrop,
    onDropRejected: onDropRejected
  });
  // ------------------ End - useDropzone hook ------------------

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview)); // Make sure to revoke the data uris to avoid memory leaks
    };
  }, [files]);

  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={controllerProps => {
          const {
            field: { onChange }
          } = controllerProps;
          return (
            <AdminSingleFileUpload.FileUpload
              {...getRootProps()}
              $width={width}
              $height={height}
              $invalid={invalid}
              $styled={styled}
            >
              <input
                {...getInputProps({
                  onChange: (e: any) => onChange(e.target.files[0])
                })}
              />
              <AdminSingleFileUpload.UploadSvgWrap>
                <ImageUploadIcon width={50} height={50} />
              </AdminSingleFileUpload.UploadSvgWrap>
              <AdminSingleFileUpload.UploadText>
                {text}
              </AdminSingleFileUpload.UploadText>
              {thumbs}
            </AdminSingleFileUpload.FileUpload>
          );
        }}
      />
      {/* ------------------ End - File Upload  ------------------ */}
    </Fragment>
  );
}

// FileUpload
AdminSingleFileUpload.FileUpload = styled.div<{
  $width?: number;
  $height?: number;
}>`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;

  & {
    width: ${({ $width }) => ($width ? `${$width}px` : '296px')};
    height: ${({ $height }) => ($height ? `${$height}px` : '296px')};
  }

  ${InvalidBorderUtility};

  @media (min-width: 992px) {
    margin: 0;
  }
`;

AdminSingleFileUpload.UploadSvgWrap = styled.div`
  color: #718898;
  margin-bottom: 8px;
`;

AdminSingleFileUpload.UploadText = styled.p`
  font-size: 18px;
  text-align: center;
  color: #718898;
  margin-bottom: 0;
`;

AdminSingleFileUpload.FileUploadThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  & > img {
    display: block;
    max-width: 100%;
    height: 100%;
  }
`;
