import { parseMilisecondsToHumanReadableTime } from './parse-miliseconds-to-human-readable-time';

describe('parseMilisecondsToHumanReadableTime', () => {
  it('should parse correctly', () => {
    expect(parseMilisecondsToHumanReadableTime(10042342)).toEqual('2h 47m 22s');
  });
});
