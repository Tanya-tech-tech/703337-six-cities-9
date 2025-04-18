import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { CityRdo } from '../../city/index.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public previewImage: string;

  @Expose()
  public date: string;

  @Expose()
  public price: number;

  @Expose()
  public type: string;

  @Expose()
  public comments: number;

  @Expose()
  @Type(() => CityRdo)
  public city: CityRdo;

  @Expose({ name: 'hostId'})
  @Type(() => UserRdo)
  public hostId: UserRdo;
}
