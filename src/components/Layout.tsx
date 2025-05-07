import { ReactNode } from 'react';
import { useModal } from '../context/ModalContext';
import RegistrationModal from './RegistrationModal';
import Toaster from './Toaster';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRegistrationModalOpen, closeRegistrationModal } = useModal();

  return (
    <>
      <div className="min-h-screen bg-white">
        {children}
      </div>
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={closeRegistrationModal} 
      />
      <Toaster />
    </>
  );
} 