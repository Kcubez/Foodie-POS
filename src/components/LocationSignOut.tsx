'use client';

import { Locations } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface Props {
  locations: Locations[];
}

export default function LocationSignOut({ locations }: Props) {
  const [currentLocation, setCurrentLocation] = useState<Locations>();

  useEffect(() => {
    const currentLocationId = localStorage.getItem('currentLocationId');
    if (!currentLocationId) {
      localStorage.setItem('currentLocationId', locations[0].id.toString());
    } else {
      const currentLocation = locations.find(
        location => location.id.toString() === currentLocationId
      );
      setCurrentLocation(currentLocation);
    }
  }, [locations]);

  return (
    <>
      <h2>{currentLocation?.name}</h2>
      <h2 style={{ cursor: 'pointer' }} onClick={() => signOut()}>
        Logout
      </h2>
    </>
  );
}
