
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import AuthContainer from '@/components/auth/AuthContainer';

const Auth = () => {
  const [activeTab, setActiveTab] = useState<string>('login');

  return (
    <div className="min-h-screen bg-navy text-slate">
      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <AuthContainer>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </AuthContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
