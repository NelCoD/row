import { useEffect } from 'react';
import { LoginForm } from '../components/LoginForm';

export default function Home() {

  // useEffect(() => {
  //   const isPwa = detectPwa();
  //   if (isPwa) {
  //     router.push('/map');
  //   }
  // }, []);

  return (
    <div className="bg-[url(/bg.jpeg)] bg-cover bg-center text-white min-h-screen">
      <LoginForm />
    </div>
  );
}
