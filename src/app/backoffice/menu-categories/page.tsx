import { Box, Button, Card } from '@mui/material';
import ItemCard from '@/components/ItemCard';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';
import { getCompanyMenuCategories } from '@/libs/actions';

export default async function MenuCategoriesPage() {
  const menuCategories = await getCompanyMenuCategories();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/menu-categories/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New menu category
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {menuCategories.map(menuCategory => (
          <ItemCard
            key={menuCategory.id}
            icon={<CategoryIcon fontSize="large" />}
            title={menuCategory.name}
            href={`/backoffice/menu-categories/${menuCategory.id}`}
            isAvailable
          />
        ))}
      </Box>
    </>
  );
}
