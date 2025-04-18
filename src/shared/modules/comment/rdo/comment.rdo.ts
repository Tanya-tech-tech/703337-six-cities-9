import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public commentText: string;

  @Expose({ name: 'createdAt'})
  public commentDate: string;

  @Expose({ name: 'commentUserId'})
  @Type(() => UserRdo)
  public commentUserId: UserRdo;
}

