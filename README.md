# Simple Rest Api with Deno and MongoDB
This repository contains simple rest api with Deno and MongoDB.

## How To Run ?

```bash
    deno run --allow-net --allow-read --allow-write --unstable --allow-plugin --allow-env server.ts
```

## Database Schema
[![Image01](https://raw.githubusercontent.com/berkekurnaz/deno-mongodb-rest-api/master/dbschema.png)]()

## Routes

Articles Routes
```

Get All Articles     : GET /articles
Get Last 10 Articles : GET /articles/last/10
Single Article       : GET /articles/:id
Add Article          : POST /articles
Update Article       : PUT /articles/:id 
Delete Article       : DELETE /articles/:id

```

Authors Routes
```

Get All Authors : GET /authors
Single Author   : GET /authors/:id
Add Author      : POST /authors
Update Author   : PUT /authors/:id 
Delete Author   : DELETE /authors/:id

```

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