import MenuCard from '@/components/MenuCard';
import { getCompanyMenuCategories } from '@/libs/actions';
import { prisma } from '@/libs/prisma';
import { Box, Button } from '@mui/material';
import { get } from 'http';
import Link from 'next/link';

export default async function MenusPage() {
  const menuCategories = await getCompanyMenuCategories();
  const menuCategoryIds = menuCategories.map(menuCategory => menuCategory.id);
  const menuCategoriesMenus = await prisma.menuCategoriesMenus.findMany({
    where: { menuCategoryId: { in: menuCategoryIds } },
  });
  const menuIds = menuCategoriesMenus.map(menuCategoryMenu => menuCategoryMenu.menuId);
  const menus = await prisma.menus.findMany({ where: { id: { in: menuIds } } });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/menus/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New menu
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {menus.map(menu => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </Box>
    </>
  );
}
