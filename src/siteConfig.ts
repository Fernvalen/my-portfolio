export interface MaintenanceConfig {
  siteUnderConstruction: boolean;
  pagesUnderConstruction: {
    home: boolean;
    about: boolean;
    projects: boolean;
    blog: boolean;
    contact: boolean;
  };
  message: string;
}

export const maintenanceConfig = {
  // Set to true to lock down the entire site
  siteUnderConstruction: false,

  // Enable/disable maintenance mode for specific pages
  pagesUnderConstruction: {
    home: false,
    about: true,
    projects: true,
    blog: true,
    contact: false,
  },

  // Custom messaging
  message: "🚧 Under Construction: We're polishing this section. Check back soon!",
};