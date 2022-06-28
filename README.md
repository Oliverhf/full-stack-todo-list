# TodoList

## Main goal of this project

Build a full stack application using React, GraphQL, Phoenix and PostgreSQL.

This project is using:

* Webpack -> Babel with a plugin for TypeScript
* NOT using any CSS framework, such as Bootstrap or Tailwind CSS. Stylesheets by hand, using Css, to keep it simple.

Front-end

### Where our front-end lives

<br>

> $ cd assets 

<br>

Package Installs

> yarn add react react-dom

> yarn add -D @babel/preset-react @babel/preset-typescript typescript

> yarn add -D @types/react @types/react-dom

> **NOTE** I had to *MIGRATE* from apollo-boost and @apollo/react-hooks to @apollo/client 3.0

> yarn add -D @apollo/client graphql

Back-end

(Hex packages)

>    {:absinthe, "~> 1.7"},

>    {:absinthe_plug, "~> 1.5.8"}

<br>

This will fetch the libraries

> $mix deps.get 




____
To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
