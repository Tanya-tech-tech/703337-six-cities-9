import { IsArray, IsDateString, IsEnum, ArrayMinSize, IsInt, IsString, IsMongoId, IsBoolean, Max, MaxLength, Min, MinLength } from 'class-validator';
import { RentType, City, GoodsType } from '../../../types/index.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';


export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title: string;

  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  @IsDateString({}, { message: CreateOfferValidationMessage.date.invalidFormat })
  public date: Date;

  @IsMongoId({ message: CreateOfferValidationMessage.city.invalidId })
  public city: City;

  @IsString({ message: CreateOfferValidationMessage.previewImage.invalidFormat })
  public previewImage: string;

  @ArrayMinSize(6)
  @IsArray({ message: CreateOfferValidationMessage.images.maxLength })
  @IsString({ each: true, message: CreateOfferValidationMessage.images.maxLength })
  public images: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium: boolean;

  @IsBoolean({ message: CreateOfferValidationMessage.isFavorite.invalidFormat })
  public isFavorite: boolean;

  @Min(1, { message: CreateOfferValidationMessage.rating.minValue })
  @Max(5, { message: CreateOfferValidationMessage.rating.maxValue })
  public rating: number;

  @IsEnum(RentType, { message: CreateOfferValidationMessage.type.invalid })
  public type: RentType;

  @IsInt({ message: CreateOfferValidationMessage.bedrooms.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.bedrooms.minValue })
  @Max(8, { message: CreateOfferValidationMessage.bedrooms.maxValue })
  public bedrooms: number;

  @IsInt({ message: CreateOfferValidationMessage.maxAdults.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.maxAdults.minValue })
  @Max(10, { message: CreateOfferValidationMessage.maxAdults.maxValue })
  public maxAdults: number;

  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public price: number;

  @IsArray({ message: CreateOfferValidationMessage.goods.invalidFormat })
  public goods: GoodsType[];

  @IsMongoId({ message: CreateOfferValidationMessage.hostId.invalidId })
  public hostId: string;

  public comments: number;
  public latitude: number;
  public longitude: number;
}
