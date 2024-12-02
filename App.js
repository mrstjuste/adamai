import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <div>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>
        <SignedIn>
          <h1>Welcome to the App!</h1>
        </SignedIn>
        <SignedOut>
          <h1>Please Sign In</h1>
        </SignedOut>
      </main>
    </div>
  );
}

export default App;
