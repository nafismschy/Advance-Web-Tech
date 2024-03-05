import { Controller, Get, Post, Put, Delete, Patch, Options } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Delete('/su')
  getsuHello(): string {
    return this.appService.getsuHello();
  }

  @Get('/sm')
  getsmHello(): object {
    return this.appService.getsmHello();
  }

  @Post('/nm')
  getnmHello(): object {
    return this.appService.getnmHello();
  }

  @Put('/ns')
  getnsHello(): object {
    return this.appService.getnsHello();
  }

  @Patch('/Pa')
  getpaHello(): object {
    return this.appService.getpaHello();
  }

  @Options('/op')
  getopHello(): object {
    return this.appService.getopHello();
  }
}
