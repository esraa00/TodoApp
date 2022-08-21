const cookieParser = require("cookie-parser");
const request = require("supertest");
const { app, initializeDatabase } = require("./server");

beforeAll(async () => {
  await initializeDatabase();
});

describe("authentication", () => {
  describe(" post sign in user route", () => {
    describe("given user is found", () => {
      it("should return 200", async () => {
        const response = await request(app)
          .post("/api/v1/auth/signIn")
          .send({
            email: "sandra@gmail.com",
            password: "sandra",
          })
          .expect(200);
      });
    });
    describe("given user is not found", () => {
      it("should return 404", async () => {
        await request(app)
          .post("/api/v1/auth/signIn")
          .send({
            email: "s@gmail.com",
            password: "s",
          })
          .expect(404);
      });
    });
  });

  describe("post sign up user route", () => {
    describe("given user is already exist", () => {
      it("should return 409 status", async () => {
        await request(app)
          .post("/api/v1/auth/signUp")
          .send({
            firstName: "sandra",
            lastName: "serag",
            email: "sandra@gmail.com",
            password: "Sandraguest5056@",
          })
          .expect(409);
      });
    });
    describe("given user doesn't exist", () => {
      it("should return 201 status", async () => {
        await request(app)
          .post("/api/v1/auth/signUp")
          .send({
            firstName: "sara",
            lastName: "mohamed",
            email: "sara@gmail.com",
            password: "Saraguest5056@",
          })
          .expect(201);
      });
    });
  });
});

// describe("user API", () => {
//   it("POST /user", async () => {
//     await request(app).post("/api/v1/user").expect(201).send({
//       firstName: "sandra",
//       lastName: "serag",
//       email: "sandra@gmail.com",
//       password: "sandra",
//     });
//   });
// });

// describe("user API", () => {
//   it("GET /user --> array of users", async () => {
//     await request(app)
//       .get("/api/v1/user/")
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body).toEqual(
//           expect.objectContaining({
//             status: "failure",
//             response: expect.any(String),
//           })
//         );
//       });
//   });
// it("GET /task/id --> certain task", () => {});
// it("POST /task --> create task", () => {});
// });
