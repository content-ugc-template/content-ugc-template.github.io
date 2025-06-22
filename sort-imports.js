import fs from "fs/promises";

const filePaths = process.argv.slice(2);

if (filePaths.length === 0) {
  console.error(
    "Por favor, especifica al menos un archivo a ordenar. Ejemplo: npm run sort-imports archivo1.js archivo2.js"
  );
  process.exit(1);
}

async function sortImports(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");

    const useClientMatch = content.match(/^("use client";?\s*)/);
    const useClient = useClientMatch ? useClientMatch[0] : "";

    const contentWithoutUseClient = useClient
      ? content.slice(useClient.length)
      : content;

    const lines = contentWithoutUseClient.split("\n");

    const imports = [];
    const others = [];

    for (const line of lines) {
      if (line.trim().startsWith("import ")) {
        imports.push(line);
      } else {
        others.push(line);
      }
    }

    if (imports.length === 0) {
      console.log(`El archivo ${filePath} no tiene declaraciones de importación, omitiendo.`);
      return;
    }

    imports.sort((a, b) => a.length - b.length);

    const newContent =
      (useClient ? useClient : "") +
      imports.join("\n") +
      "\n" +
      others.join("\n");

    await fs.writeFile(filePath, newContent);

    console.log(`Imports ordenados por longitud en ${filePath}`);
  } catch (error) {
    console.error(`Error al procesar ${filePath}: ${error.message}`);
  }
}

for (const filePath of filePaths) {
  await sortImports(filePath);
}
