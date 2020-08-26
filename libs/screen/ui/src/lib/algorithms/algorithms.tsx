import React, { FC, useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  PaginatedTable,
  InfoHeader,
  SearchBar,
  Cell,
} from '@smarthome/common/ui';
import { useWindowDimensions } from '@smarthome/common/logic';
import {
  algorithmsDataParser,
  algorithmsCellsParser,
  BaseAlgorithm,
} from '@smarthome/screen/logic';
import { fetchAlgorithmsList } from '@smarthome/screen/service';
import { useHistory } from 'react-router';
import { Routes } from '@smarthome/common/service';

export const Algorithms: FC = () => {
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tableData, setTableData] = useState<BaseAlgorithm[]>(
    algorithmsDataParser(fetchAlgorithmsList(), (id: string) => () =>
      history.push(`${Routes.Algorithms}/${id}`)
    )
  );
  const [tableCells, setTableCells] = useState<Cell<keyof BaseAlgorithm>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseAlgorithm>('rating');
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  return (
    <>
      <InfoHeader
        headerText={'List of avaliable algorithms'}
        infoMessageText={
          'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating.'
        }
      />
      <SearchBar />
      <PaginatedTable<BaseAlgorithm>
        data={tableData}
        cells={tableCells}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </>
  );
};

export default Algorithms;
