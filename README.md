# @cndi/known-templates

This package contains metadata for CNDI Templates that are officially
recognized.

The metadata is used in the CLI, Configurator UI, and the project website.

Each Template contains the following metadata:

- `name`: The name of the Template.
- `title`: The title of the Template for display in UI
- `type`: A category to which the Template belongs, eg. `"Database"`
- `aliases`: An array of aliases for the Template, which can be used during
  project creation.
- `ga`: A boolean property which defines whether the Template is generally
  available and should be surfaced in UIs.
- `url`: The URL which points to the Template's YAML source file.
