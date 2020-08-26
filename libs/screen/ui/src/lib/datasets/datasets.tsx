import React, { FC, useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useQueryParam, StringParam } from 'use-query-params';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  Cell,
} from '@smarthome/common/ui';
import {
  BaseDataset,
  datasetsDataParser,
  datasetsCellsParser,
} from '@smarthome/screen/logic';
import { fetchDatasetsList } from '@smarthome/screen/service';
import { useWindowDimensions } from '@smarthome/common/logic';

export const Datasets: FC = () => {
  const [selectQueryParam] = useQueryParam('select', StringParam);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tableData, setTableData] = useState<BaseDataset[]>(
    datasetsDataParser(
      fetchDatasetsList(),
      selectQueryParam === 'true' ? 'select' : 'more',
      selectQueryParam === 'true'
        ? (id: string) => () => {
            console.log(`Go to result page. ID -> ${id}`);
          }
        : (id: string) => () => {
            console.log(`Go to more page. ID -> ${id}`);
          }
    )
  );
  const [tableCells, setTableCells] = useState<Cell<keyof BaseDataset>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseDataset>('name');
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  useEffect(() => {
    const cells = datasetsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  return (
    <>
      <InfoHeader
        headerText={'List of owned datasets'}
        infoMessageText={
          'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
        }
      />
      <SearchBar />
      <PaginatedTable<BaseDataset>
        data={tableData}
        cells={tableCells}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </>
  );
};

export default Datasets;
