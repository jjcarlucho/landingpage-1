import { ReactNode } from 'react';
import { ModalProvider, useModal } from '../context/ModalContext';
import RegistrationModal from './RegistrationModal';
import Toaster from './Toaster';

interface LayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
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

export default function Layout({ children }: LayoutProps) {
  return (
    <ModalProvider>
      <LayoutContent>{children}</LayoutContent>
    </ModalProvider>
  );
} 