import { HttpStatusCode } from 'usa-types'


interface Errors {
  httpStatusCode: HttpStatusCode
  itemError: Array<any>
  message: string
}

export default class RequestError extends Error {

  items;
  httpStatusCode;

  constructor({ httpStatusCode, itemError, message }: Errors) {

    super(message);

    this.name = 'Request Error';
    this.items = itemError;
    this.httpStatusCode = httpStatusCode;
  }
}