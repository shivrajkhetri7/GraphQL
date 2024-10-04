Sure! Here’s the complete API documentation grouped together for easy copying. You can copy all of this at once and paste it into your `API_DOCUMENTATION.md` file.

---

# API Documentation

This section provides detailed information about the GraphQL API endpoints available in this project.

## 1. Get User by ID

- **Endpoint**: `/`
- **Method**: POST
- **Query**:

  ```graphql
  query {
      getUser(id: "USER_ID") {
          id
          name
          email
      }
  }
  ```

- **Request Parameters**:
  - `id` (String): The ID of the user to retrieve.

- **Response**:
  - **Success**:

    ```json
    {
        "data": {
            "getUser": {
                "id": "USER_ID",
                "name": "User Name",
                "email": "user@example.com"
            }
        }
    }
    ```

  - **Error**:

    ```json
    {
        "errors": [
            {
                "message": "Error retrieving user"
            }
        ]
    }
    ```

---

## 2. Get All Users

- **Endpoint**: `/`
- **Method**: POST
- **Query**:

  ```graphql
  query {
      getUsers {
          id
          name
          email
      }
  }
  ```

- **Response**:
  - **Success**:

    ```json
    {
        "data": {
            "getUsers": [
                {
                    "id": "USER_ID_1",
                    "name": "User One",
                    "email": "userone@example.com"
                },
                {
                    "id": "USER_ID_2",
                    "name": "User Two",
                    "email": "usertwo@example.com"
                }
            ]
        }
    }
    ```

  - **Error**:

    ```json
    {
        "errors": [
            {
                "message": "Error retrieving users"
            }
        ]
    }
    ```

---

## 3. Create User

- **Endpoint**: `/`
- **Method**: POST
- **Mutation**:

  ```graphql
  mutation {
      createUser(name: "John Doe", email: "john@example.com", password: "password123") {
          id
          name
          email
      }
  }
  ```

- **Request Parameters**:
  - `name` (String): The name of the user.
  - `email` (String): The email of the user.
  - `password` (String): The password of the user.

- **Response**:
  - **Success**:

    ```json
    {
        "data": {
            "createUser": {
                "id": "USER_ID",
                "name": "John Doe",
                "email": "john@example.com"
            }
        }
    }
    ```

  - **Error**:

    ```json
    {
        "errors": [
            {
                "message": "Error creating user"
            }
        ]
    }
    ```

---

## 4. Update User

- **Endpoint**: `/`
- **Method**: POST
- **Mutation**:

  ```graphql
  mutation {
      updateUser(id: "USER_ID", name: "Jane Doe", email: "jane@example.com", password: "newpassword123") {
          id
          name
          email
      }
  }
  ```

- **Request Parameters**:
  - `id` (String): The ID of the user to update.
  - `name` (String, optional): The new name of the user.
  - `email` (String, optional): The new email of the user.
  - `password` (String, optional): The new password of the user.

- **Response**:
  - **Success**:

    ```json
    {
        "data": {
            "updateUser": {
                "id": "USER_ID",
                "name": "Jane Doe",
                "email": "jane@example.com"
            }
        }
    }
    ```

  - **Error**:

    ```json
    {
        "errors": [
            {
                "message": "Error updating user"
            }
        ]
    }
    ```

---

## 5. Delete User

- **Endpoint**: `/`
- **Method**: POST
- **Mutation**:

  ```graphql
  mutation {
      deleteUser(id: "USER_ID") {
          id
          name
          email
      }
  }
  ```

- **Request Parameters**:
  - `id` (String): The ID of the user to delete.

- **Response**:
  - **Success**:

    ```json
    {
        "data": {
            "deleteUser": {
                "id": "USER_ID",
                "name": "User Name",
                "email": "user@example.com"
            }
        }
    }
    ```

  - **Error**:

    ```json
    {
        "errors": [
            {
                "message": "Error deleting user"
            }
        ]
    }
    ```

---

Feel free to copy and paste this entire section into your `API_DOCUMENTATION.md` file! Let me know if you need any more adjustments.