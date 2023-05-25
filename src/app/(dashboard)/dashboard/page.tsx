import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

// interface pageProps {}

// const Page: FC<pageProps> = async ({}) => {

//   const session = await getServerSession(authOptions)

//   return <Button isLoading={false}>hello</Button>
// };
const Page = async ({}) => {

  const session = await getServerSession(authOptions)

  return <pre>Dashboard</pre>
};

export default Page;
