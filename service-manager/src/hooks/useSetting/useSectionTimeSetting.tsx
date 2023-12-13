import { SettingTime } from 'service-manager/src/apis/dtos/times.dtos';
import {
  useTimeSettingQuery,
  useTimeSettingUpdateMutate,
} from '../react-query/useSetting';

export const useSectionTimeSetting = () => {
  const { timeSettingData } = useTimeSettingQuery();
  const { postSettingTime } = useTimeSettingUpdateMutate();

  const updateSettingTime = (time: SettingTime) => {
    postSettingTime(time, {
      onSuccess: () => {
        alert('수정되었습니다.');
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return { timeSettingData, updateSettingTime };
};
