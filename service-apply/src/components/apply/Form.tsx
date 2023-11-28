import {
  InputText,
  Button,
  CheckBox,
  InputTextProps,
} from '@quokka/design-system';
import { Selector } from './Selector';
import { parkingSection } from '../constants/parkingSection';
import { clsx } from 'clsx';

export const ApplyInputText = ({ className, ...props }: InputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center mb-2">
      <InputText {...props} className={clsx(className, 'col-span-4')} />
    </div>
  );
};

export const ApplyForm = () => {
  return (
    <form className="flex flex-col gap-4 max-w-[520px] m-auto">
      <ApplyInputText
        label="전화번호"
        placeholder="010-0000-0000"
        type="text"
        required
      />
      <ApplyInputText label="이메일" type="text" required />
      <ApplyInputText label="이름" type="text" required />
      <ApplyInputText label="학번" type="text" required />
      <ApplyInputText label="소속 대학" type="text" required />
      <Selector
        label="구간"
        type="text"
        options={parkingSection}
        className=""
        required
      />
      <ApplyInputText label="차량 번호" type="text" required />
      <div className="flex flex-row justify-between">
        <div>경차 여부</div>
        <div className="flex m-auto gap-8">
          <CheckBox label="예" name="compactCar" value="yes" required />
          <CheckBox label="아니오" name="compactCar" value="no" required />
        </div>
      </div>
      <div className="flex flex-row justify-between my-12">
        <Button className="" color="secondary">
          임시 저장
        </Button>
        <Button className="" color="primary" type="submit">
          신청하기
        </Button>
      </div>
    </form>
  );
};
