export class Columns {
    
    table_name: string
    database_name: string
    bucket_name: string
    type: string
    columns: string[] = []


    constructor(values: Object={}){
        Object.assign(this, values)
    }
}
