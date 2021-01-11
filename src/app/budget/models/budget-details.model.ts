export class BudgetDetails {
    constructor(

        public budget: {
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
                    cleastring_balance: number,
                    uncleastring_balance: number,
                    transfer_payee_id: string,
                    deleted: boolean
                }
            ],
            payees: [
                {
                    id: string,
                    name: string,
                    transfer_account_id: string,
                    deleted: boolean
                }
            ],
            payee_locations: [
                {
                    id: string,
                    payee_id: string,
                    latitude: string,
                    longitude: string,
                    deleted: boolean
                }
            ],
            category_groups: [
                {
                    id: string,
                    name: string,
                    hidden: boolean,
                    deleted: boolean
                }
            ],
            categories: [
                {
                    id: string,
                    category_group_id: string,
                    name: string,
                    hidden: boolean,
                    original_category_group_id: string,
                    note: string,
                    budgeted: number,
                    activity: number,
                    balance: number,
                    goal_type: string,
                    goal_creation_month: string,
                    goal_target: number,
                    goal_target_month: string,
                    goal_percentage_complete: number,
                    deleted: boolean
                }
            ],
            months: [
                {
                    month: string,
                    note: string,
                    income: number,
                    budgeted: number,
                    activity: number,
                    to_be_budgeted: number,
                    age_of_money: number,
                    deleted: boolean,
                    categories: [
                        {
                            id: string,
                            category_group_id: string,
                            name: string,
                            hidden: boolean,
                            original_category_group_id: string,
                            note: string,
                            budgeted: number,
                            activity: number,
                            balance: number,
                            goal_type: string,
                            goal_creation_month: string,
                            goal_target: number,
                            goal_target_month: string,
                            goal_percentage_complete: number,
                            deleted: boolean
                        }
                    ]
                }
            ],
            transactions: [
                {
                    id: string,
                    date: string,
                    amount: number,
                    memo: string,
                    cleastring: string,
                    approved: boolean,
                    flag_color: string,
                    account_id: string,
                    payee_id: string,
                    category_id: string,
                    transfer_account_id: string,
                    transfer_transaction_id: string,
                    matched_transaction_id: string,
                    import_id: string,
                    deleted: boolean
                }
            ],
            subtransactions: [
                {
                    id: string,
                    transaction_id: string,
                    amount: number,
                    memo: string,
                    payee_id: string,
                    payee_name: string,
                    category_id: string,
                    category_name: string,
                    transfer_account_id: string,
                    transfer_transaction_id: string,
                    deleted: boolean
                }
            ],
            scheduled_transactions: [
                {
                    id: string,
                    date_first: string,
                    date_next: string,
                    frequency: never,
                    amount: number,
                    memo: string,
                    flag_color: string,
                    account_id: string,
                    payee_id: string,
                    category_id: string,
                    transfer_account_id: string,
                    deleted: boolean
                }
            ],
            scheduled_subtransactions: [
                {
                    id: string,
                    scheduled_transaction_id: string,
                    amount: number,
                    memo: string,
                    payee_id: string,
                    category_id: string,
                    transfer_account_id: string,
                    deleted: boolean
                }
            ]
        },
        public server_knowledge: 0

    ) {

    }
}