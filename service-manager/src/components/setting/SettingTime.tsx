import { useEffect, useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Button, InputText, Txt } from '@quokka/design-system';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './DateTime.css';
import { useSectionTimeSetting } from '../../hooks/useSetting/useSectionTimeSetting';
import { useSettingEventQueryBy } from '../../hooks/react-query/useSetting';

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

export const SettingTime = ({ eventId }: { eventId: string }) => {
  const { updateSettingTime } = useSectionTimeSetting();
  const { event } = useSettingEventQueryBy(eventId);

  const [openDate, setOpenDate] = useState(event.dateTimePeriod.startAt);
  const [endDate, setEndDate] = useState(event.dateTimePeriod.endAt);
  const [title, setTitle] = useState(event.eventTitle);

  useEffect(() => {
    setOpenDate(event.dateTimePeriod.startAt);
    setEndDate(event.dateTimePeriod.endAt);
    setTitle(event.eventTitle);
  }, [event]);

  return (
    <>
      <div className="py-4 w-full flex gap-4 justify-center items-center">
        <Txt size="h3">제목</Txt>
        {event.eventStatus !== 'READY' ? (
          <Txt size="h3" className="flex-1 font-normal">
            {title}
          </Txt>
        ) : (
          <InputText
            className="flex-1"
            type="text"
            designType="box"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </div>
      <div className="flex justify-around gap-8 mb-6">
        <DateTimePicker
          date={openDate}
          setDate={(date) => {
            if (event.eventStatus === 'CLOSED') return;
            if (!date) return;
            setOpenDate(date);
            if (date > endDate) setEndDate(date);
          }}
          title="Open"
        />
        <DateTimePicker
          date={endDate}
          setDate={(date) => {
            if (event.eventStatus === 'CLOSED') return;
            if (!date) return;
            if (date < openDate) return;
            setEndDate(date);
          }}
          title="Close"
        />
      </div>
      {(event.eventStatus === 'READY' || event.eventStatus === 'OPEN') && (
        <Button
          size="small"
          className="float-right my-4"
          onClick={() => {
            if (!title.length) {
              alert('제목을 입력해주세요.');
              return;
            }
            updateSettingTime({
              startAt: openDate,
              endAt: endDate,
              title,
            });
          }}
        >
          저장
        </Button>
      )}
    </>
  );
};
