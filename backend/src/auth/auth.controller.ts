import { Body, Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  @UseInterceptors(NoFilesInterceptor())
  signIn(@Body() signInDto: { email: string; password: string }) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('sign-up')
  @UseInterceptors(NoFilesInterceptor())
  async signUp(@Body() signUpDto: { email: string; password: string }) {
    return this.authService.signUp(signUpDto.email, signUpDto.password);
  }
}
