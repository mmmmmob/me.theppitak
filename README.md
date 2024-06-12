# theppitak.me

![Theppitak M_](https://github.com/mmmmmob/me.theppitak/assets/141404845/29d12b14-2540-4953-9c58-075005d9442d)

theppitak.me , my portfoilio site built with React, Bun, and Vite. Design with cleanliness and simplicity in mind.

## Table of Contents

- [theppitak.me](#theppitakme)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Responsive design
- Dark mode support
- Projects showcase

## Demo

Check out the live demo [here](https://theppitak.me).

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following tools installed:

- [Bun](https://bun.sh/) (v1.1.x or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mmmmmob/me.theppitak.git
   cd me.theppitak
   ```

2. Install dependencies using Bun:

   ```sh
   bun install
   ```

### Running the Project

Start the development server:

```sh
bun run dev
```

Open your browser and visit `http://localhost:5173` or the address as shown in your terminal to see your portfolio.

### Spotify Now Playing Bar

Refer to the `.env.example` file to learn how to obtain your credential tokens from the Spotify Developer website. Use these tokens in production by creating a `.env.local` file in your folder. Remember to set the actual environment variables on your deployment platform.

You can opt-out of this feature by removing the `<NowPlaying/>` component from `App.jsx`.

## Technologies Used

- **Frontend**: React, Tailwind CSS, daisyUI and react-icons
- **Bundler**: Vite
- **Package Manager**: Bun

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature requests, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the Creative Commons CC-BY-SA-4.0 license. See the [LICENSE](LICENSE) file for details.
