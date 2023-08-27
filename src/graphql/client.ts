import { Client, cacheExchange, fetchExchange } from 'urql';
const client = new Client({
    url: 'https://hasura-production-52d2.up.railway.app/v1/graphql',
    fetchOptions: () => {
    const headers = {
        'Content-Type': 'application/json',
        'Hasura-Client-Name': 'hasura-console',
        'x-hasura-admin-secret': 'test-nirav-todo-app'
    };
    return { headers };
    },
    exchanges: [cacheExchange, fetchExchange],
});

export default client