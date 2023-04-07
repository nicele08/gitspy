# GitSpy

GitSpy is a web application that allows users to view their Github information, including the organizations they belong to, the repositories they have access to, and their contributions. The application is built using React.js, Tailwindcss, and the Github API.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

GitSpy provides the following features:

- Login page that allows users to login with their Github credentials only.
- List view of all organizations the user belongs to (paginated).
- List view of all repositories the user has access to in a selected organization (paginated).
- Display information on a repository, including collaborators, only active branches, open pull requests, and closed pull requests.
- Report on the user's contributions.
- Private routing that protects other pages except the login page, redirecting the user to the login page if they are not authenticated.
- Responsive design.

## Technologies

GitSpy is built using the following technologies:

- [React.js](https://reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Github API](https://docs.github.com/en/rest)

## Installation

To install GitSpy, follow these steps:

1. Clone the repository: `git clone https://github.com/nicele08/gitspy.git`
2. Install the dependencies: `yarn install`

## Usage

To run GitSpy, follow these steps:

1. Set up a personal access token on Github by following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
2. Create a `.env.local` file in the root directory of the project.
3. Create a `.env.local` file by copying and renaming the .env.example file: `cp .env.example .env.local`
3. Update the values in the `.env.local` file, replacing `<your-access-token>` with your personal access token: `VITE_REACT_APP_GITHUB_API_TOKEN=<your-access-token>`
4. Run the application: `yarn start`
5. Open [http://localhost:3000](http://localhost:3000) in a web browser.

## API Documentation

The Github API is used to retrieve information about the user's organizations, repositories, and contributions. For more information on the Github API, see the [official documentation](https://docs.github.com/en/rest).

## Contributing

Contributions to GitSpy are welcome! To contribute, follow these steps:

1. Fork the repository: `https://github.com/nicele08/gitspy.git`
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make changes and commit them: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin my-feature-branch`
5. Create a pull request to the develop branch of the original repository.

## License

GitSpy is licensed under the [MIT License](https://opensource.org/licenses/MIT).
