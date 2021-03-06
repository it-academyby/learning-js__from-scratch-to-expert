function User(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.logIn = function () {
        console.log(this.name + ' is logged in');
    };
}

User.prototype.logOut = function () {
    console.log(this.name + ' is logged out');
};


var firstUser = new User('Lisa', 'test@test.by', 'female');
firstUser.logOut();

console.log(firstUser instanceof User);

function AdminUser (name, email, gender, department) {
    User.apply(this, arguments);
    this.isAdmin = true;
    this.department = department;
};

AdminUser.prototype = Object.create(User.prototype);
AdminUser.prototype.constructor = AdminUser;

var admin = new AdminUser('Alex', 'admin@test.by', 'male', 'sales');

console.log(admin instanceof User);
console.log(admin instanceof AdminUser);