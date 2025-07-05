import { Suspense, useState } from 'react';
import { Button } from '@quokka/design-system';

import {
  useAllRegistrationQuery,
  useTransmitEmail,
} from '../../hooks/react-query/useRegistration';
import { useSectorQueryById } from '../../hooks/react-query/useSetting';
import { ApplyCount } from './ApplyCount';
import { EXCEL_HEADERS, TABLE_HEADERS } from '../../constants/apply';
import { getExcelCellValue, getTableCellValue } from '../../functions/apply';
import ErrorBoundary from '../common/ErrorBoundary';

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
          .map((registration) =>
            EXCEL_HEADERS.reduce(
              (acc, header) => ({
                ...acc,
                ...getExcelCellValue(header, registration, registrations),
              }),
              {},
            ),
          ),
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
          <ErrorBoundary>
            <Suspense>
              <ApplyCount eventId={eventId} sector={selectedSector} />
            </Suspense>
          </ErrorBoundary>
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
        <div className="mb-4" />
        <table className="w-full min-w-[50rem]">
          <thead>
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
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
                    {TABLE_HEADERS.map((header) => (
                      <td key={header.key}>
                        {getTableCellValue(
                          header.key,
                          registration,
                          registrations,
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
