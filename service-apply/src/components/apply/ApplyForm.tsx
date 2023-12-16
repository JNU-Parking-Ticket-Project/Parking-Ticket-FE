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
import { Suspense, useState } from 'react';
import ErrorBoundary from '../common/ErrorBoundray';

export const ApplyInputText = ({ className, ...props }: InputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center mb-2">
      <InputText {...props} className={clsx(className, 'col-span-4')} />
    </div>
  );
};

export const ApplyForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const {
    sector,
    state,
    dispatch,
    onTemporarySave,
    isCaptchaModalOpen,
    setIsCaptchaModalOpen,
  } = useApplyForm();

  const parkingSection = sector.map((item) => ({
    sectionNumber: item.sectorId,
    sectionMajor: `${item.sectorNum}-${item.sectorName}`,
  }));
  parkingSection.unshift({ sectionMajor: '선택', sectionNumber: 0 });

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
        <ApplyInputText
          label="소속대학"
          name="affiliation"
          type="text"
          onChange={(e) =>
            dispatch({ type: 'affiliation', payload: e.target.value })
          }
          value={state.affiliation}
          required
        />
        <ApplySelector
          label="구간"
          type="text"
          options={parkingSection}
          onChange={(e) =>
            dispatch({ type: 'section', payload: e.target.value })
          }
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

        <div>
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
            href="https://www.privacy.go.kr/front/main/main.do"
            className="pl-6 text-sm underline underline-offset-4 text-neutral-700"
          >
            자세한 내용은 이곳에서 확인할 수 있습니다
          </a>
        </div>

        <div className="flex flex-row justify-between my-12">
          <Button
            color="secondary"
            onClick={() => {
              if (!isAgreed) return alert('약관에 동의해 주세요.');
              onTemporarySave();
            }}
          >
            임시 저장
          </Button>
          <Button
            color="primary"
            onClick={() => {
              if (!isAgreed) return alert('약관에 동의해 주세요.');
              setIsCaptchaModalOpen(true);
            }}
          >
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
