import { Button, Txt } from '@quokka/design-system';
import { useAllRegistrationQuery } from '../../hooks/react-query/useRegistration';

export const ApplyList = () => {
  const { registrations } = useAllRegistrationQuery();

  const exportXLSX = async () => {
    const data = registrations.map((registration) => {
      return {
        순서: registration.id,
        이름: registration.name,
        차량번호: registration.carNumber,
        sector이름: registration.sectorNum,
        학생번호: registration.studentNumber,
        경차여부: registration.isCompact ? '경차' : '경차 아님',
        휴대폰번호: registration.phoneNumber,
        이메일: registration.email,
      };
    });
    const XLSX = await import('xlsx');
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'sheet1');
    XLSX.writeFile(workBook, '등록자 명단.xlsx');
  };

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>순서</th>
            <th>이름</th>
            <th>차량 번호</th>
            <th>sector이름</th>
            <th>학생번호</th>
            <th>경차여부</th>
            <th>휴대폰 번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {registrations.map((registration, index) => {
            return (
              <tr key={registration.id}>
                <td>{registration.id}</td>
                <td>{registration.name}</td>
                <td>{registration.carNumber}</td>
                <td>{registration.sectorNum}</td>
                <td>{registration.studentNumber}</td>
                <td>{registration.isCompact ? '경차' : '경차 아님'}</td>
                <td>{registration.phoneNumber}</td>
                <td>{registration.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-right p-4">
        <Button size="small" onClick={exportXLSX}>
          엑셀다운로드
        </Button>
      </div>
    </>
  );
};
