import { Txt } from '@quokka/design-system';

export const Footer = () => {
  return (
    <footer className="grid grid-cols-12 w-full left-0 border-t border-[#DBDBDB] py-4 h-44">
      <div className="col-start-10 col-span-3 flex flex-col capitalize">
        <Txt size="h6" className="py-2">
          contact us
        </Txt>
        <Txt className="py-2">전남대학교 총학생회: 010-1234-5678</Txt>
        <Txt>JNU-student council</Txt>
      </div>
    </footer>
  );
};
