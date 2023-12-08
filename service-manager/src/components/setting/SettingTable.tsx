import Edit from '../../assets/highlight.svg';
import Delete from '../../assets/delete.svg';
import { useState } from 'react';
import { SettingInput } from './SettingInput';

const SECTION_SETTING_DATA = Array.from({ length: 4 }, (_, i) => ({
  sectorNumber: `${i + 1}구간`,
  name: '공과대학, 공과대학, 공과대학',
  sectorCapacity: '2',
  reserve: '4',
}));

export const SettingTable = () => {
  const [data, setData] = useState(SECTION_SETTING_DATA);
  const [isEdit, setIsEdit] = useState(
    SECTION_SETTING_DATA.map((data) => ({
      sectorNumber: data.sectorNumber,
      isEdit: false,
    })),
  );

  const onEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return prev.map((data) => {
        if (data.name === name) {
          return {
            ...data,
            [name]: value,
          };
        }
        return data;
      });
    });
  };

  const onEdit = (sectorNumber: string) => {
    setIsEdit((prev) => {
      return prev.map((data) => {
        if (data.sectorNumber === sectorNumber) {
          return {
            ...data,
            isEdit: true,
          };
        }
        return data;
      });
    });
  };

  return (
    <table className="w-full divide-y [&>tr]:divide-x rounded-lg [&>tr>*]:h-16 [&>tr>*]:flex [&>tr>*]:justify-center [&>tr>*]:items-center shadow-[0_0_0_1px_#E4E4E4] [&>tr>*]:border-[#E4E4E4] [&>tr]:border-[#E4E4E4] [&>tr>*]:flex-[2_0_6rem]">
      <tr className="flex w-full">
        <th>구간</th>
        <th>구간 정원</th>
        <th>예비 정원</th>
        <th>구간 총원</th>
        <th className="!flex-[5_0_12rem] !border-r-0">단과대학</th>
        <th className="!flex-[1_0_1rem] !border-l-0"></th>
        <th className="!flex-[1_0_1rem] !border-l-0"></th>
      </tr>
      {data.map((data) => (
        <tr className="flex w-full  hover:bg-[#F9FAFC]">
          <td>
            <SettingInput
              isEdit={
                isEdit.find((data) => data.sectorNumber === data.sectorNumber)
                  ?.isEdit ?? false
              }
              value={data.sectorNumber}
              onChange={onEditValue}
            />
          </td>
          <td>{data.sectorCapacity}</td>
          <td>{data.reserve}</td>
          <td>{+data.sectorCapacity + +data.reserve}</td>
          <td className="!flex-[5_0_12rem] !justify-start pl-6">{data.name}</td>
          <td className="!flex-[1_0_1rem]">
            <button
              className="w-8 h-9"
              onClick={() => onEdit(data.sectorNumber)}
            >
              <img src={Edit} alt="edit" />
            </button>
          </td>
          <td className="!flex-[1_0_1rem]">
            <button className="w-8 h-9">
              <img src={Delete} alt="delete" />
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};
