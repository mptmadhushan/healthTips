import {postRequest} from './utils';

export const addAllergy = data => postRequest('/allergy/', data);
