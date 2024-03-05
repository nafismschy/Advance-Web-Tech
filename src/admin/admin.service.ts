import { Injectable } from "@nestjs/common";
import { AdminDTO } from "./admin.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { AdminEntity } from "./admin.entity"; 


@Injectable()
export class AdminService {

getUsers(): object{
    return {message: "hellow Admin"}
}
getUsersById(id: string): object{
return {message: "You id is " + id};
}
getUsersByNameAndId(name: string, id: string): object{
    return {message: "You id is " + name +
     " and your id is " + id};

}
async addUser(myobj:AdminDTO):Promise<AdminDTO>{
    console.log(myobj.name);
    return myobj;

}


  
    private users: string[] = [];

addUserss(data: string): string {
    
    this.users.push(data);
    return `User created: ${data}`;
}

getUserss(): string[] {
    return this.users;
}

constructor(@InjectRepository(AdminEntity) private userRepository: Repository<AdminEntity>) {}
async createUser(user: AdminEntity): Promise<AdminEntity> {
return this.userRepository.save(user);
}


async updateUser(id: number, updatedUser: AdminEntity): Promise<AdminEntity> {
    await this.userRepository.update(id, updatedUser);
    return this.userRepository.findOneBy({Id:id}); }
async deleteUser(id: number): Promise<string> {
    await this.userRepository.delete(id);
    return `User with ID ${id} deleted successfully`;

}
async getUsersWithNullFullName(): Promise<AdminEntity[]> {
    return this.userRepository.find({
      where: {
        fullName: null,
      },
    });
  }

}