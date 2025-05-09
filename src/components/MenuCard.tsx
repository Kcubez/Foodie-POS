import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import Link from 'next/link';
import { Menus } from '@prisma/client';

interface Props {
  menu: Menus;
}

export default function MenuCard({ menu }: Props) {
  const { name, price, isAvailable } = menu;
  return (
    <Link href={`/backoffice/menus/${menu.id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: '100%',
          maxWidth: 300,
          borderRadius: 2,
          boxShadow: 3,
          mr: 2,
          mb: 5,
        }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a81c36ea803bb1dd7807778/1610403788186-K2ATWJRYLHVC4ENCZZ7D/Shan+khaut+swe+%28Shan+sticky+noodles%29"
          alt="Menu Item"
          width="300"
          height="120"
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body1" color="primary">
              ${price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Chip
              label={menu.isAvailable ? 'Available' : 'Sold out'}
              color={menu.isAvailable ? 'success' : 'error'}
              variant="outlined"
              sx={{ fontSize: '0.75rem', padding: '2px 8px' }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
