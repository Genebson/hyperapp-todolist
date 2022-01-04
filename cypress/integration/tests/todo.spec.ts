const URLHost = "http://localhost:8081/";

describe("Todo List App", () => {
  it("Should add two tasks and press button Add Task", () => {
    cy.visit(URLHost);
    cy.get("#todo-list-input").type("Do the laundry");
    cy.get("#todo-list-btn-add").click();
    cy.get("#todo-list-input").should("be.empty");
    cy.get("#todo-list-input").type("Do the dishes");
    cy.get("#todo-list-btn-add").click();
    cy.get("#todo-list-input").should("be.empty");
  });

  it("Should check both tasks and delete them", () => {
    cy.get(".todo-list.input-check").then((tasks) => {
      tasks.each((_, task) => {
        task.click();
      });
    });
    cy.get(".todo-list.delete-task-active").then((deleteItems) => {
      console.log(deleteItems);

      deleteItems.each((_, deleteItem) => {
        deleteItem.click();
      });
    });
  });

  // it("Should add one task and press Enter key", () => {
  //   cy.get("#todo-list-input").type("Do the laundry{enter}");
  //   cy.get("#todo-list-input").should("be.empty");
  //   cy.get("#todo-list-input").type("Do the dishes{enter}");
  //   cy.get("#todo-list-input").should("be.empty");
  // });
});
