import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    return response.locals.jwt;
  },
);

// --> @Token() token 으로 사용 가능해짐
