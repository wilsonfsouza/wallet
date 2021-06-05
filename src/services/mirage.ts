import { createServer, Model } from 'miragejs';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Website Development',
                    amount: 12000,
                    type: 'income',
                    category: 'Work',
                    createdAt: new Date('2021-02-12 09:00:00')
                },
                {
                    id: 1,
                    title: 'Costco',
                    amount: 150,
                    type: 'outcome',
                    category: 'Groceries',
                    createdAt: new Date('2021-02-14 11:00:00')
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', data);
        })
    }
});