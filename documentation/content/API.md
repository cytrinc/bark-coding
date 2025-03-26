# API
BAPI (short for Bark API), made by dumorando, using Node.js.

The API is hosted at [github.com/dumorando/bapiv2](https://github.com/dumorando/bapiv2)

BAPI is at its 2nd version.

# Fetches

## /api/v2/users

Returns the JSON of all the users on Bark.

```json

{
    "count": 1000,
    users: [{
        "username": "johndoe",
        "bio": "Lorem ipsum dolor sit amit",
        "profilepicture": "data:image/png;base64..."
    },
    {
        "username": "janedoe",
        "bio": "I started painting as a hobby when I was little",
        "profilepicture": "data:image/png;base64..."
    },
    ...
    ]
}
```

## /api/v2/fetchUser?username=USERNAME

Fetches a Bark user and returns the following JSON data.

```json

{
    "username": "johndoe",
    "bio": "lorem lpsum",
    "profilepicture": "data:image/png;base64..."
}
```
## /api/v2/admins

Returns the JSON of the admins of Bark.

```json
[
    "johndoe",
    "janedoe",
    "michael",
    "sans",
    ...
]
```
