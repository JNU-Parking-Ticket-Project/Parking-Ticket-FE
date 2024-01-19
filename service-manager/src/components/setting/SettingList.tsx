import { Txt } from '@quokka/design-system';
import { SettingListItem } from './SettingListItem';
import { CouponEvent } from '../../apis/dtos/times.dtos';

interface SettingListProps {
  couponEvents: CouponEvent['couponEvents'];
}

export const SettingList = (
  { couponEvents: data }: SettingListProps = {
    couponEvents: [],
  },
) => {
  return (
    <div className="mx-auto mt-12 py-12">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4" className="flex-[2_0_0]">
          제목
        </Txt>
        <Txt size="h4" className="w-12 text-center">
          상태
        </Txt>
        <Txt size="h4" className="flex-1 text-center">
          기간
        </Txt>
      </div>
      {data.map((setting) => (
        <SettingListItem key={setting.eventId} {...setting} />
      ))}
    </div>
  );
};
