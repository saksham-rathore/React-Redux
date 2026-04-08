const conf = {
    appWrite: String(import.meta.env.VITE_APPWRITE_URL),
    appProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
}


export default conf