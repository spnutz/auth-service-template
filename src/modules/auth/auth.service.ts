import * as bcrypt from 'bcrypt';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { BaseException } from 'src/common/exceptions/base.exception';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/common/schemas/users.schema';
import { Model } from 'mongoose';
import { ROLE } from 'src/common/constant/enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<Users>,
    private jwtService: JwtService,
  ) {}

  async register(body: RegisterDto): Promise<void> {
    const user = await this.usersModel
      .findOne({ username: body.username })
      .exec();
    if (user)
      throw new BaseException(
        'This email already exists.',
        HttpStatus.CONFLICT,
      );
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(body.password, saltOrRounds);
    await this.usersModel.create({
      name: body.name,
      email: body.email,
      username: body.username,
      password: hash,
      role: ROLE.USER,
    });
  }

  async login(body: LoginDto): Promise<any> {
    const { username, password } = body;
    const user = await this.usersModel.findOne({ username }).exec();
    if (!user) {
      throw new BaseException('user no found', HttpStatus.NOT_FOUND);
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    return this.getTokens(user._id, user.username);
  }

  private async getTokens(userId: any, username: string) {
    const payload = { sub: userId, username: username };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { payload },
        { secret: 'test', expiresIn: '15m' },
      ),
      this.jwtService.signAsync(
        { payload },
        { secret: 'test', expiresIn: '1d' },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
