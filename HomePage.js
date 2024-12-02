// HomePage.js
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <SignedIn>
        <p>You are signed in!</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <div>
          <p>Please sign in or sign up to continue:</p>
          <SignInButton redirectUrl="/" mode="modal">
            <button>Sign In</button>
          </SignInButton>
          <SignUpButton redirectUrl="/" mode="modal">
            <button>Sign Up</button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div>
  );
}
