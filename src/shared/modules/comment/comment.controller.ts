import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BaseController, HttpError, HttpMethod, ValidateDtoMiddleware } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { CommentService } from './comment-service.interface.js';
import { OfferService } from '../offer/offer-service.interface.js';
import { fillDTO } from '../../helpers/common.js';

import { CommentRdo } from './rdo/comment.rdo.js';
import { CreateCommentRequest } from './types/create-comment-request.type.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@injectable()
export class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService) private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new ValidateDtoMiddleware(CreateCommentDto)
      ]
    });
  }

  public async index(req: Request, res: Response): Promise<void> {
    const comments = await this.commentService.findByOfferId(req.params.offerId);
    this.ok(res, comments);
  }

  public async create(
    rew: CreateCommentRequest,
    res: Response
  ): Promise<void> {
    const { body } = rew;
    //console.log(rew);
    if (! await this.offerService.exists(body.commentOfferId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.commentOfferId} not found.`,
        'CommentController'
      );
    }

    const comment = await this.commentService.create(body);
    await this.offerService.incCommentCount(body.commentOfferId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
