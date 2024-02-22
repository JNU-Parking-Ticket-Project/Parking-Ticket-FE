import { Txt } from '@quokka/design-system';

interface ApplyCountProps {
  sector: string;
  currentApply: number;
  totalApply: number;
}

export const ApplyCount = ({
  sector,
  currentApply,
  totalApply,
}: ApplyCountProps) => {
  return (
    <div>
      <Txt size="h6" color="black">
        {sector}구간 신청자 수 : {currentApply}명 / {totalApply}명
      </Txt>
    </div>
  );
};
