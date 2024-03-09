import { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Button, InputText, Txt } from '@quokka/design-system';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './DateTime.css';
import { useSectionTimeSettingCreate } from '../../hooks/react-query/useSectionTimeSetting';
import { getFormalDateBy } from '../../functions/date';

registerLocale('ko', ko);
setDefaultLocale('ko');

interface SettingTimeProps {
  date: Date;
  setDate: (
    date: Date | null,
    event?: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
  title: string;
}

const DateTimePicker = ({ date, setDate, title }: SettingTimeProps) => {
  const selectedYear = date.getFullYear();
  const selectedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const selectedDay = date.getDate().toString().padStart(2, '0');
  const selectedHour = date.getHours().toString().padStart(2, '0');
  const selectedMinute = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-[25rem]">
      <Txt size="h3">{title}</Txt>
      <Txt
        size="h4"
        color="white"
        className="text-center p-4 bg-[linear-gradient(91deg,#0255D5_12.84%,#9CBBFF_104.56%)] rounded-md"
      >{`${selectedYear} : ${selectedMonth} : ${selectedDay} / ${selectedHour} : ${selectedMinute}`}</Txt>
      <div className="flex justify-center">
        <DatePicker
          selected={date}
          onChange={setDate}
          minDate={new Date()}
          showTimeSelect
          inline
        />
      </div>
    </div>
  );
};

export const SettingCreateTime = () => {
  const { createSettingTime } = useSectionTimeSettingCreate();
  const [openDate, setOpenDate] = useState(() => getFormalDateBy(new Date()));
  const [endDate, setEndDate] = useState(() => getFormalDateBy(new Date()));
  const [title, setTitle] = useState('');

  const onSave = () => {
    const currentTime = Date.now();
    if (title === '') {
      alert('제목을 입력해주세요');
      return;
    }

    if (currentTime > openDate.getTime()) {
      alert('OPEN 시간을 현재 시간보다 이전 시간으로 설정할 수 없습니다.');
      return;
    }

    if (currentTime > endDate.getTime()) {
      alert('CLOSE 시간을 현재 시간보다 이전 시간으로 설정할 수 없습니다.');
      return;
    }

    createSettingTime({
      startAt: openDate,
      endAt: endDate,
      title,
    });
  };

  return (
    <>
      <div className="py-4 w-full flex gap-2 justify-center items-center">
        <Txt size="h3">제목</Txt>
        <InputText
          className="flex-1"
          type="text"
          designType="box"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex justify-around gap-8">
        <DateTimePicker
          date={openDate}
          setDate={(date) => {
            const currentTime = Date.now();

            if (!date) return;
            if (currentTime > date.getTime()) {
              alert('현재 시간보다 이전 시간으로 설정할 수 없습니다.');
              return;
            }
            setOpenDate(date);
            if (date > endDate) setEndDate(date);
          }}
          title="Open"
        />
        <DateTimePicker
          date={endDate}
          setDate={(date) => {
            const currentTime = Date.now();

            if (!date) return;
            if (date < openDate) return;
            if (currentTime > date.getTime()) {
              alert('현재 시간보다 이전 시간으로 설정할 수 없습니다.');
              return;
            }
            setEndDate(date);
          }}
          title="Close"
        />
      </div>
      <Button size="small" className="float-right my-4" onClick={onSave}>
        저장
      </Button>
    </>
  );
};
