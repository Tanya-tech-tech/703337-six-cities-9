import { IsDateString, IsEnum, IsInt, IsMongoId, IsArray, IsOptional, IsString, ArrayMinSize, Max, MaxLength, Min, MinLength } from 'class-validator';
import { RentType, City, GoodsType } from '../../../types/index.js';
import { CreateUpdateOfferMessage } from './update-offer.messages.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: CreateUpdateOfferMessage.title.minLength })
  @MaxLength(100, { message: CreateUpdateOfferMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @MinLength(20, { message: CreateUpdateOfferMessage.description.minLength })
  @MaxLength(1024, { message: CreateUpdateOfferMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: CreateUpdateOfferMessage.date.invalidFormat })
  public date?: Date;

  @IsOptional()
  @IsMongoId({ message: CreateUpdateOfferMessage.city.invalidId})
  public city?: City;

  @IsOptional()
  @IsString({ message: CreateUpdateOfferMessage.previewImage.invalidFormat })
  public previewImage?: string;

  @IsOptional()
  @ArrayMinSize(6)
  @IsArray({ message: CreateUpdateOfferMessage.images.invalidFormat })
  @IsString({ each: true, message: CreateUpdateOfferMessage.images.typeItem })
  public images?: string[];

  @IsOptional()
  @Min(1, { message: CreateUpdateOfferMessage.rating.minValue })
  @Max(5, { message: CreateUpdateOfferMessage.rating.maxValue })
  public rating?: number;

  @IsOptional()
  @IsEnum(RentType, { message: CreateUpdateOfferMessage.type.invalidFormat })
  public type?: RentType;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.bedrooms.invalidFormat })
  @Min(1, { message: CreateUpdateOfferMessage.bedrooms.minValue })
  @Max(8, { message: CreateUpdateOfferMessage.bedrooms.maxValue })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.maxAdults.invalidFormat })
  @Min(1, { message: CreateUpdateOfferMessage.maxAdults.minValue })
  @Max(10, { message: CreateUpdateOfferMessage.maxAdults.maxValue })
  public maxAdults?: number;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.price.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.price.minValue })
  @Max(100000, { message: CreateUpdateOfferMessage.price.maxValue })
  public price?: number;

  @IsOptional()
  @IsArray({ message: CreateUpdateOfferMessage.goods.invalidFormat })
  @IsEnum(GoodsType, { each: true, message: CreateUpdateOfferMessage.goods.invalidFormat })
  public goods?: GoodsType[];

  public latitude?: number;
  public longitude?: number;
}
