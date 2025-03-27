import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
