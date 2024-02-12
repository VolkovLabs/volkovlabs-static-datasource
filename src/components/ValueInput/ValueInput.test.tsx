import { dateTime, FieldType } from '@grafana/data';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TestIds, TextAreaLength } from '../../constants';
import { ValueInput } from './ValueInput';

/**
 * Mock @grafana/ui
 */
jest.mock('@grafana/ui', () => ({
  ...jest.requireActual('@grafana/ui'),
  /**
   * Mock DatetimePicker component
   */
  DateTimePicker: jest.fn().mockImplementation(({ onChange, ...restProps }) => {
    return (
      <input
        data-testid={restProps['data-testid']}
        value={restProps.value}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    );
  }),
}));

/**
 * Props
 */
type Props = React.ComponentProps<typeof ValueInput>;

/**
 * Input
 */
describe('Input', () => {
  const onChange = jest.fn();
  /**
   * Get Tested Component
   * @param restProps
   */
  const getComponent = ({ ...restProps }: Partial<Props>) => {
    return <ValueInput onChange={onChange} {...(restProps as any)} />;
  };

  beforeEach(() => {
    onChange.mockClear();
  });

  it('Should update string value', async () => {
    render(getComponent({ value: '123', type: FieldType.string }));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId(TestIds.valueInput.fieldString), { target: { value: 'hello' } });

    expect(onChange).toHaveBeenCalledWith('hello');
  });

  it('Should render disabled string value', async () => {
    render(getComponent({ value: null, type: FieldType.string }));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toHaveValue('null');
  });

  it('Should disable string value', async () => {
    render(getComponent({ value: 'hello', type: FieldType.string }));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toHaveValue('hello');

    fireEvent.click(screen.getByTestId(TestIds.valueInput.iconDisable));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toHaveValue('null');
  });

  it('Should enable string value', async () => {
    render(getComponent({ value: null, type: FieldType.string }));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toHaveValue('null');

    fireEvent.click(screen.getByTestId(TestIds.valueInput.iconDisable));

    expect(screen.getByTestId(TestIds.valueInput.fieldString)).toHaveValue('');
  });

  it('Should update textarea value', async () => {
    const value = new Array(TextAreaLength + 1).fill('a').join('');
    render(getComponent({ value: value, type: FieldType.string }));

    expect(screen.getByTestId(TestIds.valueInput.fieldTextarea)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId(TestIds.valueInput.fieldTextarea), { target: { value: value + 'new' } });

    expect(onChange).toHaveBeenCalledWith(value + 'new');
  });

  it('Should update number value', async () => {
    render(getComponent({ value: '123', type: FieldType.number }));

    expect(screen.getByTestId(TestIds.valueInput.fieldNumber)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId(TestIds.valueInput.fieldNumber), { target: { value: '111' } });

    expect(onChange).toHaveBeenCalledWith('111');
  });

  it('Should update date time value', async () => {
    render(getComponent({ value: '123', type: FieldType.time }));

    expect(screen.getByTestId(TestIds.valueInput.fieldDateTime)).toBeInTheDocument();

    const safeDate = new Date('02-02-2023');
    fireEvent.change(screen.getByTestId(TestIds.valueInput.fieldDateTime), { target: { value: dateTime(safeDate) } });

    expect(onChange).toHaveBeenCalledWith(dateTime(safeDate).toString());
  });
});
