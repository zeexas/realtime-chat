import Button from '@/components/ui/Button';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <Button isLoading={false}>hello</Button>
};

export default page;
