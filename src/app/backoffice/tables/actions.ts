'use server';

import { getCompanyLocations } from '@/libs/actions';
import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function getTable(id: number) {
  const table = await prisma.tables.findFirst({
    where: { id },
  });
  if (!table) return redirect('/backoffice/tables');
  return table;
}

export async function updateTable(formData: FormData) {
  const id = Number(formData.get('id'));
  const name = formData.get('name') as string;

  await prisma.tables.update({
    data: {
      name,
    },
    where: { id },
  });
  redirect('/backoffice/tables');
}

export async function createTable(formData: FormData) {
  const name = formData.get('name') as string;
  const locationId = Number(formData.get('locationId'));
  await prisma.tables.create({
    data: {
      name,
      locationId: locationId,
    },
  });
  redirect('/backoffice/tables');
}

export async function deleteTable(formData: FormData) {
  const id = Number(formData.get('id'));
  await prisma.tables.delete({
    where: { id },
  });
  redirect('/backoffice/tables');
}
