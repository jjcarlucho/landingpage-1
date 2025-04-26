import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  secondary,
  fullWidth,
  small,
  className = '',
}) => {
  const baseClasses =
    'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  const sizeClasses = small ? 'py-2 px-4 text-sm' : 'py-3 px-6 text-base';
  const widthClasses = fullWidth ? 'w-full' : '';

  let variantClasses = 'bg-gray-800 text-gray-200 hover:bg-gray-700';

  if (primary) {
    variantClasses =
      'bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold shadow-xl hover:shadow-[0_0_30px_10px_rgba(236,201,75,0.4)] hover:from-[#f0d75e] hover:to-[#ecc94b] transition-all duration-300 ring-2 ring-[#ecc94b]/30 focus:ring-4 focus:ring-[#ecc94b]/50';
  } else if (secondary) {
    variantClasses =
      'bg-gray-800 text-[#ecc94b] hover:bg-gray-700 border border-[#ecc94b]/20 shadow-lg hover:shadow-[#ecc94b]/10';
  }

  const classes = `${baseClasses} ${sizeClasses} ${widthClasses} ${variantClasses} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
