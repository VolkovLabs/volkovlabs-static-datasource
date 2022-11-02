import { FieldType, PreferredVisualisationType } from '@grafana/data';

/**
 * Preferred Visualization Types
 */
export const preferredVisualizationTypes: PreferredVisualisationType[] = [
  'graph',
  'logs',
  'nodeGraph',
  'table',
  'trace',
];

/**
 * Field Types
 */
export const fieldTypes = [
  FieldType.boolean,
  FieldType.number,
  FieldType.other,
  FieldType.string,
  FieldType.time,
  FieldType.trace,
];
