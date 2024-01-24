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
    isCaptchaModalOpen,
    setIsCaptchaModalOpen,
    onModalOpen,
    isAgreed,
    setIsAgreed,
    isError,
    errorMessage,
  } = useApplyForm();

  const parkingSection = sector.map((item) => ({
    sectionNumber: item.sectorId,
    sectionMajor: `${item.sectorNum}-${item.sectorName}`,
  }));
  parkingSection.unshift({ sectionMajor: '선택', sectionNumber: 0 });

  const parkingSectionOptions = parkingSection.map((item) => ({
    label: item.sectionMajor,
    value: item.sectionNumber.toString(),
  }));

  return (
    <ApplyFormContext.Provider value={state}>
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
          onChange={(e) =>
            dispatch({ type: 'affiliation', payload: e.target.value })
          }
          required
        />
        <ApplySelector
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
            <Txt size="sm" className="text-lg pl-2">
              개인정보 수집 및 이용 동의
            </Txt>
          </div>
          <a
            target="_blank"
            href="https://www.privacy.go.kr/front/main/main.do"
            className="pl-6 text-sm underline underline-offset-4 text-neutral-700"
          >
            자세한 내용은 이곳에서 확인할 수 있습니다
            {/* TODO: 모달창으로 변경 */}
          </a>
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
          <Button color="primary" onClick={onModalOpen}>
            신청하기
          </Button>

          <Suspense>
            <ErrorBoundary>
              <ApplyCaptchaModal
                isOpen={isCaptchaModalOpen}
                onRequestClose={() => {
                  setIsCaptchaModalOpen(false);
                }}
              />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </ApplyFormContext.Provider>
  );
};
