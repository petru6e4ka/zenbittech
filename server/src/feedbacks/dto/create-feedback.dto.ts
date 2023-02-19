import {
  IsNotEmptyString,
  TextLengthMinMax,
  IsEmailTidy,
} from '@nestjsi/class-validator';

export class CreateFeedbackDto {
  @IsNotEmptyString()
  @TextLengthMinMax(2, 255)
  name: string;

  @IsNotEmptyString()
  @IsEmailTidy({ allow_ip_domain: true })
  email: string;

  @IsNotEmptyString()
  @TextLengthMinMax(10, 255)
  message: string;
}
