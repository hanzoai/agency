
export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'file';
  placeholder?: string;
  required?: boolean;
  accept?: string;
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export type FormDataType = Record<string, string | File | null>;
