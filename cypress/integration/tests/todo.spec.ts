const URLHost = "http://localhost:8081/";

describe("Todo List App", () => {
  it("Should add two tasks and press button Add Task", () => {
    cy.visit(URLHost);
    cy.get("#todo-list-input").as("input").type("Do the laundry");
    cy.get("#todo-list-btn-add").as("addBtn").click();
    cy.get("@input").should("be.empty");
    cy.get("@input").type("Do the dishes");
    cy.get("@addBtn").click();
    cy.get("@input").should("be.empty");
  });

  it("Should check both tasks and delete them", () => {
    cy.get(".todo-list.input-check").then((tasks) => {
      tasks.each((_, task) => {
        task.click();
      });
    });
    cy.get(".todo-list.delete-task-active").then((deleteItems) => {
      deleteItems.each((_, deleteItem) => {
        deleteItem.click();
        cy.wait(0);
        deleteItem.click();
      });
    });
  });

  it("Should add three tasks and press Enterkey", () => {
    cy.get("#todo-list-input").as("input").type("Do the laundry{enter}");
    cy.get("@input").should("be.empty");
    cy.get("@input").type("Do the dishes{enter}");
    cy.get("@input").should("be.empty");
    cy.get("@input").type("Clean the room{enter}");
    cy.get("@input").should("be.empty");
  });
});
