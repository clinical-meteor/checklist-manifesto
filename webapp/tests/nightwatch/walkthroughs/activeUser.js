// ACTIVE USERS
// - admin should be able to see table of all users in the system
// - admin should be able to search by username

// - table row should display user full name
// - table row should display medical record number
// - table row should display date of birth
// - table row should display role
// - table should display 10 rows
// - table should display 100 rows
// - table should display N rows
// - table displays in page
// - user pick list displays


module.exports = {
  tags: ['users'],
  before: function(client){
    // this depends on the accounts-housemd package
    client
      .windowSize(1024,768)
      .initializeUsers()
      .pause(500)
  },
  "table row should display user full name": function(client){
    client
      .url("http://localhost:3000/table/users")
      .expect.element("#usersTablePage").to.be.visible
      .expect.element("#usersTable .user:nth-child(1) .fullName").to.be.visible
  },
  "table row should display user medical record number": function(client){
    client
      .url("http://localhost:3000/table/users")
      .expect.element("#usersTablePage").to.be.visible
      .expect.element("#usersTable .user:nth-child(1) .medicalRecordNumber").to.be.visible
  },
  "table row should display user date of birth": function(client){
    client
      .url("http://localhost:3000/table/users")
      .expect.element("#usersTablePage").to.be.visible
      .expect.element("#usersTable .user:nth-child(1) .dateOfBirth").to.be.visible
  },
  "table row should display user role": function(client){
    client
      .url("http://localhost:3000/table/users")
      .expect.element("#usersTablePage").to.be.visible
      .expect.element("#usersTable .user:nth-child(1) .role").to.be.visible
  }
});





