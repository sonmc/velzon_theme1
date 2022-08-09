import React from "react";
import { Redirect } from "react-router-dom";

// Project
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import CreateProject from "../pages/Projects/CreateProject";

// Support Tickets
import ListView from "../pages/SupportTickets/ListView";
import TicketsDetails from "../pages/SupportTickets/TicketsDetails";

// Base Ui
import UiAlerts from "../pages/BaseUi/UiAlerts/UiAlerts";
import UiBadges from "../pages/BaseUi/UiBadges/UiBadges";
import UiButtons from "../pages/BaseUi/UiButtons/UiButtons";
import UiColors from "../pages/BaseUi/UiColors/UiColors";
import UiCards from "../pages/BaseUi/UiCards/UiCards";
import UiCarousel from "../pages/BaseUi/UiCarousel/UiCarousel";
import UiDropdowns from "../pages/BaseUi/UiDropdowns/UiDropdowns";
import UiGrid from "../pages/BaseUi/UiGrid/UiGrid";
import UiImages from "../pages/BaseUi/UiImages/UiImages";
import UiTabs from "../pages/BaseUi/UiTabs/UiTabs";
import UiAccordions from "../pages/BaseUi/UiAccordion&Collapse/UiAccordion&Collapse";
import UiModals from "../pages/BaseUi/UiModals/UiModals";
import UiOffcanvas from "../pages/BaseUi/UiOffcanvas/UiOffcanvas";
import UiPlaceholders from "../pages/BaseUi/UiPlaceholders/UiPlaceholders";
import UiProgress from "../pages/BaseUi/UiProgress/UiProgress";
import UiNotifications from "../pages/BaseUi/UiNotifications/UiNotifications";
import UiMediaobject from "../pages/BaseUi/UiMediaobject/UiMediaobject";
import UiEmbedVideo from "../pages/BaseUi/UiEmbedVideo/UiEmbedVideo";
import UiTypography from "../pages/BaseUi/UiTypography/UiTypography";
import UiList from "../pages/BaseUi/UiLists/UiLists";
import UiGeneral from "../pages/BaseUi/UiGeneral/UiGeneral";
import UiRibbons from "../pages/BaseUi/UiRibbons/UiRibbons";
import UiUtilities from "../pages/BaseUi/UiUtilities/UiUtilities";

// Advance Ui
import UiNestableList from "../pages/AdvanceUi/UiNestableList/UiNestableList";
import UiScrollbar from "../pages/AdvanceUi/UiScrollbar/UiScrollbar";
import UiAnimation from "../pages/AdvanceUi/UiAnimation/UiAnimation";
import UiTour from "../pages/AdvanceUi/UiTour/UiTour";
import UiSwiperSlider from "../pages/AdvanceUi/UiSwiperSlider/UiSwiperSlider";
import UiRatings from "../pages/AdvanceUi/UiRatings/UiRatings";
import UiHighlight from "../pages/AdvanceUi/UiHighlight/UiHighlight";

//Tables
import BasicTables from "../pages/Tables/BasicTables/BasicTables";
import GridTables from "../pages/Tables/GridTables/GridTables";
import ListTables from "../pages/Tables/ListTables/ListTables";

//AuthenticationInner pages
import BasicSignIn from "../pages/AuthenticationInner/Login/BasicSignIn";
import CoverSignIn from "../pages/AuthenticationInner/Login/CoverSignIn";
import BasicSignUp from "../pages/AuthenticationInner/Register/BasicSignUp";
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from "../pages/AuthenticationInner/PasswordReset/BasicPasswReset";
//pages
import Starter from "../pages/Pages/Starter/Starter";
import SimplePage from "../pages/Pages/Profile/SimplePage/SimplePage";
import Settings from "../pages/Pages/Profile/Settings/Settings";
import Team from "../pages/Pages/Team/Team";
import Timeline from "../pages/Pages/Timeline/Timeline";
import Faqs from "../pages/Pages/Faqs/Faqs";
import Pricing from "../pages/Pages/Pricing/Pricing";
import Gallery from "../pages/Pages/Gallery/Gallery";
import Maintenance from "../pages/Pages/Maintenance/Maintenance";
import ComingSoon from "../pages/Pages/ComingSoon/ComingSoon";
import SiteMap from "../pages/Pages/SiteMap/SiteMap";
import SearchResults from "../pages/Pages/SearchResults/SearchResults";

import CoverPasswReset from "../pages/AuthenticationInner/PasswordReset/CoverPasswReset";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import CoverLockScreen from "../pages/AuthenticationInner/LockScreen/CoverLockScr";
import BasicLogout from "../pages/AuthenticationInner/Logout/BasicLogout";
import CoverLogout from "../pages/AuthenticationInner/Logout/CoverLogout";
import BasicSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg";
import CoverSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg";
import BasicTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify";
import CoverTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

const authProtectedRoutes = [
  //Projects
  { path: "/apps-projects-list", component: ProjectList },
  { path: "/apps-projects-overview", component: ProjectOverview },
  { path: "/apps-projects-create", component: CreateProject },

  //Supports Tickets
  { path: "/apps-tickets-list", component: ListView },
  { path: "/apps-tickets-details", component: TicketsDetails },

  // Base Ui
  { path: "/ui-alerts", component: UiAlerts },
  { path: "/ui-badges", component: UiBadges },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-colors", component: UiColors },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdowns },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-tabs", component: UiTabs },
  { path: "/ui-accordions", component: UiAccordions },
  { path: "/ui-modals", component: UiModals },
  { path: "/ui-offcanvas", component: UiOffcanvas },
  { path: "/ui-placeholders", component: UiPlaceholders },
  { path: "/ui-progress", component: UiProgress },
  { path: "/ui-notifications", component: UiNotifications },
  { path: "/ui-media", component: UiMediaobject },
  { path: "/ui-embed-video", component: UiEmbedVideo },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-lists", component: UiList },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-ribbons", component: UiRibbons },
  { path: "/ui-utilities", component: UiUtilities },

  // Advance Ui
  { path: "/advance-ui-nestable", component: UiNestableList },
  { path: "/advance-ui-scrollbar", component: UiScrollbar },
  { path: "/advance-ui-animation", component: UiAnimation },
  { path: "/advance-ui-tour", component: UiTour },
  { path: "/advance-ui-swiper", component: UiSwiperSlider },
  { path: "/advance-ui-ratings", component: UiRatings },
  { path: "/advance-ui-highlight", component: UiHighlight },

  //Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-gridjs", component: GridTables },
  { path: "/tables-listjs", component: ListTables },

  //Pages
  { path: "/pages-starter", component: Starter },
  { path: "/pages-profile", component: SimplePage },
  { path: "/pages-profile-settings", component: Settings },
  { path: "/pages-team", component: Team },
  { path: "/pages-timeline", component: Timeline },
  { path: "/pages-faqs", component: Faqs },
  { path: "/pages-gallery", component: Gallery },
  { path: "/pages-pricing", component: Pricing },
  { path: "/pages-sitemap", component: SiteMap },
  { path: "/pages-search-results", component: SearchResults },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard-analytics" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: BasicSignIn },
  { path: "/auth-signin-cover", component: CoverSignIn },
  { path: "/auth-signup-basic", component: BasicSignUp },
  { path: "/auth-signup-cover", component: CoverSignUp },
  { path: "/auth-pass-reset-basic", component: BasicPasswReset },
  { path: "/auth-pass-reset-cover", component: CoverPasswReset },
  { path: "/auth-lockscreen-basic", component: BasicLockScreen },
  { path: "/auth-lockscreen-cover", component: CoverLockScreen },
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: CoverLogout },
  { path: "/auth-success-msg-basic", component: BasicSuccessMsg },
  { path: "/auth-success-msg-cover", component: CoverSuccessMsg },
  { path: "/auth-twostep-basic", component: BasicTwosVerify },
  { path: "/auth-twostep-cover", component: CoverTwosVerify },
  { path: "/auth-404-basic", component: Basic404 },
  { path: "/auth-404-cover", component: Cover404 },
  { path: "/auth-404-alt", component: Alt404 },
  { path: "/auth-500", component: Error500 },
  { path: "/pages-maintenance", component: Maintenance },
  { path: "/pages-coming-soon", component: ComingSoon },
];

export { authProtectedRoutes, publicRoutes };
