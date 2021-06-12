const fetcher = (url, config) => fetch(url, config).then((res) => res.json());

export default fetcher;
