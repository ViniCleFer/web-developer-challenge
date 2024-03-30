import { useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { Image } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { LinkButton } from '@/components/LinkButton';
import { Button } from '@/components/Button';

import { acceptImageTypes } from '@/helpers/img-helper';

import {
  Container,
  DropzoneContainer,
  ImageContainer,
  ImagePreview,
  TrashButton,
  FormFooter,
} from './styles';

const postValidationSchema = z.object({
  image: z.string().url('A imagem precisa ser uma URL válida'),
  name: z.string().max(3, 'O nome precisa ter no mínimo 3 caracteres'),
  description: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres'),
});

type PostValidationSchema = z.infer<typeof postValidationSchema>;

export function Form() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
    watch,
    setValue,
    getValues,
  } = useForm<PostValidationSchema>({
    resolver: zodResolver(postValidationSchema),
  });

  const handleUploadFile = useCallback(
    (files: File[]) => {
      console.log('files', files);

      setValue('image', URL.createObjectURL(files[0]));
    },
    [setValue]
  );

  const image = watch('image');

  const handleSave = useCallback((data: PostValidationSchema) => {
    console.log('data', data);
  }, []);

  const handleClear = useCallback(() => {
    reset();
  }, [reset]);

  const clearImage = useCallback(() => {
    setValue('image', '');
  }, [setValue]);

  return (
    <Container onSubmit={handleSubmit(handleSave)}>
      <DropzoneContainer>
        <Dropzone onDrop={handleUploadFile} accept={acceptImageTypes}>
          {({ getRootProps, getInputProps }) => (
            <ImageContainer error={!!errors.image} {...getRootProps()}>
              <input {...getInputProps()} {...register('image')} readOnly />
              {image && !errors.image ? (
                <ImagePreview src={getValues('image')} />
              ) : (
                <Image size={24} />
              )}
            </ImageContainer>
          )}
        </Dropzone>
        {image && !errors.image && (
          <TrashButton size={24} onClick={clearImage} />
        )}
      </DropzoneContainer>

      <Input
        placeholder='Digite seu nome'
        {...register('name')}
        error={errors.name}
      />
      <Textarea
        placeholder='Mensagem'
        {...register('description')}
        error={errors.description}
      />

      <FormFooter>
        <LinkButton type='button' onClick={handleClear}>
          Descartar
        </LinkButton>
        <Button isValid={isValid} type='submit'>
          Publicar
        </Button>
      </FormFooter>
    </Container>
  );
}
