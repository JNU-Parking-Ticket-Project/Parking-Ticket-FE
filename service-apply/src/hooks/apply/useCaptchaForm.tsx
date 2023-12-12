import { ChangeEventHandler, useContext, useState } from 'react';
import { useApplyMutate, useCaptchaQuery } from '../react-query/useApply';
import { RegistrationRequest } from '../../apis/dtos/registration.dtos';
import { ApplyFormContext } from '../../store/ApplyFormContext';
import { removeToken } from '../../functions/jwt';
import { useNavigate } from 'react-router-dom';

export const useCaptchaForm = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const { captchaCode, captchaImageUrl } = useCaptchaQuery();
  const { postRegistration } = useApplyMutate();
  const state = useContext(ApplyFormContext);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleSubmit = () => {
    postRegistration(
      new RegistrationRequest({
        name: state.studentName,
        studentNumber: state.studentNumber,
        affiliation: state.affiliation,
        isLightCar: state.isCompact,
        carNumber: state.carNumber,
        phoneNumber: state.phoneNumber,
        selectSectorId: +state.section,
        captchaPendingCode: captchaCode,
        captchaAnswer: input,
      }),
      {
        // FIXME: onError, onSuccess 동작 안 함 (쿼리 devtools에서는 error 캐칭 됨)
        onError: (error) => {
          console.log(error);
          alert(error.message);
          closeModal();
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          alert(data.message);
          removeToken();
          closeModal();
          navigate('/');
        },
      },
    );
  };

  return { input, handleInput, captchaImageUrl, handleSubmit };
};
