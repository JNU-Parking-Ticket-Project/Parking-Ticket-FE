import {
  InputText,
  Button,
  InputTextProps,
  Radio,
  Txt,
} from '@quokka/design-system';
import { useApplyForm } from '../../hooks/useApplyForm';
import { ApplySelector } from './ApplySelector';
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
  const { state, dispatch, onSave } = useApplyForm();

  return (
    <div className="flex flex-col gap-4 max-w-[520px] m-auto my-12">
      <ApplyInputText
        label="전화번호"
        name="phoneNumber"
        placeholder="010-0000-0000"
        type="text"
        onChange={(e) =>
          dispatch({ type: 'phoneNumber', payload: e.target.value })
        }
        value={state.phoneNumber}
        required
      />
      <ApplyInputText
        label="이메일"
        name="email"
        type="text"
        onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
        value={state.email}
        required
      />
      <ApplyInputText
        label="이름"
        name="studentName"
        type="text"
        onChange={(e) =>
          dispatch({ type: 'studentName', payload: e.target.value })
        }
        value={state.studentName}
        required
      />
      <ApplyInputText
        label="학번"
        name="studentNumber"
        type="text"
        onChange={(e) =>
          dispatch({ type: 'studentNumber', payload: e.target.value })
        }
        value={state.studentNumber}
        required
      />
      <ApplySelector
        label="구간"
        type="text"
        options={parkingSection}
        onChange={(e) => dispatch({ type: 'section', payload: e.target.value })}
        value={state.section}
        required
      />
      <ApplyInputText
        label="차량 번호"
        name="carNumber"
        type="text"
        onChange={(e) =>
          dispatch({ type: 'carNumber', payload: e.target.value })
        }
        value={state.carNumber}
        required
      />
      <div className="flex flex-row justify-between">
        <div>
          경차 여부 <Txt color="error">*</Txt>
        </div>
        <div className="flex m-auto gap-8">
          <Radio
            label="예"
            name="compactCar"
            onChange={(e) => {
              dispatch({ type: 'isCompact', payload: true });
            }}
          />
          <Radio
            label="아니오"
            name="compactCar"
            onChange={(e) => {
              dispatch({ type: 'isCompact', payload: false });
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between my-12">
        <Button
          color="secondary"
          onClick={() => onSave({ isRegistration: false })}
        >
          임시 저장
        </Button>
        <Button
          color="primary"
          onClick={() => onSave({ isRegistration: true })}
        >
          신청하기
        </Button>
      </div>
    </div>
  );
};