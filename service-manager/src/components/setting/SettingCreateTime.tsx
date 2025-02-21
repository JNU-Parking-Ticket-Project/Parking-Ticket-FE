import { ChangeEvent, Dispatch, useState, type SetStateAction } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Button, InputText, Txt } from '@quokka/design-system';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './DateTime.css';
import { useSectionTimeSettingCreate } from '../../hooks/react-query/useSectionTimeSetting';
import {
  getFormalDateBy,
  isValidDate,
  isValidTime,
} from '../../functions/date';

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

  const onHourChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newHour = e.target.value;

    if (!isValidTime(newHour)) {
      return alert('숫자만 입력 가능합니다.');
    }

    if (Number(newHour) > 23) {
      return alert('유효한 시간이 아닙니다.');
    }

    if (newHour !== selectedHour) {
      setDate(
        new Date(
          selectedYear,
          Number(selectedMonth) - 1,
          Number(selectedDay),
          Number(newHour),
          Number(selectedMinute),
        ),
      );
    }
  };

  const onMinuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinute = e.target.value;

    if (!isValidTime(newMinute)) {
      return alert('숫자만 입력 가능합니다.');
    }

    if (Number(newMinute) > 59) {
      return alert('유효한 시간이 아닙니다.');
    }

    if (newMinute !== selectedMinute) {
      setDate(
        new Date(
          selectedYear,
          Number(selectedMonth) - 1,
          Number(selectedDay),
          Number(selectedHour),
          Number(newMinute),
        ),
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-[25rem]">
      <Txt size="h3">{title}</Txt>
      <div className="text-center p-4 bg-[linear-gradient(91deg,#0255D5_12.84%,#9CBBFF_104.56%)] rounded-md">
        <Txt size="h4" color="white">
          {`${selectedYear} : ${selectedMonth} : ${selectedDay} / `}
        </Txt>
        <input
          className="text-2xl font-semibold w-7 text-white bg-transparent"
          value={selectedHour}
          onChange={onHourChange}
        />
        <Txt size="h4" color="white" className="pl-2 pr-2">
          :
        </Txt>
        <input
          className="text-2xl font-semibold w-7 text-white bg-transparent"
          value={selectedMinute}
          onChange={onMinuteChange}
        />
      </div>
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
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }

    if (!isValidDate(openDate, endDate)) return;

    createSettingTime({
      startAt: openDate,
      endAt: endDate,
      title,
    });
  };

  const onSetCreateTime =
    (setDate: Dispatch<SetStateAction<Date>>, setDateType: 'open' | 'close') =>
    (date: Date | null) => {
      if (!date) return;
      setDate(date);
      if (setDateType === 'open' && date > endDate) {
        setEndDate(date);
      }
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
          setDate={onSetCreateTime(setOpenDate, 'open')}
          title="Open"
        />
        <DateTimePicker
          date={endDate}
          setDate={onSetCreateTime(setEndDate, 'close')}
          title="Close"
        />
      </div>
      <Button size="small" className="float-right my-4" onClick={onSave}>
        저장
      </Button>
    </>
  );
};
