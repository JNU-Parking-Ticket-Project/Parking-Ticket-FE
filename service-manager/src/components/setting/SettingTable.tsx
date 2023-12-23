import Delete from '../../assets/delete.svg';
import { SettingInput } from './SettingInput';
import { useSectionSettingTable } from '../../hooks/useSetting/useSectionSetting';
import { Button } from '@quokka/design-system';

export const SettingTable = () => {
  const {
    data,
    isEdit,
    toggleEdit,
    onEditValue,
    deleteSection,
    createSection,
  } = useSectionSettingTable();

  return (
    <>
      <table className="w-full divide-y rounded-lg shadow-[0_0_0_1px_#E4E4E4] min-w-[50rem]">
        <thead className="[&>tr]:divide-x [&>tr>*]:h-16 [&>tr>*]:flex [&>tr>*]:justify-center [&>tr>*]:items-center [&>tr>*]:flex-[2_0_6rem]">
          <tr className="flex w-full">
            <th>구간</th>
            <th>구간 정원</th>
            <th>예비 정원</th>
            <th>구간 총원</th>
            <th className="!flex-[5_0_12rem] !border-r-0">단과대학</th>
            <th className="!flex-[1_0_1rem] !border-l-0"></th>
          </tr>
        </thead>
        <tbody className="[&>tr]:divide-x divide-y [&>tr>*]:h-16 [&>tr>*]:flex [&>tr>*]:justify-center [&>tr>*]:items-center [&>tr>*]:flex-[2_0_6rem]">
          {data.map((data) => (
            <tr className="flex w-full  hover:bg-[#F9FAFC]" key={data.id}>
              <td>
                <SettingInput
                  name="sectorNumber"
                  value={data.sectorNumber}
                  isEdit={isEdit}
                  onChange={onEditValue(data.id)}
                />
              </td>
              <td>
                <SettingInput
                  name="sectorCapacity"
                  value={`${data.sectorCapacity}`}
                  isEdit={isEdit}
                  onChange={onEditValue(data.id, 'numeric')}
                />
              </td>
              <td>
                <SettingInput
                  name="reserve"
                  value={`${data.reserve}`}
                  isEdit={isEdit}
                  onChange={onEditValue(data.id, 'numeric')}
                />
              </td>
              <td>{+data.sectorCapacity + +data.reserve}</td>
              <td className="!flex-[5_0_12rem] !justify-start">
                <SettingInput
                  className="w-full bg-transparent"
                  name="name"
                  value={data.name}
                  isEdit={isEdit}
                  onChange={onEditValue(data.id)}
                />
              </td>
              <td className="!flex-[1_0_1rem]">
                <button
                  className="w-8 h-8"
                  onClick={() => deleteSection(`${data.id}`)}
                >
                  <img src={Delete} alt="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 float-right flex gap-4">
        {isEdit && (
          <Button size="small" onClick={createSection}>
            추가하기
          </Button>
        )}
        <Button size="small" onClick={toggleEdit}>
          {isEdit ? '저장하기' : '수정하기'}
        </Button>
      </div>
    </>
  );
};
