
import { ReactNode } from 'react';

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className="max-w-md mx-auto bg-navy-dark p-8 rounded-lg shadow-lg border border-mint/20">
      <h1 className="text-2xl font-bold text-mint mb-6 text-center">Authentication</h1>
      {children}
    </div>
  );
};

export default AuthContainer;
