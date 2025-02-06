'use client';

import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '@/aws-exports';
import Quiz from './Quiz';



Amplify.configure(awsExports);

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Authenticator>
        {({ signOut, user }) => (
          <main className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h1>

            <Quiz />
            <button
              onClick={signOut}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default Page;
