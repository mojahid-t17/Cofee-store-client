# ☕ Coffee Store Management System  

A **responsive web application** for managing a coffee store, built with **React.js, Tailwind CSS, DaisyUI**, and **Node.js with MongoDB** as the backend. This system includes **user authentication, dynamic data rendering, and form handling**.  

## 🚀 Features  

### 🌟 Home Page Layout  
- Includes **Header, Navbar**, and a **Coffee Card** display section.  
- A **"Copy" button** is available in the Coffee Card section.  
- **Coffee information** is stored in a **MongoDB database**.  
- Logged-in users can **edit, delete, and view** coffee details.  
- If a user is **not logged in**, they are **redirected to the login page**.  
- The **user data** is also stored in **MongoDB**, and a logged-in user can **view all users** by clicking the "Users" button.  

### 🔐 Authentication  
- Uses **Firebase Authentication** for **sign-up and sign-in** with **email and password**.  

### 🔄 Dynamic Login/Logout Button  
- If a user is **logged in**, a **Logout button** is displayed.  
- If a user is **not logged in**, a **Login button** appears in the Navbar.  

---

## 🛠 Technologies Used  
- **Frontend:** React.js, Tailwind CSS, DaisyUI  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** Firebase  

---

Feel free to contribute or suggest improvements! 🚀  


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
