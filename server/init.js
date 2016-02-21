console.log("Starting server...");

Meteor.startup(function() {
    // Seed users
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "test@test.com",
            password: "password"
        });
    }
});