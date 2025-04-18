import { IsString, IsEnum } from 'class-validator';
import { CreateCityMessages } from './create-city.messages.js';
import { CityType } from '../../../types/city-type.enum.js';

export class CreateCityDto {
  @IsString({ message: CreateCityMessages.name.invalidFormat })
  @IsEnum(CityType, { message: CreateCityMessages.name.typeField })
  public name: string;

  public latitude: number;
  public longitude: number;
}
