import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { formInputValidator } from '../functions/formValidator';

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

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setApplyForm({
      ...applyForm,
      [e.target.name]: e.target.value,
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
    if (
      !formInputValidator(
        applyForm.phoneNumber,
        applyForm.studentNumber,
        applyForm.email,
        applyForm.studentName,
        applyForm.section,
        applyForm.carNumber,
        applyForm.isCompact,
      )
    ) {
      alert('입력하신 정보를 다시 확인해주세요.');
      return;
    }
    alert('신청이 완료되었습니다.');
    //TODO: 로딩컴포넌트 -> 신청완료 페이지
  };
  return { applyForm, handleInput, handleSelect, submitApplyForm };
};
