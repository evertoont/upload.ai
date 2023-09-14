<p align="center">
    <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">Upload.ai is an application that allows you to upload videos and, through AI, automatically create catchy titles and descriptions with good indexing.</p>

<p align="center">
  <a href="https://github.com/evertoont">
    <img alt="Made by Everton Reis" src="https://img.shields.io/badge/made%20by-Everton%20Reis-blue">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=blue">
</p>

<p align="center">
  <img src="https://github.com/evertoont/evertoont/assets/55769021/84da40ba-1fdc-4230-83ad-42d835d71f91" width="60%" />
</p>

---

## 🧪 Technologies

This project was developed using the following technologies:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Openai](https://openai.com/)
- [Shadcn.ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com//)

---

## 🚀 Getting Started and running the Project

```bash
# Clone the repository
$ git clone https://github.com/evertoont/upload.ai

```

### Web

```bash
# Enter the repository
$ cd web-upload-ai

# Install dependencies
$ npm i ou npm install

# Run the application
$ npm run dev
```

### Api

```bash
# Enter the repository
$ cd api-upload-ai

# Create a .env file and copy the contents from the .env.example file to it.
# Remember to add your API_KEY from openai

# Create a tmp folder, where audio files will be stored

# Install dependencies
$ npm i ou npm install

# Run the seed.ts file to populate the prompts
$ npx prisma db seed

# Run the application
$ npm run dev
```

---

## 📝 License

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=blue">

This project is licensed under the MIT License - see the [LICENSE](LICENSE) for more information.

---
<p align="center">Made with 💜 by  <a href="https://www.linkedin.com/in/evertoont/">Everton Reis</a></p>
