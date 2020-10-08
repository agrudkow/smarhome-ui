/**
 * @function parseMilisecondsToHumanReadableTime - converts time provided in miliseconds to strign in format: `HH`h `MM`m `ss`s eg. `2h 32m 11s`.
 *
 * @param miliseconds - time in miliseconds
 */
export const parseMilisecondsToHumanReadableTime = (
  miliseconds: number
): string => {
  let seconds = miliseconds / 1000;
  let minutes = seconds / 60;
  const hours = Math.floor(minutes / 60);
  minutes = Math.floor(minutes % 60);
  seconds = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
};
