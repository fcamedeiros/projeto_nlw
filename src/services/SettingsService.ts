import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {

  private settingsRespository: Repository<Setting>;

  constructor() {
    this.settingsRespository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {

    //Select * from settings where username = "username" limit 1
    const userAlreadyExists = await this.settingsRespository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this.settingsRespository.create({
      chat,
      username,
    });

    await this.settingsRespository.save(settings);

    return settings;
  }

}

export { SettingsService }