import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 실행 전 부분
    // 리턴 후로는 실행 후 부분
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data))); //undefined를 null로 처리해 오류 방지
  }
}
