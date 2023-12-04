import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import {
  formInputValidator,
  submitFailure,
  printSubmitResult,
} from '../functions/formValidator';

interface ApplyForm {
  phoneNumber: string;
  studentNumber: number;
  email: string;
  studentName: string;
  section: number;
  carNumber: string;
  isCompact: boolean;
}

export const useApplyForm = () => {
  const [applyForm, setApplyForm] = useState<ApplyForm>({
    phoneNumber: '',
    studentNumber: 0,
    email: '',
    studentName: '',
    section: 0,
    carNumber: '',
    isCompact: false,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApplyForm({
      ...applyForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setApplyForm({
      ...applyForm,
      section: parseInt(e.target.value),
    });
  };

  const submitApplyForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const {
      phoneNumber,
      studentNumber,
      email,
      studentName,
      section,
      carNumber,
      isCompact,
    } = applyForm;
    const result = formInputValidator(
      phoneNumber,
      studentNumber,
      email,
      studentName,
      section,
      carNumber,
      isCompact,
    );
    printSubmitResult(result);
  };
  return { applyForm, handleInput, handleSelect, submitApplyForm };
};
