/// <reference types="vite/client" />

// Users Types
interface userInfoType {
  username: string;
  picture: string;
  email: string;
  savedCodes: Array<string>;
}

interface loginCredentialsType {
  userId: string;
  password: string;
}
