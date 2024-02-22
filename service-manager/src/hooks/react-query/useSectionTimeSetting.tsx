import { useQueryClient } from '@tanstack/react-query';
import { SettingTime } from '../../apis/dtos/times.dtos';
import { useTimeSettingUpdateMutate } from './useSetting';

export const useSectionTimeSetting = () => {
  const { postSettingTime } = useTimeSettingUpdateMutate();
  const queryClient = useQueryClient();

  const updateSettingTime = (time: SettingTime) => {
    postSettingTime(time, {
      onSuccess: () => {
        alert('수정되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['couponEvents'] });
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return { updateSettingTime };
};