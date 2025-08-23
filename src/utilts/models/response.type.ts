export type MessageDto = {
  message: string;
};

export type Tresponse<T> = { data: T; message: string } | MessageDto;
