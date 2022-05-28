import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUsers } from 'src/core/interfaces/IUsers';

@Injectable()
export class CommonService {
    constructor(private readonly config: ConfigService, @Inject("IUsers") private usersApiService: IUsers) { }

    async getAllUsers() {
        const retVal = this.usersApiService.getUsers();
        return retVal;
    }

    async writeLog(text: string, obj: any) {
        if (this.config.get('ENVIROMENT') == 'dev') {
            console.log(`++++++++++++++++${text}+++++++++++++++++++++`);
            console.log(obj);
        }
    }
}
