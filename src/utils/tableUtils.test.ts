import CliTable3 from "cli-table3";
import { createTableFromKeyValueArray, tablesSideBySide } from "./tableUtils";
import chalk from "chalk";

// Mock CliTable3 for Jest
jest.mock("cli-table3");

describe("createTableFromKeyValueArray", () => {
  let mockTablePush: jest.Mock;
  let mockTableToString: jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockTablePush = jest.fn();
    mockTableToString = jest.fn(() => "Mocked Table Output");

    // Mock the CliTable3 constructor behavior
    (CliTable3 as jest.Mock).mockImplementation(() => ({
      push: mockTablePush,
      toString: mockTableToString,
    }));
  });

  it("should render table with correct key-value pairs and colors", () => {
    const keyValueArray = [
      ["primary", "#ff0000"],
      ["secondary", "#00ff00"],
      ["neutral", { 50: "#f5f5f5", 100: "#e5e5e5" }],
    ];

    const header1 = "Color";
    const header2 = "Hex Code";

    const result = createTableFromKeyValueArray(
      keyValueArray,
      header1,
      header2,
      true,
    );

    // Check if the header was rendered with chalk.bold.cyan
    expect(CliTable3).toHaveBeenCalledWith({
      head: [chalk.bold.cyan(header1), chalk.bold.cyan(header2)],
      style: { border: [], compact: true },
      colWidths: [20, 20],
    });

    // Check that the right rows were pushed to the table

    // ["primary", "#ff0000"],
    expect(mockTablePush).toHaveBeenCalledWith([
      chalk.hex("#ff0000")("primary"),
      chalk.gray("#ff0000"),
    ]);

    // ["secondary", "#00ff00"],
    expect(mockTablePush).toHaveBeenCalledWith([
      chalk.hex("#00ff00")("secondary"),
      chalk.gray("#00ff00"),
    ]);

    // main color for shades, "neutral"
    expect(mockTablePush).toHaveBeenCalledWith([chalk.grey("neutral"), ""]);

    // first shade, 50
    expect(mockTablePush).toHaveBeenCalledWith([
      chalk.hex("#f5f5f5")("  ─ 50"),
      chalk.grey("#f5f5f5"),
    ]);

    // second shade, 100
    expect(mockTablePush).toHaveBeenCalledWith([
      chalk.hex("#e5e5e5")("  ─ 100"),
      chalk.grey("#e5e5e5"),
    ]);

    // Ensure the result is the mocked table output
    expect(result).toBe("Mocked Table Output");
  });
});

describe("tablesSideBySide", () => {
  it("should combine two tables with equal lines", () => {
    const table1 = "Header1\nRow1\nRow2";
    const table2 = "Header2\nRowA\nRowB";

    const { output, tablePlacesSwapped } = tablesSideBySide(table1, table2);

    expect(tablePlacesSwapped).toBe(false);
    expect(output).toBe("Header1   Header2\nRow1   RowA\nRow2   RowB\n");
  });

  it("should render table1 first if it has more lines", () => {
    const table1 = "Header1\nRow1\nRow2\nRow3\nRow4";
    const table2 = "Header2\nRowA\nRowB";

    const { output, tablePlacesSwapped } = tablesSideBySide(table1, table2);

    expect(tablePlacesSwapped).toBe(false);
    expect(output).toBe(
      "Header1   Header2\nRow1   RowA\nRow2   RowB\nRow3   \nRow4   \n",
    );
  });

  it("should render table2 first if it has more lines", () => {
    const table1 = "Header1\nRow1\nRow2";
    const table2 = "Header2\nRowA\nRowB\nRowC\nRowD";

    const { output, tablePlacesSwapped } = tablesSideBySide(table1, table2);

    expect(tablePlacesSwapped).toBe(true);
    expect(output).toBe(
      "Header2   Header1\nRowA   Row1\nRowB   Row2\nRowC   \nRowD   \n",
    );
  });
});
