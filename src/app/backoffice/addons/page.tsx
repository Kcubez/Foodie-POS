import { Box, Button, Card } from '@mui/material';
import ItemCard from '@/components/ItemCard';
import EggIcon from '@mui/icons-material/Egg';
import Link from 'next/link';
import { prisma } from '@/libs/prisma';

export default async function AddonsPage() {
  const addons = await prisma.addons.findMany();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/addons/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New addon
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {addons.map(addon => (
          <ItemCard
            key={addon.id}
            icon={<EggIcon fontSize="large" />}
            title={addon.name}
            href={`/backoffice/addons/${addon.id}`}
            isAvailable
          />
        ))}
      </Box>
    </>
  );
}
