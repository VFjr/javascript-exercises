const findTheOldest = function (people) {

    return people.reduce((last_oldest_person, current_person) => {

        if (last_oldest_person === undefined) {
            return current_person;
        }

        last_age = get_age(last_oldest_person);
        current_age = get_age(current_person);

        if (current_age > last_age) {
            return current_person;
        }
        else {
            return last_oldest_person;
        }
    }, undefined)




};

const get_age = function (person) {

    var birth_date = person.yearOfBirth;
    var death_date = person.yearOfDeath;
    if (death_date === undefined) {
        today = new Date();
        death_date = today.getFullYear();
    }
    return death_date - birth_date;
}

// Do not edit below this line
module.exports = findTheOldest;
