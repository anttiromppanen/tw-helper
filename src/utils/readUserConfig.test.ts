import * as fs from "fs";
import * as path from "path";
import { readUserConfig } from "./readUserConfig";

// Mock the fs and path modules
jest.mock("fs");
jest.mock("path");

describe("readUserConfig", () => {
  const mockExistsSync = fs.existsSync as jest.Mock;
  const mockReadFileSync = fs.readFileSync as jest.Mock;
  const mockResolve = path.resolve as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks(); // Clear all previous mock calls
  });

  it("should return the config data if the file exists", () => {
    // Mock the behavior of fs.existsSync and fs.readFileSync
    mockExistsSync.mockReturnValueOnce(true); // File exists
    mockReadFileSync.mockReturnValueOnce("mock file content");
    mockResolve.mockImplementation((_, filepath) => filepath); // Return filepath directly

    const paths = ["config1.json", "config2.json"];
    const result = readUserConfig(paths, "Error: config not found!");

    expect(mockExistsSync).toHaveBeenCalledWith(expect.any(String));
    expect(mockReadFileSync).toHaveBeenCalledWith(expect.any(String), "utf8");
    expect(result).toBe("mock file content");
  });
});
