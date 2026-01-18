export default class Task {
    constructor(id, title, description, status = 'pending', dueDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
    }
}