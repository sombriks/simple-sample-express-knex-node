# simple sample node knex 

hello world with migrations

```bash
npm install
npm run dev
```

## migrations mini-how-to

- New migration:

```bash
npx knex migrate:make another_migration
```

- Running all up

```bash
npx knex migrate:latest
```

- Running all down

```bash
npx knex migrate:rollback
```

See `knexfile.js` for database details
