export interface BudgetMonth {


    month: string
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