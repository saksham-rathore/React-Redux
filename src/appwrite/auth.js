import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, Password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        Password,
        name,
      );

      if (userAccount) {
        // call another method
        return this.login({ email, Password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async login({ email, Password }) {
    try {
      return await this.Account.createEmailSession(email, Password);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {

    try {
        await this.account.deleteSessions();
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }
  }
}