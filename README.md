# 🌍 Our Club Website

[![Discord](https://img.shields.io/discord/939701223144185867?logo=discord)](https://discord.gg/z5P9kccwRh) ![CodeQL](https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite/workflows/CodeQL/badge.svg) [![Vercel](https://img.shields.io/github/deployments/Skyline-College-Computer-Science-Club/project.ClubWebsite/production?&logo=vercel&label=Vercel%20Deployment)](https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite/deployments/Production)

An informational website created by us, about us, the Computer Science Club @ Skyline College.

### 🔗 Come and visit us live @ [skycs.club](https://skycs.club) & [skycsc.vercel.app](https://skycsc.vercel.app)

Will serve stuff like showcases for our projects, social media links & connections, Discord + GitHub integrations, a photo album?, a _blog_?, resources and intern opportunities, and whatever else our club would want to show to the world.

🙋‍♂️ We encourage all club members to contribute in any way to our website domain!

### 📊 Repository Contribution Activity

![Alt](https://repobeats.axiom.co/api/embed/fe1b3c980d478532406427b995d24931828a681c.svg 'Repobeats analytics image')

## 🔰 Quick Setup / Getting Started

> Want to help design and add stuff to our project? Setup is easy and merely takes 5 minutes!

1. Clone this repository locally to your computer using [Git](https://git-scm.com/downloads).

- You can do so by clicking the green `<> Code` button above, copying the URL, then using the `git clone <URL>` command in a terminal
- Be sure to open your terminal to somewhere easy to access, like your Desktop or Documents folder.

2. Open the cloned folder in an IDE of your choice. Then via your terminal, cd into the directory of said folder.

- If using an external, standalone command-line shell, use the `cd` command like so:

`cd Documents\project.ClubWebsite-live"`

- **Alternatively, if you use VSCode**: after opening the folder, you can open a built-in Terminal (via top-left bar); it will automatically navigate itself to the currently open directory. (see below)

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/open_folder_and_terminal.gif" width=600></img>

3. For this project, the only user-installed dependancy is the **[📘Node.js](https://nodejs.org/en) runtime.**

4. After installing Node.js, run the following command in the directory of the downloaded project to install our project's required dependencies, which includes the Next.js framework:

```
npm install
```

- We recommend installing the [yarn](https://classic.yarnpkg.com/en/docs/getting-started) package installer as well via `npm install --global yarn`!

- After installation, you should now see a new folder `node_modules` with said dependancies.

5. Now that we have everything we need (libraries), you can now test-run and host the website on your local computer using:

```bash
npm run dev

# or if you installed yarn

yarn dev
```

Steps 4 & 5 can be seen here:

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/npm_install_and_run.gif" width=740></img>

- With it running, open http://localhost:3000 in any browser to see your locally hosted website. This URL will also be displayed to you in the terminal after running Step 5).

- Congrats! You can experiment now by editing the home page's components; modifying the files under `src/components`. The page auto-updates every time you save the file.

💡 After this initial setup, you only need Step 5) when editing the project in the future.

## 🗃️ Important Resources and Documentation

- Our project uses [**Node.js**](https://nodejs.org/en), the JavaScript runtime engine that powers the logic of our website.

- Our project uses [**React.js**](https://react.dev), our website's core HTML/TypeScript-orientated structuring framework.

- Our project uses [**Tailwind CSS**](https://tailwindcss.com), our website's core CSS styling library.

- Our project uses [**Framer Motion**](https://www.framer.com/motion/), a comprehensive, production-ready animation library for React.

- Our project uses [**Vercel**](https://vercel.com/), a cloud service that provides the infrastructure to integrate, build, scale, and deploy our website.

🧠 To specifically **learn more** about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## ⚙️ Important Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 🔺 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss](/.github/assets/powered-by-vercel.svg)](https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss)
