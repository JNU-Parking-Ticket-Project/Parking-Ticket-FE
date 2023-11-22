import { CHONNAM_UNIV, FOOTER } from '../../constants/common';

export const Footer = () => {
  return (
    <footer className="grid grid-cols-12 absolute bottom-0 w-full left-0 border-t border-[#DBDBDB] py-4">
      <div className="col-start-10 col-span-3 capitalize">
        <div className="text-lg py-4">{FOOTER.CONTACT_US}</div>
        <div className="text-base py-2">{`${CHONNAM_UNIV} ${FOOTER.STUDENT_COUNCIL_KO}: ${FOOTER.STUDENT_COUNCIL_PHONE}`}</div>
        <div className="text-base">{FOOTER.STUDENT_COUNCIL_EN}</div>
      </div>
    </footer>
  );
};
export default Footer;
