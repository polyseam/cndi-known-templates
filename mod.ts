/**
 * A module which provides an up-to-date list of known CNDI Templates
 * and relevant metadata.
 * @example
 * ```ts
 * import { KNOWN_TEMPLATES } from "@cndi/known-templates";
 *
 * for (const template of KNOWN_TEMPLATES) {
 *   console.log(template.name,':', template.url);
 * }
 * ```
 *
 * @module
 */
export const POLYSEAM_TEMPLATE_DIRECTORY_URL =
  "https://raw.githubusercontent.com/polyseam/cndi/main/templates/";

type CNDITemplateType =
  | "Database"
  | "Orchestration"
  | "Messaging"
  | "Hardware Acceleration"
  | "Serverless"
  | "CMS"
  | "Cache"
  | "Data Visualization"
  | "Data Integration"
  | "Core"
  | "Artificial Intelligence"
  | "Storage"
  | "Web Server";

export type CNDIKnownTemplate = {
  name: string;
  title: string; // name of the template as it appears on the website
  type: CNDITemplateType; // type of the template (eg: "Database", "Message Queue", "Web Server")
  url: string; // URL to the template's YAML file
  aliases?: string[]; // other names that can be used to refer to this template with `cndi create -t`
  ga: boolean; // whether Template is Generally Available (ie: has /templates/:name page)
};

export const KNOWN_TEMPLATES: CNDIKnownTemplate[] = [
  {
    name: "basic",
    title: "Basic",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/basic.yaml`,
    ga: false, // `basic` Template has no docs page
    type: "Core",
  },
  {
    name: "airflow",
    title: "Airflow",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/airflow.yaml`,
    ga: true,
    type: "Orchestration",
  },
  {
    name: "postgres",
    title: "Postgres",
    type: "Database",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/postgres.yaml`,
    aliases: ["cnpg", "pg", "postgresql"],
    ga: true,
  },
  {
    name: "kafka",
    title: "Kafka",
    type: "Messaging",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/kafka.yaml`,
    aliases: ["strimzi"],
    ga: true,
  },
  {
    name: "wordpress",
    title: "Wordpress",
    type: "CMS",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/wordpress.yaml`,
    ga: true,
  },
  {
    name: "gpu-operator",
    title: "GPU Operator",
    type: "Hardware Acceleration",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/gpu-operator.yaml`,
    ga: true,
  },
  {
    name: "vllm",
    title: "VLLM",
    type: "Artificial Intelligence",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/vllm.yaml`,
    ga: false,
  },
  {
    name: "fns",
    title: "Functions",
    type: "Serverless",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/fns.yaml`,
    aliases: ["functions"],
    ga: true,
  },
  {
    name: "neo4j",
    title: "Neo4j",
    type: "Database",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/neo4j.yaml`,
    ga: true,
  },
  {
    name: "proxy",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/proxy.yaml`,
    title: "Proxy",
    type: "Web Server",
    ga: false,
  },
  {
    name: "mssqlserver",
    title: "MS SQL Server",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/mssqlserver.yaml`,
    ga: true,
    type: "Database",
  },
  {
    name: "mongodb",
    title: "MongoDB",
    type: "Database",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/mongodb.yaml`,
    ga: true,
  },
  {
    name: "redis",
    title: "Redis",
    type: "Cache",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/redis.yaml`,
    ga: true,
  },
  {
    name: "hop",
    title: "Hop",
    type: "Data Integration",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/hop.yaml`,
    ga: true,
  },
  {
    name: "mysql",
    title: "MySQL",
    type: "Database",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/mysql.yaml`,
    ga: true,
  },
  {
    name: "minio",
    title: "Minio",
    type: "Storage",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/minio.yaml`,
    ga: false,
  },
  {
    name: "superset",
    title: "Superset",
    type: "Data Visualization",
    url: `${POLYSEAM_TEMPLATE_DIRECTORY_URL}/superset.yaml`,
    ga: false,
  },
] as const;
