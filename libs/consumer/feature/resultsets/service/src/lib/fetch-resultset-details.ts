import { ResultsetDTO } from '@smarthome/data';
import { LoremIpsumGenerator } from '@smarthome/common/logic';

const createDate = (day: number) => (day < 10 ? `0${day}` : day);

export const fetchResultsetDetails = (
  resultsetId: string
): Promise<ResultsetDTO> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              resultsetId,
              algorithmId: '23',
              algorithmDisplayName: `Algorithm ${LoremIpsumGenerator.generateWords(
                3
              )}`,
              datasetId: '12',
              datasetDisplayName: `Detaset ${LoremIpsumGenerator.generateWords(
                3
              )}`,
              billed: Number((Math.random() * 6).toFixed(4)),
              date: `${createDate(
                Math.round(Math.random() * 30) + 1
              )}-06-2020 13:21`,
            })
          : reject(new Error('Server error')),
      500
    )
  );
