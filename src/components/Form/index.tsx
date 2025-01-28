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
import { ErrorMessage } from '@/components/ErrorMessage';

import { acceptImageTypes } from '@/helpers/img-helper';

import { usePosts } from '@/hooks/posts';

import {
  Container,
  DropzoneContainer,
  ImageContainer,
  ImagePreview,
  TrashButton,
  FormFooter,
} from './styles';

const postValidationSchema = z.object({
  image: z.string(),
  name: z.string().max(30, 'O nome precisa ter no mínimo 3 caracteres'),
  description: z
    .string()
    .min(10, 'A descrição precisa ter no mínimo 10 caracteres'),
});

export type PostValidationSchema = z.infer<typeof postValidationSchema>;

export function Form() {
  const { addingPosts } = usePosts();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm({
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

  const handleClear = useCallback(() => {
    setValue('name', '');
    setValue('description', '');
    setValue('image', '');
  }, [setValue]);

  const handleSave = useCallback(
    (formData) => {
      console.log('formData', formData);

      const data = {
        ...formData,
        id: new Date().getTime().toString(),
      };

      addingPosts(data);
      handleClear();
    },
    [addingPosts, handleClear]
  );

  const clearImage = useCallback(() => {
    setValue('image', '');
  }, [setValue]);

  return (
    <Container onSubmit={handleSubmit(handleSave)}>
      <DropzoneContainer>
        <Dropzone onDrop={handleUploadFile} accept={acceptImageTypes}>
          {({ getRootProps, getInputProps }) => (
            <ImageContainer error={!!errors.image} {...getRootProps()}>
              <input {...getInputProps()} readOnly />
              {image && !errors.image ? (
                <ImagePreview src={image} />
              ) : (
                <Image size={24} />
              )}
            </ImageContainer>
          )}
        </Dropzone>
        {image && !errors.image && (
          <TrashButton size={24} onClick={clearImage} />
        )}

        {errors && errors.image && errors.image.message && (
          <ErrorMessage message={errors.image.message as string} />
        )}
      </DropzoneContainer>

      <Input
        placeholder='Digite seu nome'
        type='text'
        name='name'
        control={control}
      />
      <Textarea control={control} name='description' placeholder='Mensagem' />

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
