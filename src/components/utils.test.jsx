import { toTitleCase } from "./utils";

it("should capitalise a string", () => {
  expect(toTitleCase("not capitalised")).toEqual("Not capitalised");
});
