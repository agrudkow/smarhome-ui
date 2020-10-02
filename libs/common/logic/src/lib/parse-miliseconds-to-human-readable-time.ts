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
