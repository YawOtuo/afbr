// DynamicUnsuccessfulRegistrationsAlert.tsx
import dynamic from 'next/dynamic';

const DynamicUnsuccessfulRegistrationsAlert = dynamic(
  () => import('./UnsuccessfulRegistrationsAlert'),
  { ssr: false }
);

export default DynamicUnsuccessfulRegistrationsAlert;
