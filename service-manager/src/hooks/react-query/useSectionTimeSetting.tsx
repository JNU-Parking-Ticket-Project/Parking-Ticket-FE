import { SettingTime } from '../../apis/dtos/times.dtos';
import {
  useTimeSettingUpdateMutate,
  useTimeSettingCreateMutate,
} from './useSetting';

export const useSectionTimeSettingCreate = () => {
  const { postSettingTime } = useTimeSettingCreateMutate();

  const createSettingTime = (time: SettingTime) => {
    postSettingTime(time, {
      onSuccess: () => {
        alert('생성되었습니다.');
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return { createSettingTime };
};

export const useSectionTimeSettingUpdate = (eventId: string) => {
  const { putSettingTime } = useTimeSettingUpdateMutate(eventId);

  const updateSettingTime = (time: SettingTime) => {
    putSettingTime(time, {
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
