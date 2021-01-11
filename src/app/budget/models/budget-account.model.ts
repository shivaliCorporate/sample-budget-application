export class AccountDetails {

    constructor(
        public data: {
            account:
            {
                id: string,
                name: string,
                type: string,
                on_budget: true,
                closed: true,
                note: string,
                balance: 0,
                cleared_balance: 0,
                uncleared_balance: 0,
                transfer_payee_id: string,
                deleted: true
            },

            server_knowledge: 0
        }) {

    }
}

