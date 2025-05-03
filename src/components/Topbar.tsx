import { getCompanyLocations } from '@/libs/actions';
import LocationSignOut from './LocationSignOut';

export async function Topbar() {
  const locations = await getCompanyLocations();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#E63946',
        color: '#F1FAEE',
        height: '65px',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <h2>Foodie POS</h2>

      <LocationSignOut locations={locations} />
    </div>
  );
}
