import { Txt } from '@quokka/design-system';
import { SettingListItem } from './SettingListItem';
import { CouponEvent } from 'service-manager/src/apis/dtos/times.dtos';

interface SettingListProps {
  couponEvnets: CouponEvent[];
}

export const SettingList = (
  { couponEvnets: data }: SettingListProps = {
    couponEvnets: [],
  },
) => {
  return (
    <div className="mx-auto mt-12">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4">제목</Txt>
        <Txt size="h4" className="w-24 text-center">
          상태
        </Txt>
        <Txt size="h4" className="w-24 text-center">
          시작
        </Txt>
        <Txt size="h4" className="w-24 text-center">
          종료
        </Txt>
      </div>
      {data.map((setting) => (
        <SettingListItem key={setting.id} {...setting} />
      ))}
    </div>
  );
};
