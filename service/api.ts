import axios from 'axios';
import AxiosConfig from '../configurations/AxiosConfig';

const axiosApi = axios.create({
  ...AxiosConfig,
});

export const createUrl = (urlComplement: string) =>
  `${AxiosConfig.baseURL}/${urlComplement}`;

export default axiosApi;
