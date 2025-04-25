'use server';

import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function updateMenuCategory(formData: FormData) {
  const updateMenuCategoryName = formData.get('menuCategoryName') as string;
  const menuCategoryId = formData.get('menuCategoryId');
  await prisma.menuCategories.update({
    where: { id: Number(menuCategoryId) },
    data: {
      name: updateMenuCategoryName,
    },
  });
  redirect('/backoffice/menu-categories');
}

export async function createNewMenuCategory(formData: FormData) {
  const name = formData.get('menuCategoryName') as string;
  await prisma.menuCategories.create({
    data: {
      name,
    },
  });
  redirect('/backoffice/menu-categories');
}

export async function deleteNewMenuCategory(formData: FormData) {
  const menuCategoryId = formData.get('menuCategoryId');
  await prisma.menuCategories.delete({
    where: { id: Number(menuCategoryId) },
  });
  redirect('/backoffice/menu-categories');
}
