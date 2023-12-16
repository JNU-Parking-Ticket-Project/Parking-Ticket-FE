import { useEffect, useState } from 'react';
import { useApplyQuery, useTemporarySaveMutate } from '../react-query/useApply';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../functions/jwt';
import { TemporarySaveRequest } from '../../apis/dtos/registration.dtos';
import { useApplyFormContext } from './useApplyFormContext';

export const useApplyForm = () => {
  const navigate = useNavigate();

  const { registrationData } = useApplyQuery();
  const { sector, selectSectorId, ...rest } = registrationData;

  const { state, dispatch } = useApplyFormContext({
    section: selectSectorId ?? 0,
    ...rest,
  });

  // FIXME: react-query로 마이그레이션, setQueryData와 getQueryData를 통해 client 데이터를 제거하고 server 데이터만 사용
  useEffect(() => {
    dispatch({
      type: 'update',
      payload: { section: selectSectorId ?? 0, ...rest },
    });
  }, [registrationData]);

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
          navigate('/announcement/done/temp');
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
