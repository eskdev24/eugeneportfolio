
import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();

// Set your Appwrite endpoint and project ID
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6811a9750024f865ee91'); 

// Initialize the Appwrite account
export const account = new Account(client);

// Helper function to handle Appwrite errors
export const handleAppwriteError = (error: any): string => {
  console.error('Appwrite error:', error);
  
  if (error.message === 'Network request failed') {
    return 'Connection to Appwrite failed. Please check your internet connection.';
  }
  
  if (error.code) {
    switch (error.code) {
      case 401:
        return 'Invalid credentials. Please check your email and password.';
      case 409:
        return 'User already exists with this email.';
      case 429:
        return 'Too many requests. Please try again later.';
      default:
        return error.message || 'An unknown error occurred';
    }
  }
  
  return error.message || 'An unknown error occurred';
};
