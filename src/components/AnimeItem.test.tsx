import { describe, expect, test } from "vitest";
import { AnimeItem } from "./AnimeItem";

describe("AnimeItem", () => {
    test("should render correctly", () => {
        expect(<AnimeItem onClick={() => { }} />).toBeTruthy();
    })
})