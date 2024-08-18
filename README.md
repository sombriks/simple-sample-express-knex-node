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

## Docker image

Build with:

```bash
docker build -t testing-docker-node .
```

Run with:

```bash
docker run --rm -it testing-docker-node
```

You might need to delete image:

```bash
docker rmi testing-docker-node
```

## deploy

Run fly login, fly launch and fly deploy.

Fly lauch will provision a Dockerfile and a github action.
after that you can deploy by commit, which is great.
