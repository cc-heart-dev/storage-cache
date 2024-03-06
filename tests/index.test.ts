import { defineStorage } from "../src/index";
import { describe, it, expect } from "vitest";

describe("storage", () => {
  it("should create a new storage object", () => {
    const storage = defineStorage("test");
    expect(storage).toBeDefined();
    expect(storage.localStorageCache).toBeDefined();
    expect(storage.sessionStorageCache).toBeDefined();
  });
});