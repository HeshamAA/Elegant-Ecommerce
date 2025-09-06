
import { ErrorMessages } from '@/shared/data/data';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';



export function getErrorMessage(error: unknown): string {
  if (typeof error !== 'object' || error === null || !('status' in error)) {
    return `An unknown error occurred: ${JSON.stringify(error)}`;
  }

  const err = error as FetchBaseQueryError & { error?: string };

  // ...existing code...
 // Check for custom error messages returned by the server in error.data
if (typeof err   === 'object' && err && 'data' in err && typeof err.data === 'string') {
  return err.data;
}

 
  return ErrorMessages[err.status] || `Unexpected error (status: ${err.status}).`;
}