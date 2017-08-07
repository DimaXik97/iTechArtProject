export const getNews= ()=>({
    type: 'GET_NEWS'
})
export const initNews =(news)=>({
    type: 'INIT_NEWS',
    news: news
})