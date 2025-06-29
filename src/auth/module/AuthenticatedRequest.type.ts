import { JwtPayload } from './jwt-payload.type';
export interface IAuthenticatedRequest extends Request {
  user: JwtPayload;
}
