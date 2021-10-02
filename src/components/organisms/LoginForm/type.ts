export const validateSchema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
};

export interface IProps {}
export interface IState {
  isValid: boolean;
  values: CredentialsType;
  touched?: ErrorFields;
  errors?: ErrorFields;
}

export interface ErrorFields {
  email?: string[];
  password?: string[];
}

export type ErrorType = 'email' | 'password';

export type CredentialsType = {
  email: string;
  password: string;
};
