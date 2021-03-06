const database = require("../database-connection");


module.exports = {
    list(){
        return database('mentors').select()
    },
    read(id){
        return database('mentors').select().where('id', id).first()
    },
    create(mentor){
        return database('mentors')
            .insert(mentor)
            .returning('*')
            .then(record => record[0])
    },
    update(id, mentor){
        return database('mentors')
            .update(mentor)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('mentors').delete().where('id', id)
    }
}