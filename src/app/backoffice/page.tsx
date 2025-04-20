import { getServerSession } from 'next-auth';

export default async function Orders() {
  const session = await getServerSession();
  return <h1>Orders page: {session?.user?.email}</h1>;
}
