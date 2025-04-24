'use server';

import { getServerSession, User } from 'next-auth';
import { prisma } from './prisma';

export async function getUser(email: string) {
  return await prisma.users.findFirst({
    where: { email },
  });
}

export async function createDefaultUser(nextUser: User) {
  const { name, email } = nextUser;
  const company = await prisma.company.create({
    data: {
      name: 'Default Company',
    },
  });
  await prisma.users.create({
    data: {
      name: name as string,
      email: email as string,
      companyId: company.id,
    },
  });
  const menuCategory = await prisma.menuCategories.create({
    data: {
      name: 'Default Menu Category',
      companyId: company.id,
    },
  });
  const menu = await prisma.menus.create({
    data: {
      name: 'Default Menu',
    },
  });
  await prisma.menuCategoriesMenus.create({
    data: {
      menuId: menu.id,
      menuCategoryId: menuCategory.id,
    },
  });
  const addonCategory = await prisma.addonCategories.create({
    data: { name: 'Default Addon Category' },
  });
  await prisma.menusAddonCategories.create({
    data: { menuId: menu.id, addonCategoryId: addonCategory.id },
  });
  const addonNames = ['Default Addon 1', 'Default Addon 2', 'Default Addon 3'];
  const data = addonNames.map(addonName => ({
    name: addonName,
    addonCategoryId: addonCategory.id,
    price: 0,
  }));
  await prisma.addons.createMany({
    data,
  });

  const location = await prisma.locations.create({
    data: { name: 'Default Location', companyId: company.id },
  });
  await prisma.tables.create({
    data: { name: 'Default Table', locationId: location.id },
  });
}

export async function getCompanyId() {
  const session = await getServerSession();
  const user = await prisma.users.findFirst({
    where: { email: session?.user?.email || '' },
  });
  const company = await prisma.company.findFirst({
    where: { id: user?.companyId },
  });
  return company?.id;
}

export async function getCompanyMenuCategories() {
  const companyId = await getCompanyId();
  const menuCategories = await prisma.menuCategories.findMany({
    where: { companyId },
  });
  return menuCategories;
}
