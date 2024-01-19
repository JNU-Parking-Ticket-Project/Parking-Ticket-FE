import { useEffect, useState } from 'react';
import {
  useSectorCreateMutate,
  useSectorDeleteMutate,
  useSectorUpdateMutate,
  useSectorsQuery,
} from '../react-query/useSetting';
import { useQueryClient } from '@tanstack/react-query';
import { Sector } from '../../apis/dtos/sector.dtos';

export const useSectionSettingTable = () => {
  const { sectorSettingData } = useSectorsQuery();
  const queryClient = useQueryClient();
  const { postSectors } = useSectorCreateMutate();
  const { deleteSector } = useSectorDeleteMutate();
  const { putSectors } = useSectorUpdateMutate();

  const [data, setData] = useState(sectorSettingData);
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    setData(sectorSettingData);
  }, [sectorSettingData]);

  const onEditValue =
    (id: number, type?: 'numeric') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = e.target;

      if (type === 'numeric' && isNaN(+value)) return;
      if (+value < 0) return;
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
    if (isCreate) return;
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
    if (isEdit) return;
    if (!isCreate) {
      setIsCreate(true);
      const initSector: Sector = {
        id: -1,
        name: '',
        reserve: 0,
        sectorCapacity: 0,
        sectorNumber: '',
        issueAmount: 0,
      };
      queryClient.setQueryData(['sectors'], (prev: Sector[]) => [
        ...prev,
        initSector,
      ]);
      return;
    }

    const sectors = data.filter(
      (sector) =>
        sector.id === -1 &&
        sector.name !== '' &&
        sector.sectorNumber !== '' &&
        sector.sectorCapacity !== 0 &&
        sector.reserve !== 0,
    );

    if (sectors.length === 0) {
      alert('입력되지 않은 값이 있습니다.');
      return;
    }

    postSectors(sectors, {
      onError: (error) => {
        alert(error.message);
      },
    });
    setIsCreate(false);
  };

  return {
    data,
    onEditValue,
    toggleEdit,
    isEdit,
    isCreate,
    deleteSection,
    createSection,
  };
};
