import { RegisterVehicle } from "../controllers/register-vehicle";

describe("RegisterVehicle", () => {
  test("is the does not exist return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: "Nissan",
        model: "DXT",
        year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the: name"));
  });
  test("is the model not exist return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        // model: "DXT",
        year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the: model"));
  });
  test("is the year not exist return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        // year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the: year"));
  });
  test("is the color not exist return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        year: 2020,
        // color:"blue"
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the: color"));
  });
});
