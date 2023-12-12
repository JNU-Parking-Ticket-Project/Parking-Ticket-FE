import { useState } from 'react';
import { useApplyQuery, useTemporarySaveMutate } from './react-query/useApply';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../functions/jwt';
import { TemporarySaveRequest } from '../apis/dtos/registration.dtos';
import { useApplyFormContext } from './apply/useApplyFormContext';

export const useApplyForm = () => {
  const navigate = useNavigate();

  const { registrationData } = useApplyQuery();
  const { sector, selectSectorId, ...rest } = registrationData;

  const { state, dispatch } = useApplyFormContext({
    section: selectSectorId ?? 0,
    ...rest,
  });

  const { postTemporarySave } = useTemporarySaveMutate();
  const [isCaptchaModalOpen, setIsCaptchaModalOpen] = useState(false);

  const onTemporarySave = () => {
    postTemporarySave(
      new TemporarySaveRequest({
        name: state.studentName,
        studentNumber: state.studentNumber,
        affiliation: state.affiliation,
        isLightCar: state.isCompact,
        carNumber: state.carNumber,
        phoneNumber: state.phoneNumber,
        selectSectorId: +state.section,
      }),
      {
        onError: (error) => {
          alert(error.message);
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          dispatch({ type: 'reset', payload: null });
          alert(data.message);
          removeToken();
          navigate('/');
        },
      },
    );
  };

  return {
    sector,
    state,
    dispatch,
    onTemporarySave,
    isCaptchaModalOpen,
    setIsCaptchaModalOpen,
  };
};
