import axios from 'axios';

import { handleRejectPromise, handleResolvePromise } from '../../helpers';

export const artistFetchWrapper = {
  postAddArtist,
  postAddArtistWithJSON
};

// Add Artist function
function postAddArtist(url: string, formData: any, token: string) {
  const headers = {
    'Content-Type': 'multipart/form-data',
    auth: token || ''
  };
  return axios
    .post(`${url}/detail`, formData, { headers: headers })
    .then(handleResolvePromise)
    .catch(handleRejectPromise);
}

// Add Artist function JSON
function postAddArtistWithJSON(url: string, body: any, token: string) {
  const headers = {
    auth: token || ''
  };
  return axios
    .post(`${url}/detail`, body, { headers: headers })
    .then(handleResolvePromise)
    .catch(handleRejectPromise);
}
