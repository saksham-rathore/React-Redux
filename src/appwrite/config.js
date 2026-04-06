import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AuthService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appWrite).setProject(conf.appProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }
  }

  async updatepost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
      return false;
    }
  }

  async getpost(slug) {
    try {
      await this.databases.getDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
      return false;
    }
  }

  async getposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appDatabaseId,
        conf.appCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }
  }

  // File Upload Service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Apperite service :: getCurrentUser :: error", error);
    }


  }

  async dalateFile(fileId) {
    try {
        await this.bucket.deleteFile(
            conf.appBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Apperite service :: getCurrentUser :: error", error);
        return false
    }
  }

  getFilePreview(fileId){
      return this.bucket.getFilePreview(
          conf.appBucketId,
          fileId
      )
  }
}

const service = new AuthService();
export default service;