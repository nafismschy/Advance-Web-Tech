import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Great power comes from great responsibility</h1>';
  }

  getsuHello(): string {
    return '<h1>Hello Siam</h1>';
  }
  getsmHello(): object {
    return {message: "hello world"} ;
  }

  getnmHello(): object {
    return {message: "hello farhan"} ;
  }

  getnsHello(): object {
    return {message: "hello shariar"} ;
  }

  getpaHello(): object {
    return {message: "hello tanvir"} ;
  }

  getopHello(): object {
    return {message: "hello tamim"} ;
    return this.getnmHello();
  }
}
