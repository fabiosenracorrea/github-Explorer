# Github Explorer

A single React SPA that lets you save your favorite repositories and check it's status (like stars, forks and issues) very quickly, while consuming GitHub's API and handling errors!

Designed to further develop my knowledge on React, Style Components and API consuming!

Check it out:

![application overview](./project_overview.gif)

## Great features

1. Routing with route Params

```jsx
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);
```

2. State defining with function logic and localStorage extration

```tsx
  const [repositories, setRepositories] = useState<ApiResponse[]>(() => {
    const savedRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (savedRepos) {
      return JSON.parse(savedRepos);
    }

    return [];
  });
```

3. Input curation to prevent bad API requests

```jsx
    if (!newRepo || !newRepo.match(/\//)) {
      setInputError('Digite no formato autor/nome do repositório.');
      return;
    }
```

4. Dynamic routing

```jsx
<Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
```

5. StyledComponents conditional formatting + prop Passing logic

```jsx
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}
```
```jsx
<Form hasError={!!inputError} onSubmit={handleAddRepository}>
```

6. API typing definition only for data that's going to be used. GitHub's API return dozens of information. Should you define each and every property of it's response? No! Just what you are going to use!

```tsx
interface ApiResponse {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
```