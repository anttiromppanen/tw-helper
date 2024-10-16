import * as fs from "fs";
import * as path from "path";
import {
  isValidFileExtension,
  readUserConfig,
  readUserThemeObjectFromConfig,
} from "./readUserConfig";

import jsConfig from "../../data/test/tailwind.config.js";
import cjsConfig from "../../data/test/tailwind.config.cjs";
import jsonConfig from "../../data/test/tailwind.config.json";
import mjsConfig from "../../data/test/tailwind.config.mjs";
// @ts-ignore
import tsConfig from "../../data/test/tailwind.config.ts";

import jsConfigMock from "../../data/test/mock/tailwind.config.mock.js";
import cjsConfigMock from "../../data/test/mock/tailwind.config.mock.cjs";
import jsonConfigMock from "../../data/test/mock/tailwind.config.mock.json";
import mjsConfigMock from "../../data/test/mock/tailwind.config.mock.mjs";
// @ts-ignore
import tsConfigMock from "../../data/test/mock/tailwind.config.mock.ts";

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
    beforeEach(() => {
      // Reset the mock before each test to avoid interference between tests
      (path.extname as jest.Mock).mockReset();
    });

    it("should return false when no filepath", () => {
      expect(isValidFileExtension()).toBeFalsy();
      expect(isValidFileExtension("")).toBeFalsy();
    });

    it("should return true if the file extension is valid", () => {
      jest.mock("path", () => ({
        ...jest.requireActual("path"), // Keep other methods intact
        extname: jest.fn(), // Mock extname
      }));

      (path.extname as jest.Mock).mockImplementation((filepath) => {
        if (filepath === "file.js") return ".js";
        if (filepath === "file.ts") return ".ts";
        if (filepath === "file.cjs") return ".cjs";
        if (filepath === "file.mjs") return ".mjs";
        if (filepath === "file.json") return ".json";
        return "";
      });

      expect(isValidFileExtension("file.js")).toBeTruthy();
      expect(isValidFileExtension("file.ts")).toBeTruthy();
      expect(isValidFileExtension("file.cjs")).toBeTruthy();
      expect(isValidFileExtension("file.mjs")).toBeTruthy();
      expect(isValidFileExtension("file.json")).toBeTruthy();
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

  describe("readUserThemeObjectFromConfig", () => {
    it("should return the theme object for a valid cjs config file", () => {
      const cjsTheme = readUserThemeObjectFromConfig(cjsConfigMock);
      expect(cjsConfig.theme).toEqual(cjsTheme);
    });

    it("should return the theme object for a valid js config file", () => {
      const jsTheme = readUserThemeObjectFromConfig(jsConfigMock);
      expect(jsConfig.theme).toEqual(jsTheme);
    });

    it("should return the theme object for a valid mjs config file", () => {
      const mjsTheme = readUserThemeObjectFromConfig(mjsConfigMock);
      expect(mjsConfig.theme).toEqual(mjsTheme);
    });

    it("should return the theme object for a valid ts config file", () => {
      const tsTheme = readUserThemeObjectFromConfig(tsConfigMock);
      expect(tsConfig.theme).toEqual(tsTheme);
    });

    it("should return the theme object for a valid json config file", () => {
      const jsonTheme = readUserThemeObjectFromConfig(jsonConfigMock);
      expect(jsonConfig.theme).toEqual(jsonTheme);
    });
  });
});
