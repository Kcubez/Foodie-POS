'use server';

import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function getAddon(id: number) {
  const addon = await prisma.addons.findFirst({
    where: { id },
  });
  if (!addon) return redirect('/backoffice/addons');
  return addon;
}

export async function getAddons() {
  return await prisma.addons.findMany();
}

export async function updateAddon(formData: FormData) {
  const id = Number(formData.get('id'));
  const name = formData.get('name') as string;
  const price = Number(formData.get('price'));
  const isAvailable = formData.get('isAvailable') ? true : false;
  const addonCategoryId = Number(formData.get('addonCategoryId'));
  await prisma.addons.update({
    data: {
      name,
      price,
      isAvailable,
      addonCategoryId,
    },
    where: { id },
  });
  redirect('/backoffice/addons');
}

export async function createAddons(formData: FormData) {
  const name = formData.get('name') as string;
  const price = formData.get('price');
  const isAvailable = formData.get('isAvailable') ? true : false;
  const addonCategoryId = Number(formData.get('addonCategoryId'));
  await prisma.addons.create({
    data: { name, price: Number(price), isAvailable, addonCategoryId },
  });
  redirect('/backoffice/addons');
}

export async function deleteAddon(formData: FormData) {
  const id = Number(formData.get('id'));
  await prisma.addons.delete({
    where: { id },
  });
  redirect('/backoffice/addons');
}
