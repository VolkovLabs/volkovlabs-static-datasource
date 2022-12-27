import React from 'react';
import { FieldType } from '@grafana/data';
import { Button, InlineField, InlineFieldRow, Input, Select } from '@grafana/ui';
import { FieldTypes } from '../../constants';
import { DataFrameViewModel, StaticQuery } from '../../types';
import { cloneDataFrameViewModel, toDataFrame } from '../../utils';

/**
 * Properties
 */
interface Props {
  /**
   * Frame
   *
   * @type {DataFrameViewModel}
   */
  frame: DataFrameViewModel;

  /**
   * Query
   *
   * @type {StaticQuery}
   */
  query: StaticQuery;

  /**
   * On Change
   */
  onChange: (value: StaticQuery) => void;

  /**
   * On Run Query
   */
  onRunQuery: () => void;
}

/**
 * Fields Editor
 */
export const FieldsEditor = ({ query, frame, onChange, onRunQuery }: Props) => {
  /**
   * Add Field
   */
  const addField = (index: number) => {
    const model = cloneDataFrameViewModel(frame);

    /**
     * Insert a field after the current position.
     */
    model.fields.splice(index + 1, 0, {
      name: '',
      type: FieldType.string,
    });

    /**
     * Rebuild rows with the added field.
     */
    model.rows.forEach((row: any) => {
      row.splice(index + 1, 0, '');
    });

    /**
     * Change
     */
    onChange({ ...query, frame: toDataFrame(model) });
    onRunQuery();
  };

  /**
   * Remove Field
   */
  const removeField = (index: number) => {
    const model = cloneDataFrameViewModel(frame);

    /**
     * Remove the field at given position.
     */
    model.fields.splice(index, 1);

    /**
     * Rebuild rows without the removed field.
     */
    model.rows.forEach((row) => {
      row.splice(index, 1);
    });

    /**
     * Remove all rows if there are no fields.
     */
    if (frame.fields.length === 0) {
      frame.rows = [];
    }

    /**
     * Change
     */
    onChange({ ...query, frame: toDataFrame(model) });
    onRunQuery();
  };

  /**
   * Rename Field
   */
  const renameField = (name: string, index: number) => {
    const model = cloneDataFrameViewModel(frame);

    /**
     * Rename
     */
    model.fields[index].name = name;

    /**
     * Change
     */
    onChange({ ...query, frame: toDataFrame(model) });
    onRunQuery();
  };

  /**
   * Change Field Type
   */
  const changeFieldType = (fieldType: FieldType, index: number) => {
    const model = cloneDataFrameViewModel(frame);

    /**
     * Set Field Type
     */
    frame.fields[index].type = fieldType;

    /**
     * Change
     */
    onChange({ ...query, frame: toDataFrame(model) });
    onRunQuery();
  };

  /**
   * No rows found
   */
  if (!frame.fields.length) {
    return (
      <InlineFieldRow>
        <InlineField>
          <Button variant="primary" title="Add a Field" onClick={() => addField(0)} icon="plus">
            Add a Field
          </Button>
        </InlineField>
      </InlineFieldRow>
    );
  }

  return (
    <>
      {frame.fields.map((field, i) => {
        return (
          <InlineFieldRow key={i}>
            <InlineField label="Name" grow>
              <Input
                value={field.name}
                onChange={(e) => {
                  renameField(e.currentTarget.value, i);
                }}
              />
            </InlineField>

            <InlineField label="Type">
              <Select
                width={12}
                value={field.type}
                onChange={(e) => {
                  changeFieldType(e.value as FieldType, i);
                }}
                options={FieldTypes.map((t) => ({
                  label: t[0].toUpperCase() + t.substring(1),
                  value: t,
                }))}
              />
            </InlineField>

            <InlineField>
              <Button variant="secondary" title="Add" onClick={() => addField(i)} icon="plus"></Button>
            </InlineField>

            <InlineField>
              <Button variant="destructive" title="Remove" onClick={() => removeField(i)} icon="trash-alt"></Button>
            </InlineField>
          </InlineFieldRow>
        );
      })}
    </>
  );
};
