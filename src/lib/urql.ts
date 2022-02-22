//uRQL = axios to GraphQL
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
    url: 'https://api-sa-east-1.graphcms.com/v2/ckzy9kmi85pnq01z84dd9h8mn/master',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})

export { client, ssrCache };