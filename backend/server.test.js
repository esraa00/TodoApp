const cookieParser = require("cookie-parser");
const request = require("supertest");
const { app, initializeDatabase } = require("./server");

beforeAll(async () => {
  await initializeDatabase();
});

describe("authentication", () => {
  describe(" post sign in user route", () => {
    describe("given user is found", () => {
      it("should return 200 status , access token and refresh token", async () => {
        const response = await request(app)
          .post("/api/v1/auth/signIn")
          .send({
            email: "sandra@gmail.com",
            password: "sandra",
          })
          .expect(200);
        expect((response) => {
          should(cookieParser.parse(response));
        });
        response.cookie.map((cookie) => {
          console.log(cookie);
        });
        // expect(response.cookie).toBe(
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY2MDQ0NDg0MSwiZXhwIjoxNjYxMDQ5NjQxfQ.pniLcI6wXqWooQgO1oH4ZvDgoQ-ul3jVYytT8FpJEzU"
        // );
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
    describe("gven user is already exist", () => {
      it("should return 409 status", async () => {
        await request(app)
          .post("/api/v1/auth/signUp")
          .send({
            firstName: "sandra",
            lastName: "serag",
            email: "sandra@gmail.com",
            password: "sandra",
          })
          .expect(409);
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
