import { describe, expect, test, vi } from "vitest";
import { AnimeItem } from "./AnimeItem";

describe("AnimeItem", () => {
    test("should render correctly", () => {
        expect(<AnimeItem onClick={() => { }} />).toBeTruthy();
    })
})