import { Box, Button, Card } from '@mui/material';
import ItemCard from '@/components/ItemCard';
import LocationOn from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { getCompanyLocations } from '@/libs/actions';

export default async function LocationsPage() {
  const locations = await getCompanyLocations();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/locations/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New Location
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {locations.map(location => (
          <ItemCard
            key={location.id}
            icon={<LocationOn fontSize="large" />}
            title={location.name}
            href={`/backoffice/locations/${location.id}`}
            isAvailable
          />
        ))}
      </Box>
    </>
  );
}
