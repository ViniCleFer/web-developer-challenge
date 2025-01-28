import { Form } from '@/components/Form';
import { Container } from './styles';
import { usePosts } from '@/hooks/posts';

export function Home() {
  const { posts } = usePosts();
  return (
    <Container>
      <Form />

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Container>
  );
}
