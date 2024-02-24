export type RecordWithAnyType = Record<string, unknown>;

export type OptionType = RecordWithAnyType & {
  label?: string;
  value: string | number;
};

export type OnChangeType = (data: {
  name: string;
  value: string | number | undefined;
  option?: OptionType;
}) => void;
