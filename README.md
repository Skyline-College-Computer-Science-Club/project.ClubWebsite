# 🌍 Club Website - Hosted on Vercel @ https://skylinecsc-git-technology-update-skylinecsclub.vercel.app.

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/site_preview2.gif" width=420></img>
<img src="https://media.discordapp.net/attachments/1147427497290506332/1155458898183061595/Image_9-24-23_at_4.00_AM.jpeg" width=420></img>

An informational website about us, Skyline College's Computer Science Club.

Will serve stuff like showcases for our projects, social media links & connections, Discord + GitHub integrations, a photo album?, a *blog*?, resources and intern opportunities, and whatever else our club would want to show to the world.

## 🔰 Quick Setup / Getting Started

1) First off, download a local copy of the project to your computer. 
* You can do so by clicking the green `<> Code` button above, then clicking on "Download ZIP".

2) Extract the contents of the .zip into a folder, and open a command-line shell and CD into the directory of said folder.
* If using an external, standalone command-line shell, use the `cd` command like so: `cd "Documents\My Projects\project.ClubWebsite-main"`
* **If you use VSCode**: after opening the folder, open a new VSCode Terminal; it will automatically navigate itself to the currently open directory. (see below)
  
<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/open_folder_and_terminal.gif" width=600></img>

3) For this project, you only need to download one installer/program: **[📘Node.js](https://nodejs.org/en)**

4) After installing Node.js, run the following command in the directory of the downloaded project to install our project's required dependencies, which includes React and the Next.js frameworks:
```
npm install
```
You should see a new folder `node_modules` with said dependancies.

5) Now that we have all our required libaries, you can now test-run and host the website on your local computer using:
```bash
npm run dev
# or
yarn dev
```

Steps 4 & 5 can be seen here:

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/npm_install_and_run.gif" width=740></img>

With it running, open http://localhost:3000 in any browser to see your locally hosted website.

You can start by editing the home page; modifying the file `pages/index.js`. The page auto-updates every time you save the file.

After this initial setup, you will only need to re-run Step 5) to continue editing the project in the future.

## ⚙️ Important Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 📚 Important Resources and Documentation

To **learn more** about Next.js, take a look at the following resources:

- [📘Node.js](https://nodejs.org/en) - this is the runtime platform Next.js and therefore our website runs on.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
