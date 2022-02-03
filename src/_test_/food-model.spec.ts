import { FoodModel } from "../models/food-model";

describe("Class", () => {
  it("Class FoodModel", () => {
    const foodModel = new FoodModel({
      name: "Guiso",
      description: "Guiso de lenteja",
      price: 1200,
    });

    expect(foodModel.getName()).toEqual("Guiso");
    expect(foodModel.getDescription()).toEqual("Guiso de lenteja");
    expect(foodModel.getPrice()).toBe(1200);
  });
});
