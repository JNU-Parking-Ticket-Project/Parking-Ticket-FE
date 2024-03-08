import { Button, Modal, Txt } from '@quokka/design-system';

interface PrivacyCheckModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const PrivacyCheckModal = ({
  isOpen,
  onRequestClose,
}: PrivacyCheckModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=""
      overLayCss={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
      contentCss={{
        padding: '2rem',
        width: '80%',
        maxWidth: '60rem',
        height: '80%',
        marginLeft: '0',
        marginRight: '0',
        margin: 'auto',
        maxHeight: '70rem',
        overflow: 'scroll',
        borderRadius: '0.5rem',
      }}
    >
      <div className="flex justify-center items-center flex-col">
        <Txt size="h3" className="py-6">
          개인정보 수집·이용 동의서
        </Txt>
        <Txt size="h5" className="py-6">
          본인은 개인정보 보호법 제15조에 의거하여 본인의 개인정보를 제공할 것을
          동의합니다.
        </Txt>
        <Txt size="h6" className="py-4">
          1. 개인정보처리자는 다음 각 호의 어느 하나에 해당하는 경우에는
          개인정보를 수집할 수 있으며 그 수집 목적의 범위에서 이용할 수 있다.
        </Txt>
        <Txt size="h6" className="py-4">
          2. 개인정보처리자는 제1항제1호에 따른 동의를 받을 때에는 다음 각 호의
          사항을 정보주체에게 알려야 한다. 다음 각 호의 어느 하나의 사항을
          변경하는 경우에도 이를 알리고 동의를 받아야 한다.
        </Txt>
        <Txt size="h6" className="py-4">
          3. 개인정보처리자는 당초 수집 목적과 합리적으로 관련된 범위에서
          정보주체에게 불이익이 발생하는지 여부, 암호화 등 안전성 확보에 필요한
          조치를 하였는지 여부 등을 고려하여 대통령령으로 정하는 바에 따라
          정보주체의 동의 없이 개인정보를 이용할 수 있다.
        </Txt>
        <Txt size="h4" className="py-6 w-full">
          개인정보 수집 안내
        </Txt>
        <Txt size="h5" className="py-4 w-full">
          1. 개인정보의 수집 및 이용 목적
        </Txt>
        <Txt size="h6" className="py-2 w-full">
          - 주차권 신청에 대한 본인 확인절차
        </Txt>
        <Txt size="h6" className="py-2 w-full">
          - 주차권 신청 정보 관리
        </Txt>
        <Txt size="h5" className="py-4 w-full">
          2. 수집하려는 개인정보의 항목
        </Txt>
        <Txt size="h6" className="py-2 w-full">
          - 성명, 전화번호, 이메일, 비밀번호, 학번, 소속대학, 본인이 속한
          주차구간, 차량번호, 경차 여부
        </Txt>
        <Txt size="h5" className="py-4 w-full">
          3. 개인정보의 보유 및 이용 기간
        </Txt>
        <Txt size="h6" className="py-2 w-full">
          - 총학생회 임기 기간에 맞춰 매년 12월 31일까지 보관됩니다.
        </Txt>
        <Txt size="h5" className="py-4 w-full">
          4. 동의하지 않을 경우의 처리
        </Txt>
        <Txt size="h6" className="py-2 w-full">
          - 이용자는 개인정보 수집 및 제공 동의에 거부할 수 있으며, 거부 시
          주차권 신청이 제한됩니다.
        </Txt>
        <div>
          <Button
            size="small"
            color="secondary"
            onClick={onRequestClose}
            className="m-8"
          >
            닫기
          </Button>
        </div>
      </div>
    </Modal>
  );
};
