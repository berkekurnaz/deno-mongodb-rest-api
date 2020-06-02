# Simple Rest Api with Deno and MongoDB
This repository contains simple rest api with Deno and MongoDB.

## How To Run ?

```bash
    deno run --allow-net --allow-read --allow-write --unstable --allow-plugin --allow-env server.ts
```

## Database Schema
[![Image01](https://raw.githubusercontent.com/berkekurnaz/deno-mongodb-rest-api/master/dbschema.png)]()

## Routes

Messages Routes
```

Get All Messages : GET /messages
Single Message   : GET /messages/:id
Add Message      : POST /messages
Update Message   : PUT /messages/:id
Delete Message   : DELETE /messages/:id

```

## Contact
> contact@berkekurnaz.com