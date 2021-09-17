import { apiUrl } from '../../../config';
import { artistFetchWrapper } from '../helpers';

export const artistService = {
  addArtist,
  addArtistWithJSON
};

const baseUrl = `${apiUrl}/artist`;

function addArtist(formData: any, token: string) {
  return artistFetchWrapper.postAddArtist(baseUrl, formData, token);
}

function addArtistWithJSON(data: any, token: string) {
  return artistFetchWrapper.postAddArtistWithJSON(baseUrl, data, token);
}
