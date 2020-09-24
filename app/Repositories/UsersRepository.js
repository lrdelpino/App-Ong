const User = use("App/Models/User");

class UserRepository {
    static search(request) {
        let query = User.query();

        let globalSearchParam = 'q'

        let defaultOperator = 'like'

        let searchable = ['first_name', 'last_name', 'email', ]

        if (request.input(globalSearchParam)) {
            searchable.forEach(field => {
                query.orWhere(field, defaultOperator, `%${request.input(globalSearchParam)}%`);
            })
        } else {
            searchable.forEach(field => {
                if (request.input(field)) {
                    query.orWhere(field, defaultOperator, `%${request.input(field)}%`);
                }
            })
        }

        return query
    }
}

module.exports = UserRepository