const fs = require("fs");
const vm = require("vm");
import path from "path";

export function readUserExtendObjectFromConfig() {
  const packageJsonPath = path.resolve(process.cwd(), "tailwind.config.js");

  const data = fs.readFileSync(packageJsonPath, "utf8");

  // Create a sandbox and define the `module` structure
  const sandbox = { module: { exports: {} }, require };

  const script = new vm.Script(data);
  script.runInNewContext(sandbox);

  // Extract the Tailwind config object
  const tailwindConfig = sandbox.module.exports as any;

  // Extract the 'extend' object
  if (tailwindConfig.theme && tailwindConfig.theme.extend) {
    const extendObject = tailwindConfig.theme.extend;

    // Do something with the extend object (e.g., return it or modify it)
    return extendObject;
  } else {
    console.log("No extend object found in the Tailwind config");
    return null;
  }
}
