import { HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TextField } from '../ControlledFields/TextField';
import { Button } from '../Button';
import { DropZone } from '../DropZone';

const defaultValues = {
  login: '',
  password: '',
};

export type FormData = typeof defaultValues;

export const LoginForm = ({
  className = '',
  ...htmlDivProps
}: HTMLAttributes<HTMLDivElement>) => {
  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    formState: { isValid },
    setError,
    clearErrors,
  } = methods;

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    console.log(values);
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center w-full max-w-[400px]">
      <div className="grow w-full">
        <FormProvider {...methods}>
          <form
            className="mx-auto w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className="mb-4"
              name="gameName"
              label="Game name"
              onChange={() => clearErrors('password')}
              rules={{
                required: 'Обязательное поле',
              }}
            />
            <TextField
              className="mb-6"
              name="gameId"
              label="Game id"
              onChange={() => clearErrors('login')}
              type="password"
              rules={{
                required: 'Обязательное поле',
              }}
            />
            <DropZone />
            <Button
              className="w-full my-[26px] !capitalize"
              type="submit"
              size="medium-s"
            >
              sign in
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};