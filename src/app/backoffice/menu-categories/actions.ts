'use server';

import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function getMenuCategories() {
  const menuCategories = await prisma.menuCategories.findMany();
  return menuCategories;
}

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
  const newMenuCategoryName = formData.get('menuCategoryName') as string;
  await prisma.menuCategories.create({
    data: {
      name: newMenuCategoryName,
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
