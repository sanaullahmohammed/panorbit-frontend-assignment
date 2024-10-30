# Profile Hub UI

#### Description

A pixel-perfect frontend application showcasing user profiles with seamless navigation between profile details, posts, gallery, and to-do screens. This project features a responsive landing page with a scrollable list of user accounts, intuitive profile management, and a built-in chat system for enhanced user interactions. Built for a clean and engaging user experience.

<!-- 
This was a Hiring Assignment from Panorbit company

Company : https://panorbit.in/

## API Endpoints

- USERS API Endpoint : https://panorbit.in/api/users.json

## Design

- Design URL : [https://xd.adobe.com/view/68404abc-8176-4529-aa55-fbea81ff4a60-3d13/?fullscreen](https://xd.adobe.com/view/68404abc-8176-4529-aa55-fbea81ff4a60-3d13/?fullscreen)

-->

## Todos :

- [x] Create a working prototype using given API
- [ ] Create a mock express server for API
- [ ] Clean Up the code


## Instructions to Follow

Application must be launched via URL which will display a landing page

## Landing Page

1. Landing page should consist a set of users account list in a card which is scrollable on exceeding the length of the list
2. On Selecting an account, user must be able to go to profile home page

![Landing Page](https://github.com/user-attachments/assets/91c26a5c-fff5-4e8a-b484-fe5e8db7e13d)


## Home Page / Profile Details Screen

Profile home page must consist of following elements :
1. Profile Details Screen
2. Posts Details Screen
3. Gallery Screen
4. ToDo Screen

By default user home page should be "Profile Page" which consist of details of the user as shown in the design.
You will get these details in the USERS API endpoint.

![Profile page](https://github.com/user-attachments/assets/c59bdb56-db2a-4701-8ab3-c3eeeca76275)

## Change / Add Profile

Following details will be displayed when user click on profile account in right top corner of the page (see design):
1. Profile Picture of logged in user
2. Logged-in member full name and username
3. List of other users account [along with profile picture] and user name
4. Clicking on SignOut button must redirect to Landing Page

![User Profile Page](https://github.com/user-attachments/assets/473c9b49-e869-4148-a895-6ae8b2bf770b)

## Chat 

Chat box as shown in the design

![Chats Page](https://github.com/user-attachments/assets/ec0b88f0-215b-4bba-afbc-a9faa55dd83e)

## Chat Details Page

(attention to detail will show below)
1. Clicking on the chat opens a new box next to it
2. Opens the messages
3. Click on x will close the Chat Details box
4. Click on minimize will minimize the Chat Details box

![Chats Details Page](https://github.com/user-attachments/assets/f297680a-a190-4a3e-b940-bf69f7eeae1f)

## Post Details Screen

Display a coming soon page

![Posts Page](https://github.com/user-attachments/assets/4c2eaf9c-862f-401c-8145-38eab503d2c6)

## Gallery Screen

Display a coming soon page

![Gallery Page](https://github.com/user-attachments/assets/4c2eaf9c-862f-401c-8145-38eab503d2c6)

## ToDo Screen

Display a coming soon page

![ToDo Page](https://github.com/user-attachments/assets/4c2eaf9c-862f-401c-8145-38eab503d2c6)

---

## Install Dependencies

```shell
npm install
```

## Running the App

```shell
npm start
```
