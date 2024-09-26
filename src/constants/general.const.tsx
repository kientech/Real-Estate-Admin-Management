import {
  IconAgent,
  IconDashboard,
  IconMessage,
  IconProfile,
  IconProperty,
  IconReview,
} from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";

export const sideBarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconProperty />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconAgent />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconReview />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "My Profile",
    icon: <IconProfile />,
    path: "/my-profile",
  },
];
