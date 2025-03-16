# ☕ Coffee Store Management System  

A responsive and dynamic web application for managing a coffee store, built with **React.js**, **Tailwind CSS**, **DaisyUI**, and **Node.js** with **MongoDB** as the backend. This system allows users to **add, view, edit, and delete** coffee details with authentication and database storage.  



## 🚀 Features  

### 🌟 Home Page Layout  
- **Header & Navbar**: Provides easy navigation.  
- **Coffee Card Section**:  
  - Displays coffee details (name, description, price, etc.).  
  - Each coffee card has a **"Copy"** button to copy the coffee details.  
  - Data is fetched dynamically from **MongoDB**.  
- **User Authentication**:  
  - Only logged-in users can view, update, and delete coffee details.  
  - Unauthenticated users are redirected to the **Login** page.  
- **User Management**:  
  - User data is stored in **MongoDB**.  
  - Logged-in users can see all registered users by clicking the **"Users"** button.  

### 🔐 Authentication  
- **Firebase Authentication**:  
  - Sign up and sign in using **email and password**.  
  - Ensures secure access to coffee management features.  

### 🔄 Dynamic Login/Logout Button  
- **Login/Logout State Handling**:  
  - If logged in, a **Logout** button is displayed.  
  - If not logged in, a **Login** button appears in the Navbar.  
  - Authentication state is maintained throughout the session.  

### 🚪 Redirect for Unauthenticated Users  
- Users must log in before accessing **coffee management features**.  
- Unauthenticated users are redirected to the **Login** page.  

## 🛠 Technologies Used  

### **Frontend:**  
- **React.js**: For UI and dynamic rendering.  
- **Tailwind CSS**: Utility-first CSS framework.  
- **DaisyUI**: Pre-built UI components for Tailwind CSS.  

### **Backend:**  
- **Node.js**: JavaScript runtime for backend logic.  
- **Express.js**: Framework for handling RESTful APIs.  
- **MongoDB**: NoSQL database for storing coffee and user data.  

### **Authentication:**  
- **Firebase Authentication**: Secure login system.  



## 📥 Installation Guide  

### **Prerequisites**  
- **Node.js** (v14+ recommended)  
- **npm** or **yarn**  
- **MongoDB** (local or MongoDB Atlas)  
- **Firebase Account**  



Feel free to contribute or suggest improvements! 🚀  


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
