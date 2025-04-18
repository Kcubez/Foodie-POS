'use server';

import { prisma } from '@/libs/prisma';
import { redirect } from 'next/navigation';

export async function getMenu(id: number) {
  const menu = await prisma.menus.findFirst({
    where: { id },
    include: { menuCategoriesMenus: true },
  });
  if (!menu) return redirect('/backoffice/menus');
  return menu;
}

export async function getMenus() {
  return await prisma.menus.findMany();
}

export async function updateMenu(formData: FormData) {
  const id = Number(formData.get('id'));
  const name = formData.get('name') as string;
  const price = Number(formData.get('price'));
  const isAvailable = formData.get('isAvailable') ? true : false;
  const menuCategoryIds = formData.getAll('menuCategories').map(item => Number(item));

  // Check if menu exists before updating
  const existingMenu = await prisma.menus.findFirst({ where: { id } });
  if (!existingMenu) {
    return redirect('/backoffice/menus');
  }

  // Update the menu
  await prisma.menus.update({
    data: {
      name,
      price,
      isAvailable,
    },
    where: { id },
  });

  // Update menu categories
  const menuCategoriesMenus = await prisma.menuCategoriesMenus.findMany({
    where: { menuId: id },
  });

  const existingMenuCategoryIds = menuCategoriesMenus.map(item => item.menuCategoryId);

  const isSameCategories =
    existingMenuCategoryIds.length === menuCategoryIds.length &&
    existingMenuCategoryIds.every(itemId => menuCategoryIds.includes(itemId));

  if (!isSameCategories) {
    // Delete existing relationships
    await prisma.menuCategoriesMenus.deleteMany({
      where: { menuId: id },
    });

    // Create new relationships
    const data = menuCategoryIds.map(menuCategoryId => ({
      menuId: id,
      menuCategoryId,
    }));

    await prisma.menuCategoriesMenus.createMany({ data });
  }
  redirect('/backoffice/menus'); // Redirect to the menus page after updating
}

export async function createMenus(formData: FormData) {
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;
  const isAvailable = formData.get('isAvailable') ? true : false;
  const menuCategoryIds = formData.getAll('menuCategories').map(item => Number(item));
  const menu = await prisma.menus.create({
    data: { name, price: Number(price), isAvailable },
  });
  console.log('menuCategoryIds', menuCategoryIds);
  console.log('menu', menu);
  const data = menuCategoryIds.map(menuCategoryId => ({
    menuId: menu.id,
    menuCategoryId,
  }));
  console.log('data', data);
  await prisma.menuCategoriesMenus.createMany({ data });
  redirect('/backoffice/menus'); // Redirect to the menus page after creating a menu
}

export async function deleteMenu(formData: FormData) {
  const id = Number(formData.get('id'));
  await prisma.menuCategoriesMenus.deleteMany({
    where: { menuId: id },
  });
  await prisma.menus.delete({
    where: { id },
  });
  redirect('/backoffice/menus'); // Redirect to the menus page after deleting a menu
}
