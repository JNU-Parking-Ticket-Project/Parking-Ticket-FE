import { clsx } from 'clsx';
import {
  InputText,
  Button,
  InputTextProps,
  Radio,
  Txt,
} from '@quokka/design-system';
import { useApplyForm } from '../../hooks/apply/useApplyForm';
import { ApplyFormContext } from '../../store/ApplyFormContext';
import { ApplySelector } from './ApplySelector';
import { ApplyCaptchaModal } from './ApplyCaptchaModal';
import { Suspense } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import { AFFILIATION_LIST } from '../../constants/affiliation';
import { PrivacyCheckModal } from './PrivacyCheckModal';
import { Spinner } from '../../assets/Spinner';

const DEFAULT_PARKING_SECTION_OPTIONS = [
  {
    label: '선택',
    value: '0',
  },
];

const extractParkingSectionOptionsBySector = (sector: {
  sectorId: number;
  sectorNum: string;
  sectorName: string;
}) => {
  return {
    label: `${sector.sectorNum}-${sector.sectorName}`,
    value: sector.sectorId.toString(),
  };
};

export const ApplyInputText = ({
  className,
  disabled,
  ...props
}: InputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center mb-2 max-sm:flex max-sm:flex-col">
      <InputText
        {...props}
        disabled={disabled}
        labelClassName="w-full"
        className={clsx(
          className,
          'col-span-4 w-full',
          !disabled && 'bg-transparent',
        )}
      />
    </div>
  );
};

export const ApplyForm = () => {
  const {
    sector,
    state,
    dispatch,
    onTemporarySave,
    isPrivacyModalOpen,
    setIsPrivacyModalOpen,
    isCaptchaModalOpen,
    onCaptchaModalOpen,
    onCaptchaModalClose,
    onCaptchaModalSafeClose,
    isAgreed,
    setIsAgreed,
    isError,
    errorMessage,
  } = useApplyForm();

  const parkingSectionOptions = DEFAULT_PARKING_SECTION_OPTIONS.concat(
    sector.map(extractParkingSectionOptionsBySector),
  ).sort((a, b) => a.value.localeCompare(b.value));

  const handleCarNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;

    if (value.includes(' ')) {
      return;
    }

    dispatch({ type: 'carNumber', payload: event.target.value });
  };

  return (
    <ApplyFormContext.Provider value={state}>
      <div className="flex flex-col gap-4 max-w-[520px] m-auto my-12">
        <ApplyInputText
          label="전화번호"
          name="phoneNumber"
          placeholder="숫자만 입력. 하이픈(-) 자동기입됨(ex: 01012341234)"
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
          disabled
          value={state.email}
          required
        />
        <ApplyInputText
          label="이름"
          name="studentName"
          type="text"
          placeholder="홍길동"
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
          placeholder="123456"
          onChange={(e) =>
            dispatch({ type: 'studentNumber', payload: e.target.value })
          }
          value={state.studentNumber}
          required
        />
        <ApplySelector
          label="소속대학"
          name="affiliation"
          type="text"
          options={AFFILIATION_LIST}
          value={state.affiliation}
          onChange={(e) =>
            dispatch({ type: 'affiliation', payload: e.target.value })
          }
          required
        />
        <ApplySelector
          value={
            parkingSectionOptions.find(
              (section) => '' + state.section === section.value,
            )?.value ?? '선택'
          }
          label="구간"
          type="text"
          options={parkingSectionOptions}
          onChange={(e) =>
            dispatch({ type: 'section', payload: e.target.value })
          }
          required
        />
        <ApplyInputText
          label="차량 번호"
          name="carNumber"
          type="text"
          placeholder="빈칸은 입력 할 수 없습니다."
          onChange={handleCarNumberChange}
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
              checked={state.isCompact}
              onChange={() => {
                dispatch({ type: 'isCompact', payload: true });
              }}
            />
            <Radio
              label="아니오"
              name="compactCar"
              checked={!state.isCompact}
              onChange={() => {
                dispatch({ type: 'isCompact', payload: false });
              }}
            />
          </div>
        </div>

        <div className="pt-4">
          <div className="flex justify-start items-center ">
            <input
              checked={isAgreed}
              onChange={() => setIsAgreed((prevState) => !prevState)}
              type="checkbox"
              name="collection-agreement"
            />
            <Txt
              size="sm"
              className="text-lg pl-2 cursor-pointer underline"
              onClick={() => {
                setIsPrivacyModalOpen(true);
              }}
            >
              개인정보 수집 및 이용 동의
            </Txt>
          </div>
          <PrivacyCheckModal
            isOpen={isPrivacyModalOpen}
            onRequestClose={() => {
              setIsPrivacyModalOpen(false);
            }}
          />
        </div>
        {isError && (
          <Txt color="error" className="my-2">
            {errorMessage}
          </Txt>
        )}
        <div className="flex flex-row justify-between mt-2 mb-12">
          <Button color="secondary" onClick={onTemporarySave}>
            임시 저장
          </Button>
          <Button
            color="primary"
            onClick={onCaptchaModalOpen}
            disabled={isCaptchaModalOpen}
          >
            신청하기
          </Button>

          <Suspense fallback={<Spinner />}>
            <ErrorBoundary>
              <ApplyCaptchaModal
                isOpen={isCaptchaModalOpen}
                safeClose={onCaptchaModalSafeClose}
                onRequestClose={onCaptchaModalClose}
              />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </ApplyFormContext.Provider>
  );
};
