import {
  InputText,
  Button,
  CheckBox,
  InputTextProps,
} from '@quokka/design-system';
import { Selector } from './Selector';
import { parkingSection } from '../constants/parkingSection';

export function ApplyInputText(props: InputTextProps) {
  return (
    <div className="gap-3 flex flex-row justify-between items-center mb-2">
      <InputText {...props} className={`${props.className}`} />
    </div>
  );
}

export function ApplyForm() {
  return (
    <div className="flex justify-center">
      <form className="grid gap-4 w-35rem] mb-[3.6rem]">
        <ApplyInputText
          label="전화번호"
          placeholder="010-0000-0000"
          type="text"
          className="w-[30rem]"
          required
        />
        <ApplyInputText
          label="이름"
          placeholder=""
          type="text"
          className="w-[30rem]"
          required
        />
        <ApplyInputText
          label="이메일"
          placeholder=""
          type="text"
          className="w-[30rem]"
          required
        />
        <ApplyInputText
          label="학번"
          placeholder=""
          type="text"
          className="w-[30rem]"
          required
        />
        <ApplyInputText
          label="소속 대학"
          placeholder=""
          type="text"
          className="w-[30rem]"
          required
        />
        <Selector
          label="구간"
          placeholder=""
          type="text"
          options={parkingSection}
          className="w-[30rem]"
          required
        />
        <ApplyInputText
          label="차량 번호"
          placeholder=""
          type="text"
          className="w-[30rem]"
          required
        />
        <div className="flex flex-row justify-between mb-[3.5rem]">
          <label>경차 여부</label>
          <CheckBox label="예" name="compactCar" value="yes" required />
          <CheckBox label="아니오" name="compactCar" value="no" required />
        </div>
        <div className="flex flex-row justify-between">
          <Button className="w-[13rem]" color={'secondary'}>
            임시 저장
          </Button>
          <Button className="w-[13rem]" color={'primary'} type="submit">
            신청하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;
