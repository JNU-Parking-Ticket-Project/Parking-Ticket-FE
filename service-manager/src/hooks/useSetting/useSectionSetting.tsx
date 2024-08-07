import { useEffect, useState } from 'react';
import {
  useSectorCreateMutate,
  useSectorDeleteMutate,
  useSectorQueryById,
  useSectorUpdateMutate,
} from '../react-query/useSetting';
import { useQueryClient } from '@tanstack/react-query';
import { Sector } from '../../apis/dtos/sector.dtos';
import { SectorRequest } from '../../apis/sectorSettings.apis';
import { INIT_SECTOR } from '../../constants/sector';
import { pipe } from '../../functions/util';

const isNotEmptyContentSector = (sector: Sector) => {
  return sector.id === -1 && sector.name !== '' && sector.sectorNumber !== '';
};

const filterNotEmptyContentSector = (sectors: Sector[]) => {
  return sectors.filter((sector) => isNotEmptyContentSector(sector));
};

const getSectorRequestBody = (sectors: Sector[]): SectorRequest[] => {
  return sectors.map(({ id, issueAmount, ...rest }) => rest);
};

export const useSectionSettingTable = (eventId: string) => {
  const queryClient = useQueryClient();
  const { sectorSettingData } = useSectorQueryById(eventId);
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
      putSectors(getSectorRequestBody(data), {
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
    if (isCreate) {
      setIsCreate(false);
      queryClient.invalidateQueries({
        queryKey: ['sectors'],
      });
      return;
    }
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
      queryClient.setQueryData(['sectors', eventId], (prev: Sector[]) => [
        ...prev,
        INIT_SECTOR,
      ]);
      return;
    }

    const sectors = pipe<Sector[], SectorRequest[]>(
      filterNotEmptyContentSector,
      getSectorRequestBody,
    )(data);

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
