
import { Body, Controller, Get, Param, Put, Post, Delete, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO } from "./admin.dto";
import { AdminEntity } from './admin.entity';



@Controller('/admin')
export class AdminController{
    constructor(private readonly adminService: AdminService){}
    @Get()
    getUsers(): object{
        return this.adminService.getUsers();
    }
   
   
    @Post('createuser')
    async createUser(@Body() user: AdminEntity): Promise<AdminEntity> {
    return this.adminService.createUser(user);
  }
  @Put('updateUser/:id')
  async updateUser(@Param('id') id: number, @Body() updatedUser: AdminEntity): Promise<AdminEntity> {
    return this.adminService.updateUser(id, updatedUser);
  }
  @Get('usersWithNullFullName')
  async getUsersWithNullFullName(): Promise<AdminEntity[]> {
    return this.adminService.getUsersWithNullFullName();
  }
  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: number): Promise<string> {
    return this.adminService.deleteUser(id);
  }
}