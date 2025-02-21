import { assert } from "@std/assert";
import * as YAML from "@std/yaml";
import { KNOWN_TEMPLATES } from "./mod.ts";

async function fetchAndParseTemplate({ url }: { url: string }) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  const yamlText = await response.text();
  const _parsed = await YAML.parse(yamlText);
  return true;
}

type FetchPageForTemplateOptions = {
  name: string;
  ga: boolean;
};

async function fetchPageForTemplate(
  { name, ga }: FetchPageForTemplateOptions,
) {
  if (!ga) return true;
  const url = `https://cndi.dev/templates/${name}`;
  const response = await fetch(
    url,
  );
  await response.text();
  assert(response.status === 200);
}

Deno.test(async function ensureTemplatesExist() {
  await Promise.all(KNOWN_TEMPLATES.map(fetchAndParseTemplate));
});

Deno.test(async function ensureGATemplatesHavePages() {
  await Promise.all(KNOWN_TEMPLATES.map(fetchPageForTemplate));
});
