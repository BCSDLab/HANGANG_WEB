import axios from 'axios';

export const login = async ({ id, password }: {id: string, password: string}) => {
  const response = await axios.post(
    `${process.env.API_PATH}user/login`,
    {
      portal_account: `${id}@koreatech.ac.kr`,
      password,
    },
  );
  return response;
};

export const signUp = async (infos) => {
  const response = await axios.post(
    `${process.env.API_PATH}user/sign-up`, infos);
  return response;
};