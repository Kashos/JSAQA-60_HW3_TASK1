const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const result = sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(result).toEqual(expected);
  });
  it("Books names should not be sorted in ascending order", () => {
    const input = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города"
    ];

    const result = sorting.sortByName(input);
    const expected = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города"
    ];
    expect(result).toEqual(expected);
  });
});