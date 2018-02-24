# React Apollo Decorators

Better decorators for Apollo and React.

[![npm version](https://badge.fury.io/js/react-apollo-decorators.svg)](https://badge.fury.io/js/react-apollo-decorators)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

3 decorators that work on top of Apollo default decorator and make you code in a more *declarative* way.

### ```@withGraphQL(query, options)```

Use this decorator to make GraphQL ```query```.

Differences with apollo's ```graphql``` decorator:

- Props will be directly passed to query variables (filtering which are not present in the query).
- Instead of getting the result of the query in the ```data``` prop of the component, you get each query variable as a prop.
- The component will not be rendered until the query is loaded, instead it will show a Loading screen.

#### Usage

```js
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
```

- **query**: GraphQL document containing the query.
- **options**:
  - **loading**: Loading component. Set to null to render the component when the query hasn't finish loading.
  - **props**: if given will override default Props behavior.
  - Other options of apollo's ```graphql``` decorator.

### ```@withMutation(mutation, options)```

Use this decorator to make GraphQL ```mutation```.

Differences with apollo's ```graphql``` decorator:

- Instead of getting the mutation in the ```mutate``` prop, you get it as the name you gave it.
- The first argument of the ```mutate``` function are the variables, the seconds are the options.
- The result of the mutation is return as directly in the function, not inside the data prop.

#### Usage

```js
import withMutation from 'react-apollo-decorators/lib/withMutation'
```

- **mutation**: GraphQL document containing the mutation.
- **options**: Options of apollo's ```graphql``` decorator.

### ```@dynamicQuery(getQuery, options)```

Use this decorator to make queries that change with props.

#### Usage

```js
import dynamicQuery from 'react-apollo-decorators/lib/dynamicQuery'
```

- **getQuery**: A function that returns a GraphQL query in string format (not parsed).
- **options**: Options of apollo's ```graphql``` decorator.
