import { ChangeEventHandler, useContext, useState } from 'react';
import { useApplyMutate, useCaptchaQuery } from '../react-query/useApply';
import { RegistrationRequest } from '../../apis/dtos/registration.dtos';
import { ApplyFormContext } from '../../store/ApplyFormContext';
import { removeToken } from '../../functions/jwt';
import { useNavigate } from 'react-router-dom';
import { usePeriodQuery } from '../react-query/usePeriodQuery';

export const useCaptchaForm = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const { captchaCode, captchaImageUrl } = useCaptchaQuery();
  const { postRegistrationStatus, postRegistration } = useApplyMutate();
  const { eventId } = usePeriodQuery();

  const state = useContext(ApplyFormContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value.replace(/[^-0-9]/g, ''));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (postRegistrationStatus == 'pending') return;
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
        eventId,
      }),
      {
        onError: (error) => {
          setInput('');

          alert(error.message);
          setIsLoading(false);
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          alert(data.message);
          removeToken();
          closeModal();
          setIsLoading(false);
          navigate('/announcement/done');
        },
      },
    );
  };

  return { isLoading, input, handleInput, captchaImageUrl, handleSubmit };
};
