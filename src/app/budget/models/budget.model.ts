export class Budgets {
    constructor(
        public id: number,
        public code: string,
        public name: string,
        public created: Date,


        public budgets: [
            {
                id: string,
                name: string,
                last_modified_on: Date,
                first_month: string,
                last_month: string,
                date_format: {
                    format: string
                },
                currency_format: {
                    iso_code: string,
                    example_format: string,
                    decimal_digits: number,
                    decimal_separator: string,
                    symbol_first: boolean,
                    group_separator: string,
                    currency_symbol: string,
                    display_symbol: boolean
                },
                accounts: [
                    {
                        id: string,
                        name: string,
                        type: string,
                        on_budget: boolean,
                        closed: boolean,
                        note: string,
                        balance: number,
                        cleared_balance: number,
                        uncleared_balance: number,
                        transfer_payee_id: string,
                        deleted: boolean
                    }
                ]
            }
        ],

        public default_budget: {
            id: string,
            name: string,
            last_modified_on: Date,
            first_month: string,
            last_month: string,
            date_format: {
                format: string
            },
            currency_format: {
                iso_code: string,
                example_format: string,
                decimal_digits: number,
                decimal_separator: string,
                symbol_first: boolean,
                group_separator: string,
                currency_symbol: string,
                display_symbol: boolean
            },
            accounts: [
                {
                    id: string,
                    name: string,
                    type: string,
                    on_budget: boolean,
                    closed: boolean,
                    note: string,
                    balance: number,
                    cleared_balance: number,
                    uncleared_balance: number,
                    transfer_payee_id: string,
                    deleted: boolean
                }
            ]

        }
    ) { }
}