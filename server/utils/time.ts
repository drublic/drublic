const pad = (num: number): string => (num < 10 ? "0" : "") + num;

const secondsToDaysHHMMSS = (seconds: number): string => {
  const days: number = Math.floor(seconds / 86400);
  const hours: number = Math.floor((seconds % 86400) / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const secs: number = Math.floor(seconds % 60);

  return `${days} days ${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};

export default secondsToDaysHHMMSS;