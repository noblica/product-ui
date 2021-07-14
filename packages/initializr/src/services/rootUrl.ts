const rootMap = {
    'local': 'http://localhost:8080/',
    'prod': '/',
};

export const rootUrl = rootMap[globalThis.currentEnv]