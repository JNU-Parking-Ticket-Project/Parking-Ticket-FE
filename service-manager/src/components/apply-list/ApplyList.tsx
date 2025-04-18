import { useState } from 'react';
import { Button } from '@quokka/design-system';

import {
  useAllRegistrationQuery,
  useTransmitEmail,
} from '../../hooks/react-query/useRegistration';
import { useSectorQueryById } from '../../hooks/react-query/useSetting';
import { ApplyCount } from './ApplyCount';

interface ApplyListProps {
  eventId: string;
}

export const ApplyList = ({ eventId }: ApplyListProps) => {
  const { registrations } = useAllRegistrationQuery(eventId);

  const sectors = Array.from(
    new Set(registrations.map((registration) => registration.sectorNum)),
  ).sort();
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const { sectorSettingData } = useSectorQueryById(eventId);
  const { onEmailTransmit } = useTransmitEmail(eventId);

  const exportXLSX = async () => {
    const data = sectorSettingData
      .map((sector) =>
        registrations
          .filter(
            (registration) => registration.sectorNum === sector.sectorNumber,
          )
          .map((registration, index) => ({
            구간: registration.sectorNum,
            순서: index + 1,
            이름: registration.name,
            학과: registration.department,
            차량번호: registration.carNumber,
            학생번호: registration.studentNumber,
            경차여부: registration.isCompact ? '경차' : '경차 아님',
            휴대폰번호: registration.phoneNumber,
            이메일: registration.email,
          })),
      )
      .flat();

    const XLSX = await import('xlsx');
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'sheet1');
    XLSX.writeFile(workBook, '등록자 명단.xlsx');
  };

  return (
    <div className="flex gap-12 w-full">
      <div className="flex flex-col gap-4 w-40">
        {sectors.map((sector) => (
          <Button
            className="truncate"
            size="small"
            color={sector === selectedSector ? 'primary' : 'secondary'}
            key={sector}
            onClick={() => setSelectedSector(sector)}
          >
            {sector}
          </Button>
        ))}
      </div>
      <div className="w-full">
        <div className="flex justify-between align-bottom">
          <ApplyCount eventId={eventId} sector={selectedSector} />
          <div className="text-right my-5">
            <Button
              size="small"
              color="secondary"
              className="mr-5"
              onClick={onEmailTransmit}
            >
              이메일 전송
            </Button>
            <Button size="small" onClick={exportXLSX}>
              엑셀다운로드
            </Button>
          </div>
        </div>
        <table className="w-full min-w-[50rem]">
          <thead>
            <tr>
              <th>순서</th>
              <th>이름</th>
              <th>단과 대학</th>
              <th>학과</th>
              <th>차량 번호</th>
              <th>학생 번호</th>
              <th>경차 여부</th>
              <th>휴대폰 번호</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {registrations
              .filter(
                (registration) => registration.sectorNum === selectedSector,
              )
              .map((registration) => {
                return (
                  <tr key={registration.id}>
                    <td>
                      {registrations.findIndex(
                        (data) => data.id === registration.id,
                      ) + 1}
                    </td>
                    <td>{registration.name}</td>
                    <td>{registration.affiliation}</td>
                    <td> {registration.department} </td>
                    <td>{registration.carNumber}</td>
                    <td>{registration.studentNumber}</td>
                    <td>{registration.isCompact ? '경차' : '경차 아님'}</td>
                    <td>{registration.phoneNumber}</td>
                    <td>{registration.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
