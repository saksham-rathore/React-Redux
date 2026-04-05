const conf = {
    appwrite: String(import.meta.env.VITE_APPWRITE_URL),
    appproject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appcollection: String(import.meta.env.VITE_APPWRITE_COLLECTIONS_ID),
    appbucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appdatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
}


export default conf