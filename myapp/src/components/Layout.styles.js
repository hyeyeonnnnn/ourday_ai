export const layoutStyles = {
    // Auth Page
    authContainer: "w-full bg-white",

    // Main Layout Container
    container: "flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-secondary-cream via-white to-secondary-peach/30 transition-colors duration-500",

    // Mobile Header
    mobileHeader: "md:hidden p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50",
    mobileLogoLink: "flex items-center gap-2",
    mobileLogoIcon: "w-8 h-8 rounded-lg bg-gradient-to-br from-primary-coral to-accent-rose flex items-center justify-center text-white font-bold",
    mobileLogoText: "font-bold text-lg text-gray-800",
    mobileProfileLink: "p-2 rounded-lg bg-gray-50 text-gray-600",

    // Desktop Sidebar
    sidebar: "hidden md:flex w-[280px] bg-white/80 backdrop-blur-xl border-r border-white/50 fixed h-screen left-0 top-0 shadow-xl shadow-gray-100/50 flex-col z-40 transition-all duration-300",

    // Logo Area
    logoArea: "p-8 pb-4",
    logoLink: "group block",
    logoContainer: "flex items-center gap-3 mb-1",
    logoIcon: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary-coral to-accent-rose flex items-center justify-center shadow-lg shadow-primary-coral/30 group-hover:scale-110 transition-transform duration-300",
    logoTitle: "text-2xl font-bold bg-gradient-to-r from-primary-coral to-accent-rose bg-clip-text text-transparent tracking-tight",
    logoSlogan: "text-[0.65rem] font-bold text-gray-400 tracking-[0.2em] uppercase -mt-1 ml-0.5",

    // Navigation
    navContainer: "flex-1 px-4 py-6 space-y-2 overflow-y-auto",
    navItemBase: "flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 relative group",
    navItemActive: "bg-gradient-to-r from-primary-coral to-accent-rose text-white shadow-lg shadow-primary-coral/25 translate-x-2",
    navItemInactive: "text-gray-500 hover:bg-secondary-cream hover:text-primary-coral",

    navIconBase: "text-xl transition-transform duration-300",
    navIconActive: "scale-110",
    navIconInactive: "group-hover:scale-110",
    navLabel: "font-medium",
    navActiveDot: "absolute right-4 w-1.5 h-1.5 rounded-full bg-white/50",

    // Profile Section
    profileLink: "p-4 m-4 rounded-2xl bg-secondary-cream/50 border border-secondary-cream flex items-center gap-3 hover:bg-secondary-cream transition-colors cursor-pointer group",
    profileAvatarContainer: "w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-lavender p-[2px] shadow-md group-hover:scale-105 transition-transform",
    profileAvatarInner: "w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden",
    profileAvatarEmoji: "text-xl",
    profileInfoContainer: "flex-1 min-w-0",
    profileName: "font-bold text-sm text-gray-800 truncate",
    profileRole: "text-xs text-gray-400 truncate font-medium",
    profileSettingsIcon: "text-gray-300 text-xs",

    // Main Content
    main: "flex-1 min-h-screen transition-all duration-500",
    contentWrapper: "w-full max-w-[1600px] mx-auto",
};
