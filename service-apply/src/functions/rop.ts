interface SubmitSuccess<T> {
  success: true;
  value: T;
}

interface SubmitFailure {
  success: false;
  message: string;
}

export type SubmitResult<T> = SubmitSuccess<T> | SubmitFailure;

export const submitSuccess = <T>(value: T): SubmitSuccess<T> => {
  return {
    success: true,
    value,
  };
};

export const submitFailure = (message: string): SubmitFailure => {
  return {
    success: false,
    message,
  };
};
