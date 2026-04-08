import { Client, ID, Databases, data } from "appwrite";
import conf from "../Config/config";

export class Todoservice {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appWrite).setProject(conf.appProjectId);
    this.databases = new Databases(this.client);
  }

  async getTodos() {
    try {
      return await this.databases.listDocuments(
        conf.appDatabaseId,
        conf.appCollectionId,
      );
    } catch (error) {
      console.log("Appwrite service :: getTodos :: error", error);
      return [];
    }
  }

  async createTodo(title) {
    try {
      return await this.databases.createDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        ID.unique(),
        {
          title,
          completed: false,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createTodo :: error", error);
    }
  }

  async updateTodo(ID) {
    try {
      return await this.databases.updateDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        ID,
        data
      );
    } catch (error) {
      console.log("Appwrite service :: createTodo :: error", error);
      return [];
    }
  }

  async deleteTodo(ID) {
    try {
      return await this.databases.deleteDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        ID,
      );
    } catch (error) {
      console.log("Appwrite service :: DeleteTodo :: error", error);
    }
  }
};

export default Todoservice;