import { describe, expect, test } from "vitest";
import { AnimeListGenerateAnimeItems } from "./AnimeList";

describe("AnimeList Component", () => {
  test("should render correctly", () => {
    // Test implementation goes here
  });

  test("generates empty anime items correctly", () => {
    const animeSource: string[] = [];

    const result = AnimeListGenerateAnimeItems(animeSource, () => { });

    expect(result.length).toBe(0);
    expect(typeof result[0]).eq("undefined");

  })
  test("generates anime items correctly", () => {
    const animeSource: string[] = ["Naruto", "One Piece", "Bleach"];

    const result = AnimeListGenerateAnimeItems(animeSource, () => { });

    expect(result.length).toBe(3);
    expect(typeof result[0]).eq("object");
    expect(result[0].key).toBe("Naruto");

  });
  test("除法測試", () => {
    expect(10 * 3 / 2).toBe(5);
  });
  test("除法測試", () => {
    expect(10*3 / 0).toBe(null);
  });
  //test1
  // excel -> raw data

  //test2
  // raw data -> json format

  //test3
  // json format -> 整理過後的資料

  //test4
  // 整理過後的資料 -> 前端呈現
});