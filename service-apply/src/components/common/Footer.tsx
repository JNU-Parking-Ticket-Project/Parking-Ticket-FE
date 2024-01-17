import { Txt } from '@quokka/design-system';

export const Footer = () => {
  return (
    <footer className="grid md:grid-cols-12 w-full left-0 border-t border-[#DBDBDB] py-4 h-44">
      <div className="px-8 md:px-0 md:col-start-10 md:col-span-3 flex flex-col capitalize">
        <Txt size="h6" className="py-2">
          contact us
        </Txt>
        <Txt className="py-2">
          전남대학교 총학생회: 010-3836-3482(안전관리국장)
        </Txt>
        <Txt>JNU-student council</Txt>
      </div>
    </footer>
  );
};
