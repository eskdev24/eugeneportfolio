
import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();

// Set your Appwrite endpoint and project ID
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6811a9750024f865ee91'); 

// Initialize the Appwrite account
export const account = new Account(client);
