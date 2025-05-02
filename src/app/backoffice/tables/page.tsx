import { Box, Button, Card } from '@mui/material';
import ItemCard from '@/components/ItemCard';
import TableBarIcon from '@mui/icons-material/TableBar';
import Link from 'next/link';
import { getCompanyTables } from '@/libs/actions';

export default async function TablessPage() {
  const tables = await getCompanyTables();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/backoffice/tables/new">
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              mt: 3,
              bgcolor: '#1D3557',
              '&:hover': { bgcolor: '#2d4466' },
            }}
          >
            New Table
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
        {tables.map(table => (
          <ItemCard
            key={table.id}
            icon={<TableBarIcon fontSize="large" />}
            title={table.name}
            href={`/backoffice/tables/${table.id}`}
            isAvailable
          />
        ))}
      </Box>
    </>
  );
}
