import { getGetReq } from '../core/API';
import { GET_PROFILE_ENDPOINT } from '../core/API/constants/url';
import { User } from '../core/interfaces/user';

export const getProfile = async () =>
  (await getGetReq<User>(GET_PROFILE_ENDPOINT)).data;
