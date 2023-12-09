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

  const onEditValue =
    (sectorNumber: string, type?: 'numeric') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      if (type === 'numeric' && isNaN(+value)) return;
      if (type === 'numeric' && +value < 0) return;

      setData((prev) => {
        return prev.map((data) => {
          if (data.sectorNumber === sectorNumber) {
            return {
              ...data,
              [name]: value,
            };
          }
          return data;
        });
      });
    };

  const toggleEdit = (sectorNumber: string) => {
    setIsEdit((prev) => {
      return prev.map((data) => {
        if (data.sectorNumber === sectorNumber) {
          return {
            ...data,
            isEdit: !data.isEdit,
          };
        }
        return data;
      });
    });
  };

  const getIsEdit = (sectorNumber: string) => {
    const result = isEdit.find((data) => data.sectorNumber === sectorNumber);
    return result?.isEdit ?? false;
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
              name="sectorNumber"
              value={data.sectorNumber}
              isEdit={getIsEdit(data.sectorNumber)}
              onChange={onEditValue(data.sectorNumber)}
            />
          </td>
          <td>
            <SettingInput
              name="sectorCapacity"
              value={data.sectorCapacity}
              isEdit={getIsEdit(data.sectorNumber)}
              onChange={onEditValue(data.sectorNumber, 'numeric')}
            />
          </td>
          <td>
            <SettingInput
              name="reserve"
              value={data.reserve}
              isEdit={getIsEdit(data.sectorNumber)}
              onChange={onEditValue(data.sectorNumber)}
            />
          </td>
          <td>{+data.sectorCapacity + +data.reserve}</td>
          <td className="!flex-[5_0_12rem] !justify-start px-6">
            <SettingInput
              className="w-full bg-transparent"
              name="name"
              value={data.name}
              isEdit={getIsEdit(data.sectorNumber)}
              onChange={onEditValue(data.sectorNumber, 'numeric')}
            />
          </td>
          <td className="!flex-[1_0_1rem]">
            <button
              className="w-8 h-9"
              onClick={() => toggleEdit(data.sectorNumber)}
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
