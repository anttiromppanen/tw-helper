import * as fs from "fs";
import * as path from "path";
import { isValidFileExtension, readUserConfig } from "./readUserConfig";

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

  describe("isValidFileExtension", () => {
    it("should return undefined when no filepath", () => {
      expect(isValidFileExtension()).toBeUndefined();
      expect(isValidFileExtension("")).toBeUndefined();
    });

    it("should display error message and exit if the file extension is invalid", () => {
      // Mock process.exit
      const mockExit = jest
        .spyOn(process, "exit")
        .mockImplementation((code) => {
          throw new Error(`process.exit: ${code}`);
        });

      expect(() => isValidFileExtension("file.txt")).toThrow("process.exit: 1");
      expect(mockExit).toHaveBeenCalledWith(1);

      expect(() => isValidFileExtension("src/test")).toThrow("process.exit: 1");
      expect(mockExit).toHaveBeenCalledWith(1);
    });
  });

  describe("readUserConfig", () => {
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

    it("should display error message and exit if reading the file fails", () => {
      // Mock file existing
      mockExistsSync.mockReturnValueOnce(true);
      // Mock readFileSync throwing an error
      mockReadFileSync.mockImplementationOnce(() => {
        throw new Error("Error reading file");
      });

      // Mock process.exit
      const mockExit = jest
        .spyOn(process, "exit")
        .mockImplementation((code) => {
          throw new Error(`process.exit: ${code}`);
        });

      const paths = ["config1.json", "config2.json"];

      expect(() => readUserConfig(paths, "could not read config")).toThrow(
        "process.exit: 1",
      );
      expect(mockExit).toHaveBeenCalledWith(1);
    });
  });
});
