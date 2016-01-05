// ACTIVE USERS
// - can config table to show/hide mrn
// - can config table to show/hide role
// - can config table to show/hide date of birth
// - can config table to show/hide preferred name
// - can set a global config table to show everything
// - can set a global config table to hide everything



describe("clinical:active-layout", function(){
  
  it("can config table to show medical record number", function(){
    server
      .execute(function(){
        ActiveUsers.set("showMrn", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .medicalRecordNumber").to.be.visible;
        });
      });
  });
 it("can config table to hide medical record number", function(){
    server
      .execute(function(){
        ActiveUsers.set("showMrn", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .medicalRecordNumber").to.not.exist;
        });
      });
  });
  
it("can config table to show role", function(){
    server
      .execute(function(){
        ActiveUsers.set("showRole", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .role").to.be.visible;
        });
      });
  });
 it("can config table to hide role", function(){
    server
      .execute(function(){
        ActiveUsers.set("showRole", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .role").to.not.exist;
        });
      });
  });
  
  
it("can config table to show date of birth", function(){
    server
      .execute(function(){
        ActiveUsers.set("showDateOfBirth", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .dateOfBirth").to.be.visible;
        });
      });
  });
 it("can config table to hide date of birth", function(){
    server
      .execute(function(){
        ActiveUsers.set("showDateOfBirth", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .dateOfBirth").to.not.exist;
        });
      });
  });
  
  
it("can config table to show preferred name", function(){
    server
      .execute(function(){
        ActiveUsers.set("showPreferredName", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .preferredName").to.be.visible;
        });
      });
  });
 it("can config table to hide preferred name", function(){
    server
      .execute(function(){
        ActiveUsers.set("showPreferredName", true);
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .preferredName").to.not.exist;
        });
      });
  });
  
  
  
  
it("can set a global config table to show everything", function(){
    server
      .execute(function(){
        ActiveUsers.config({
          showMrn: true,
          showRole: true,
          showDateOfBirth: true,
          showPreferredName: true
        });
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable .user:nth-child(1) .medicalRecordNumber").to.be.visible;
          expect.element("#usersTable .user:nth-child(1) .role").to.be.visible;
          expect.element("#usersTable .user:nth-child(1) .dateOfBirth").to.be.visible;
          expect.element("#usersTable .user:nth-child(1) .preferredName").to.be.visible;
        });
      });
  });
 it("can set a global config table to hide everything", function(){
    server
      .execute(function(){
        ActiveUsers.config({
          showMrn: false,
          showRole: false,
          showDateOfBirth: false,
          showPreferredName: false
        });
      }).then(function(){
        client.wait(300, "", function(){
          expect.element("#usersTable").to.be.visible;
          expect.element("#usersTable .user:nth-child(1) .medicalRecordNumber").to.not.exist;
          expect.element("#usersTable .user:nth-child(1) .role").to.not.exist;
          expect.element("#usersTable .user:nth-child(1) .dateOfBirth").to.not.exist;
          expect.element("#usersTable .user:nth-child(1) .preferredName").to.not.exist;
        });
      });
  });
  
  
});
