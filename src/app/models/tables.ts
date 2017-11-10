export class Tables {

    tables: string[] = []
    database_name: string
    bucket_name: string
    type: string

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}   

