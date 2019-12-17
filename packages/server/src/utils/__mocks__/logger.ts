import { LoggerInstance as Logger } from 'usa-types';


const logger = (): any => ({
  error: jest.fn(),
  info: jest.fn(),
  middleware: jest.fn(),
  warn: jest.fn()
})

interface LoggerInstance extends Logger { }

export const mockLogger = {
  init: () => logger() as LoggerInstance
}