import { LoremIpsumGenerator } from '@smarthome/common/logic';
import { ExecutionBillingDTO } from '@smarthome/data';

const createDate = (day: number) => (day < 10 ? `0${day}` : day);

export const fetchExecutionBillingList = (): Promise<ExecutionBillingDTO[]> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve(
              [...Array(45)]
                .map((_, index) => ({
                  resultsetId: `${index}`,
                  algorithmDisplayName: `Algorithm ${LoremIpsumGenerator.generateWords(
                    3
                  )} ${index}`,
                  datasetDisplayName: `Dataset ${LoremIpsumGenerator.generateWords(
                    3
                  )} ${index}`,
                  billed: Number((Math.random() * 6).toFixed(4)),
                  date: `${createDate(
                    Math.round(Math.random() * 30) + 1
                  )}-06-2020`,
                }))
                .sort(({ date: a }, { date: b }) => (a > b ? -1 : 1))
            )
          : reject(new Error('Server error')),
      500
    )
  );
