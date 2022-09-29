import {Test} from '@nestjs/testing';
import { UserResolver } from '../user.resolver';
import { UserService } from '../user.service';

describe("User Controller", () => {

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports:[],
            providers:[UserResolver, UserService]
        }).compile()
    })

})