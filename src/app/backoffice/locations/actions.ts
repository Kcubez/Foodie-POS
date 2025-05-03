'use server';

import { getCompanyId, getCompanyLocations } from '@/libs/actions';
import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function getLocation(id: number) {
  const location = await prisma.locations.findFirst({
    where: { id },
  });
  if (!location) return redirect('/backoffice/locations');
  return location;
}

export async function updateLocation(formData: FormData) {
  const id = Number(formData.get('id'));
  const name = formData.get('name') as string;

  await prisma.locations.update({
    data: {
      name,
    },
    where: { id },
  });
  redirect('/backoffice/locations');
}

export async function createLocation(formData: FormData) {
  const name = formData.get('name') as string;
  await prisma.locations.create({
    data: { name, companyId: (await getCompanyId()) as number },
  });
  redirect('/backoffice/locations');
}

export async function deleteLocation(formData: FormData) {
  const id = Number(formData.get('id'));
  await prisma.locations.delete({
    where: { id },
  });
  redirect('/backoffice/locations');
}
