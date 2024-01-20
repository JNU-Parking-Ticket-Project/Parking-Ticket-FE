import { SettingTime } from '../../apis/dtos/times.dtos';
import { useTimeSettingUpdateMutate } from '../react-query/useSetting';

export const useSectionTimeSetting = () => {
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

  return { updateSettingTime };
};
