import React from 'react';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import DefaultLayout from '@components/Shared/DefaultLayout';
import Input from '@components/Shared/Input';
import Button from '@components/Shared/Button';
import * as S from './LoginPage.style';

// const useLogin = () => {
//   const mutation = useMutation('login', () => {
//
//   }, {
//     onMutate: () => {
//
//     }
//   })
// }

const LoginPage: NextPage = () => {
  return (
    <DefaultLayout>
      <S.Logo />
      <S.Form>
        <S.FieldSet>
          <S.LoginField>
            <Input
              fill
              placeholder="KOREATECH 이메일"
              Suffix="@koreatech.ac.kr"
            />
          </S.LoginField>
          <S.PasswordField>
            <Input
              fill
              type="password"
              placeholder="비밀번호"
            />
          </S.PasswordField>
          <S.InlineAlert>가입하지 않은 아이디거나, 잘못된 비밀번호 입니다.</S.InlineAlert>
          <S.SubmitField>
            <Button type="submit" fill>로그인</Button>
          </S.SubmitField>
        </S.FieldSet>
      </S.Form>
    </DefaultLayout>
  );
};

export default LoginPage;
