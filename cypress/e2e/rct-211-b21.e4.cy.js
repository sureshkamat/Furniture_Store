import data from "../../submissionData.json";
// const data = [
//   {
//     submission_link: "http://localhost:3001",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

const getTasks = (win) => win.reduxStore.getState();

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-211-B21.E4", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);

      cy.window().its("reduxStore").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure`, () => {
      cy.window().then(getTasks).should("deep.equal", {
        tasks: [],
        isLoading: false,
        isError: false,
      });
    });

    //1
    it("Check if proper GET request is being handled by the app on load", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);
      cy.url().should("eq", url);

      cy.wait("@getReq");
      cy.get("[data-testid^=task-item]").should("have.length", 1);
      cy.then(() => (acc_score += 1));
    });

    //1
    it("Check if the initial data is being shown on the Navbar", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);
      cy.url().should("eq", url);

      cy.wait("@getReq");
      cy.get("[data-testid=pending-task-count]").should("have.text", 1);
      cy.get("[data-testid=completed-task-count]").should("have.text", 1);
      cy.get("[data-testid=total-tasks-count]").should("have.text", 2);
      cy.then(() => (acc_score += 1));
    });

    //2
    it("Check if user is redirected to the EditPage, when clicked on Edit button, and the data is pre-filled in the input boxes and select tag", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);
      cy.wait("@getReq");
      cy.get("[data-testid=task-item-1]").within(() => {
        cy.get("[data-testid=edit-task]").click();
        cy.url().should("contain", "edit/1");
        cy.then(() => (acc_score += 1));
      });
      cy.get("[data-testid=edit-task-title]").should(
        "have.value",
        "Learn Redux"
      );
      cy.get("[data-testid=edit-select-option]").should("have.value", "false");
      cy.then(() => (acc_score += 1));
    });

    //1
    it("check if the input box and select box are pre-filled with data even with page refresh", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);
      cy.wait("@getReq");
      cy.visit(`${url}edit/2`);
      cy.get("[data-testid=edit-task-title]").should(
        "have.value",
        "Learn React-Redux"
      );
      cy.get("[data-testid=edit-select-option]").should("have.value", "true");
      cy.then(() => (acc_score += 1));
    });

    //3
    it("check: PATCH request, redirecting the user to homepage if request is successful, showing updated data in the UI", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.intercept("PATCH", "**/tasks/1", {
        id: 1,
        title: "Learn Redux - M1",
        status: true,
      }).as("patchReq");
      cy.visit(url);
      cy.get("[data-testid=task-item-1]").within(() => {
        cy.get("[data-testid=edit-task]").click();
      });
      cy.get("[data-testid=edit-task-title]").clear().type("Learn Redux - M1");
      cy.get("[data-testid=edit-select-option]").select("true");
      cy.get("[data-testid=edit-update]").click();
      cy.wait("@patchReq");
      cy.then(() => (acc_score += 1));
      cy.url().should("eq", url);
      cy.then(() => (acc_score += 1));
      cy.get("[data-testid=pending-task-count]").should("have.text", 0);
      cy.get("[data-testid=completed-task-count]").should("have.text", 2);
      cy.get("[data-testid=total-tasks-count]").should("have.text", 2);
      cy.get("[data-testid=task-item-1]").within(() => {
        cy.get("[data-testid=task-title]").should(
          "have.text",
          "Learn Redux - M1"
        );
        cy.get("[data-testid=task-status]").should("have.text", "True");
      });
      cy.then(() => (acc_score += 1));
    });

    //3
    it("check: Add Task, if user is re-directed to the Add task page, POST request is made, UI is updated with the newly added data", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);

      cy.intercept("POST", "**/tasks", {
        id: 3,
        title: "Testing POST request",
        status: false,
      }).as("postReq");
      cy.wait("@getReq");
      cy.get("[data-testid=add-task]").click();
      cy.url().should("contain", "add");
      cy.get("[data-testid=add-task-input-box]").should("exist");
      cy.get("[data-testid=add-task-input-box]")
        .clear()
        .type("Testing POST request");
      cy.get("[data-testid=add-task-button]").click();
      cy.wait("@postReq");
      cy.then(() => (acc_score += 1));

      cy.get("[data-testid=pending-task-count]").should("have.text", 2);
      cy.get("[data-testid=completed-task-count]").should("have.text", 1);
      cy.get("[data-testid=total-tasks-count]").should("have.text", 3);

      cy.get("[data-testid=task-item-3]").should("exist");
      cy.get("[data-testid=task-item-3]").within(() => {
        cy.get("[data-testid=task-title]").should(
          "have.text",
          "Testing POST request"
        );
        cy.get("[data-testid=task-status]").should("have.text", "False");
      });
      cy.then(() => (acc_score += 2));
    });

    //3
    it("should handle DELETE API request, and should remove the task from the UI, and update the navbar with the new count as well", () => {
      cy.intercept("GET", "**/tasks", [
        {
          id: 1,
          title: "Learn Redux",
          status: false,
        },
        {
          id: 2,
          title: "Learn React-Redux",
          status: true,
        },
      ]).as("getReq");
      cy.visit(url);

      cy.intercept("DELETE", "**/tasks/2", {}).as("deleteReq");
      cy.wait("@getReq");
      cy.get("[data-testid=task-item-2]").within(() => {
        cy.get("[data-testid=delete-task]").click();
      });
      cy.wait("@deleteReq");
      cy.then(() => (acc_score += 1));

      cy.get("[data-testid=pending-task-count]").should("have.text", 1);
      cy.get("[data-testid=completed-task-count]").should("have.text", 0);
      cy.get("[data-testid=total-tasks-count]").should("have.text", 1);
      cy.then(() => (acc_score += 1));

      cy.get("[data-testid=task-item-2]").should("not.exist");
      cy.then(() => (acc_score += 1));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      //////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      ////////////////
    });
  });
});
