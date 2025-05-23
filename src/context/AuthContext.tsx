
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { account, handleAppwriteError } from '@/lib/appwrite';
import { Models } from 'appwrite';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        // Don't show error toast here since it's just checking session status
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await account.createEmailSession(email, password);
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error: any) {
      const errorMessage = handleAppwriteError(error);
      toast({
        title: 'Login failed',
        description: errorMessage,
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      await account.create('unique()', email, password, name);
      await login(email, password);
    } catch (error: any) {
      const errorMessage = handleAppwriteError(error);
      toast({
        title: 'Registration failed',
        description: errorMessage,
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession('current');
      setUser(null);
      toast({
        title: 'Logout successful',
        description: 'You have been logged out.',
      });
    } catch (error: any) {
      const errorMessage = handleAppwriteError(error);
      toast({
        title: 'Logout failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
