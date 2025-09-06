import { HttpStatusCode } from '@/shared/constants/enums';
import { ErrorStatus } from '@/shared/constants/enums';

export const ErrorMessages: Record<string | number, string> = {
  [ErrorStatus.FETCH_ERROR]: 'Could not connect to the server. Please check your internet connection.',
  [ErrorStatus.TIMEOUT_ERROR]: 'Request timed out. Please try again later.',
  [ErrorStatus.PARSING_ERROR]: 'Invalid response from server. Please try again later.',
  [ErrorStatus.CUSTOM_ERROR]: 'A custom error occurred.',
  [HttpStatusCode.BAD_REQUEST]: 'Bad request. Please check your input.',
  [HttpStatusCode.UNAUTHORIZED]: 'Unauthorized. Please login first.',
  [HttpStatusCode.FORBIDDEN]: 'Forbidden. You are not allowed to access this.',
  [HttpStatusCode.NOT_FOUND]: 'Resource not found.',
  [HttpStatusCode.UNPROCESSABLE_ENTITY]: 'Validation error. Please review your input.',
  [HttpStatusCode.TOO_MANY_REQUESTS]: 'Too many requests. Please try again later.',
  [HttpStatusCode.INTERNAL_SERVER_ERROR]: 'Internal server error. Please try again later.',
  [HttpStatusCode.SERVICE_UNAVAILABLE]: 'Service unavailable. Please try again later.',
} as const;

export type ErrorMessagesType = typeof ErrorMessages;