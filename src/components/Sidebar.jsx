import React from "react";
import { motion } from "framer-motion";
import ProfileHeader from "./ProfileHeader";
import NavigationItem from "./NavigationItem";
import SocialLinks from "./SocialLinks";
import {
  User,
  MapPin,
  Pencil,
  Bookmark,
  Folder,
  Target,
  ComponentIcon,
  BlocksIcon,
  StarIcon,
} from "lucide-react";

const Sidebar = ({ onItemClick, shouldAnimate }) => {
  const navItems = [
    { icon: User, label: "Who Am I", path: "/" },
    { icon: MapPin, label: "Roadmap", path: "/journey" },
    // { icon: Pencil, label: "Mindspace", path: "/writes" },
    // { icon: Bookmark, label: "Vaults", path: "/bookmarks" },
    { icon: Folder, label: "Projects", path: "/projects" },
    // { icon: Target, label: "2025 Goals", path: "/goals" },
    // { icon: ComponentIcon, label: "Components", path: "/components" },
    // { icon: BlocksIcon, label: "Blog", path: "/blog" },
    { icon: StarIcon, label: "stack", path: "/stacks" },
  ];

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  // Animation variants for mobile only
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.6 },
    },
  };

  return (
    <div className="w-72 lg:h-full md:h-fit sm:h-fit flex flex-col gap-4 py-5 bg-transparent">
      {/* Profile Header - Animated only on mobile */}
      {shouldAnimate ? (
        <motion.div
          variants={profileVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileHeader />
        </motion.div>
      ) : (
        <ProfileHeader />
      )}

      <nav className="flex-1 p-2 overflow-hidden  rounded-2xl border shadow-sm bg-white">
        <div className="h-full overflow-y-auto">
          {/* Navigation Items - Animated only on mobile */}
          {shouldAnimate ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <NavigationItem
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    iconSize="w-4 h-4"
                    onClick={handleItemClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div>
              {navItems.map((item) => (
                <NavigationItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  iconSize="w-4 h-4"
                  onClick={handleItemClick}
                />
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Social Links - Animated only on mobile */}
      {shouldAnimate ? (
        <motion.div
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          <SocialLinks />
        </motion.div>
      ) : (
        <SocialLinks />
      )}
    </div>
  );
};

export default Sidebar;
