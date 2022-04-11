import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommonService {
    constructor(private readonly config: ConfigService) {}

    async writeLog(text: string, obj: any) {
        if (this.config.get('ENVIROMENT') == 'dev') {
            console.log(`++++++++++++++++${text}+++++++++++++++++++++`);
            console.log(obj);
        }        
    }
}
