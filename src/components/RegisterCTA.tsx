import { useModal } from '../context/ModalContext';

interface RegisterCTAProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

export default function RegisterCTA({ 
  className = '', 
  variant = 'primary',
  children = 'Obtén acceso gratuito'
}: RegisterCTAProps) {
  const { openRegistrationModal } = useModal();

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500"
  };

  return (
    <button
      onClick={openRegistrationModal}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
} 