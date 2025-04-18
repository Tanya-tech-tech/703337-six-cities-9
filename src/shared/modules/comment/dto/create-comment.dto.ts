import { IsMongoId, Length, IsString, Max, Min } from 'class-validator';
import { CreateCommentMessages } from './create-comment.messages.js';

export class CreateCommentDto {
  @IsString({ message: CreateCommentMessages.commentText.invalidFormat })
  @Length(5, 1024, { message: 'min is 5, max is 1024 '})
  public commentText: string;

  @IsMongoId({ message: CreateCommentMessages.commentOfferId.invalidFormat })
  public commentOfferId: string;

  @Min(1, { message: CreateCommentMessages.commentRating.minValue })
  @Max(5, { message: CreateCommentMessages.commentRating.maxValue })
  public commentRating: number;

  @IsMongoId({ message: CreateCommentMessages.commentUserId.invalidFormat })
  public commentUserId: string;
}
