import React, { Fragment, useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { rem } from 'polished';

import { AdminFormInputStyles } from '../../styles/reuse';
import { DatePickerStyles } from '../../styles/vendor/react-datepicker';

// Types
type Props = {
  id: string;
  control: Control;
  labelText?: string;
  label?: boolean;
  defaultDate?: Date | string;
  invalid?: boolean | undefined;
};

export default function AdminFormDateInput(props: Props) {
  const { control, id, label, labelText, defaultDate, invalid } = props;

  const [startDate, setStartDate] = useState<Date | string>(defaultDate || '');

  return (
    <Fragment>
      <Controller
        control={control}
        name={id}
        render={controllerProps => {
          const {
            field: { onChange, value = startDate }
          } = controllerProps;
          return (
            <AdminFormDateInput.DatePickerStyles>
              {label ? (
                <AdminFormDateInput.Label htmlFor={id}>
                  {labelText}
                </AdminFormDateInput.Label>
              ) : null}
              <DatePicker
                id={id}
                showPopperArrow={false}
                onChange={date => onChange(date)}
                selected={value || ''}
                wrapperClassName="date-wrapper"
                className="date-control"
                autoComplete="off"
                maxDate={new Date()}
              />
            </AdminFormDateInput.DatePickerStyles>
          );
        }}
      />
    </Fragment>
  );
}

AdminFormDateInput.Wrapper = styled.div`
  position: relative;
`;

AdminFormDateInput.Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #718898;
  margin-bottom: ${rem(8)};
`;

AdminFormDateInput.Input = styled.input<{ $invalid?: boolean }>`
  ${AdminFormInputStyles};

  & {
    padding-right: ${rem(54)};
  }
`;

AdminFormDateInput.Icon = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  right: 12px;
  top: 0;
  bottom: 0;

  > svg {
    width: 32px;
    height: 32px;
  }
`;

AdminFormDateInput.DatePickerStyles = styled.div`
  ${DatePickerStyles};
`;
