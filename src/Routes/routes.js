import { AddProfile } from "../Pages/AddProfile";
import { AdminLogin } from "../Pages/AdminLogin";
import { AdminProfiles } from "../Pages/AdminProfiles";
import { BuyCredits } from "../Pages/BuyCredits";
import { Chats } from "../Pages/Chats";
import { Credits } from "../Pages/Credits";
import EditProfile from "../Pages/EditProfile";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { MyAccount } from "../Pages/MyAccount";
import { MyCollections } from "../Pages/MyCollections";
import { Profile } from "../Pages/Profile";
import { ResetPassword } from "../Pages/ResetPassword";
import { SignUp } from "../Pages/SignUp";

const authRoutes = [
  {
    path: "/admin/login",
    component: <AdminLogin />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/reset-password",
    component: <ResetPassword />,
  },
];
const adminRoutes = [
  {
    path: "/admin/profiles",
    component: <AdminProfiles />,
  },
  {
    path: "/admin/add-profile",
    component: <AddProfile />,
  },
  {
    path: "/edit-profile/:uid",
    component: <EditProfile />,
  },
];

const userRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/my-collections",
    component: <MyCollections />,
  },

  {
    path: "/profile/:botId",
    component: <Profile />,
  },

  {
    path: "/chats/:botId",
    component: <Chats />,
  },

  {
    path: "/buy-credits",
    component: <BuyCredits />,
  },

  {
    path: "/credits",
    component: <Credits />,
  },

  {
    path: "/my-account",
    component: <MyAccount />,
  },
];

export { adminRoutes, userRoutes, authRoutes };
