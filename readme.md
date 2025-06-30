#MVNO Intigration Prototype

This is a prototype for MVNO integration, demonstrating how to handle MVNO responses and internal responses in a modular way.

# Providor Data

test data is located in `src/data/` and is copied to `dist/data/` during the build.

# Converter

jsonMapper is used to convert the MVNO response to an internal response.

# Types

The types for MVNO and internal responses are defined in `src/types/mvnoResponse.ts` and `src/types/internalResponse.ts` respectively.

# Goals:

- Provide a clear structure for handling MVNO responses.
- Ensure type safety with TypeScript.
- Normalize 3rd-party MVNO - REST API responses to a standardized internal format.

# Usage

To run the prototype, use the following commands:

```bash
npm install
npm run build
npm start
```
