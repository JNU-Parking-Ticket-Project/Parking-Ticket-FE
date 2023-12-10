import { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Button, Txt } from '@quokka/design-system';
import { ko } from 'date-fns/locale';
import { setMinutes, setHours } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import './DateTime.css';

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
  const selectedMonth = date.getMonth().toString().padStart(2, '0');
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

export const SettingTime = () => {
  const [opendate, setOpenDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 59), 23),
  );

  return (
    <>
      <div className="flex justify-around gap-8">
        <DateTimePicker
          date={opendate}
          setDate={(date) => {
            if (!date) return;
            setOpenDate(date);
            if (date > endDate) setEndDate(date);
          }}
          title="Open"
        />
        <DateTimePicker
          date={endDate}
          setDate={(date) => {
            if (!date) return;
            setEndDate(date);
          }}
          title="Close"
        />
      </div>
      <Button size="small" className="float-right my-4">
        저장
      </Button>
    </>
  );
};
