
import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();

// Set your Appwrite endpoint and project ID
// You need to replace these values with your actual Appwrite endpoint and project ID
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('YOUR_APPWRITE_PROJECT_ID'); 

// Initialize the Appwrite account
export const account = new Account(client);
