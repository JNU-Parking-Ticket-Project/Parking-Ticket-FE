import { useEffect, useState } from 'react';
import {
  useSectorCreateMutate,
  useSectorDeleteMutate,
  useSectorUpdateMutate,
  useSectorsQuery,
} from '../react-query/useSetting';

export const useSectionSettingTable = () => {
  const { sectorSettingData } = useSectorsQuery();
  const { postSectors } = useSectorCreateMutate();
  const { deleteSector } = useSectorDeleteMutate();
  const { putSectors } = useSectorUpdateMutate();

  const [data, setData] = useState(sectorSettingData);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setData(sectorSettingData);
  }, [sectorSettingData]);

  const onEditValue =
    (id: number, type?: 'numeric') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = e.target;

      if (type === 'numeric' && isNaN(+value)) return;
      if (type === 'numeric') {
        value = `${+value}`;
      }

      setData((prev) => {
        return prev.map((data) => {
          if (data.id === id) {
            return {
              ...data,
              [name]: value,
            };
          }
          return data;
        });
      });
    };

  const toggleEdit = () => {
    if (isEdit) {
      putSectors(data, {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: () => {
          alert('수정되었습니다.');
        },
      });
    }

    setIsEdit((prev) => !prev);
  };

  const deleteSection = (id: string) => {
    deleteSector(id, {
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  const createSection = () => {
    const section = [
      { name: '', reserve: 0, sectorCapacity: 0, sectorNumber: '' },
    ];
    postSectors(section, {
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return {
    data,
    onEditValue,
    toggleEdit,
    isEdit,
    deleteSection,
    createSection,
  };
};
