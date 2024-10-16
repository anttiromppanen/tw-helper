/**
 * @fileoverview This file contains utility functions for parsing user configuration files.
 */

/**
 * Change the user configuration file to CommonJS format by replacing the ES module export with CommonJS export.
 * @param configFile - The user configuration filepath
 * @returns The user configuration file in CommonJS format
 */

export function changeUserConfigToCommonJS(configFile: string) {
  // Transform ES module export to CommonJS export
  // Without this, the script will throw a SyntaxError
  return configFile.replace(/export default/, "module.exports =");
}

/**
 * Remove all import and require statements from the user configuration file.
 * @param configFile - The user configuration file in CommonJS format
 * @returns  The user configuration file without import and require statements
 */

export function removeImportsAndRequires(configFile: string) {
  // Remove all import and require statements
  return configFile.replace(/.*(import|require)\s.*;\n?/g, "");
}

/**
 * Remove the type annotation from the user configuration file.
 * @param configFile - The user configuration file without import and require statements
 * @returns The user configuration file without type annotation
 */

export function removeTypeAnnotation(configFile: string) {
  let modifiedConfig = configFile;
  modifiedConfig = modifiedConfig.replace(": Config", "");
  modifiedConfig = modifiedConfig.replace(":Config", "");
  return modifiedConfig;
}

/**
 * Main function to parse the user configuration file.
 * @param configFile - The user configuration filepath
 * @returns The user configuration file without type annotation, import, and require statements
 */

export function handleParseConfig(configFile: string) {
  return removeTypeAnnotation(
    removeImportsAndRequires(changeUserConfigToCommonJS(configFile)),
  );
}
