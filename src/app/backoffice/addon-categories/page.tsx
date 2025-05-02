import { Box, Button, Card } from '@mui/material';
import ItemCard from '@/components/ItemCard';
import ClassIcon from '@mui/icons-material/Class';
import Link from 'next/link';
import { getCompanyAddonCategories } from '@/libs/actions';

export default async function AddonCategoriesPage() {
  const addonCategories = await getCompanyAddonCategories();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/addon-categories/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New addon category
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {addonCategories.map(addonCategory => (
          <ItemCard
            key={addonCategory.id}
            icon={<ClassIcon fontSize="large" />}
            title={addonCategory.name}
            href={`/backoffice/addon-categories/${addonCategory.id}`}
            isAvailable
          />
        ))}
      </Box>
    </>
  );
}
