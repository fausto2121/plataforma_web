const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://Angel99vr:@240915@cluster0.lubsf.mongodb.net/PSDB?retryWrites=true&w=majority',
    port: process.env.PORT || 6000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config