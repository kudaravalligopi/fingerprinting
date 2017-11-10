export class Sources {
    
    bucket_name: string
    type: string
    databases: string[] = []
    

    constructor(values: Object={}){
        Object.assign(this, values)
    }
}
