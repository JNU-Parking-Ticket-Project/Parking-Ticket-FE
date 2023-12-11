import { useEffect, useState } from 'react';
import {
  useSectorCreateMutate,
  useSectorDeleteMutate,
  useSectorUpdateMutate,
  useSectorsQuery,
} from '../react-query/useSetting';
import { Sector } from '../../apis/dtos/sector.dtos';

export const useSectionSettingTable = () => {
  const { sectorSettingData } = useSectorsQuery();
  const { postSectors } = useSectorCreateMutate();
  const { deleteSector } = useSectorDeleteMutate();
  const { putSectors } = useSectorUpdateMutate();

  const [data, setData] = useState(sectorSettingData);

  useEffect(() => {
    setData(sectorSettingData);
  }, [sectorSettingData]);

  const [isEdit, setIsEdit] = useState(
    sectorSettingData.map((data) => ({
      id: data.id,
      isEdit: false,
    })),
  );

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

  const toggleEdit = (id: number) => {
    if (getIsEdit(id)) {
      putSectors([data.find((data) => data.id === id)!], {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: () => {
          alert('수정되었습니다.');
        },
      });
    }

    setIsEdit((prev) => {
      return prev.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isEdit: !data.isEdit,
          };
        }
        return data;
      });
    });
  };

  const getIsEdit = (id: number) => {
    const result = isEdit.find((data) => data.id === id);
    return result?.isEdit ?? false;
  };

  const deleteSection = (id: string) => {
    deleteSector(id, {
      onError: (error) => {
        alert(error.message);
      },
      onSuccess: () => {
        alert('삭제되었습니다.');
      },
    });
  };

  const createSection = (section: Omit<Sector, 'id' | 'issueAmount'>[]) => {
    postSectors(section, {
      onError: (error) => {
        alert(error.message);
      },
      onSuccess: () => {
        alert('추가되었습니다.');
      },
    });
  };

  return {
    data,
    onEditValue,
    toggleEdit,
    getIsEdit,
    deleteSection,
    createSection,
  };
};
