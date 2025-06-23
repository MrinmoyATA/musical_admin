import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import CRMPage from "../pages/Dashboard/CRMPage.vue";
import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import LMSPage from "../pages/Dashboard/LMSPage.vue";
import HelpDeskPage from "../pages/Dashboard/HelpDeskPage.vue";
import AnalyticsPage from "../pages/Dashboard/AnalyticsPage.vue";
import CryptoPage from "../pages/Dashboard/CryptoPage.vue";
import SalesPage from "../pages/Dashboard/SalesPage.vue";
import HospitalPage from "../pages/Dashboard/HospitalPage.vue";
import HRMPage from "../pages/Dashboard/HRMPage.vue";
import SchoolPage from "../pages/Dashboard/SchoolPage.vue";
import CallCenterPage from "../pages/Dashboard/CallCenterPage.vue";
import MarketingPage from "../pages/Dashboard/MarketingPage.vue";
import NFTPage from "../pages/Dashboard/NFTPage.vue";
import SaaSPage from "../pages/Dashboard/SaaSPage.vue";
import RealEstatePage from "../pages/Dashboard/RealEstatePage.vue";
import ShipmentPage from "../pages/Dashboard/ShipmentPage.vue";
import FinancePage from "../pages/Dashboard/FinancePage.vue";
import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import OurTeamPage from "../pages/OurTeamPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ToDoListPage from "../pages/Apps/ToDoListPage.vue";
import CalendarPage from "../pages/Apps/CalendarPage.vue";
import ContactsPage from "../pages/Apps/ContactsPage.vue";
import ChatPage from "../pages/Apps/ChatPage.vue";
import InboxPage from "../pages/Apps/Email/InboxPage.vue";
import ComposePage from "../pages/Apps/Email/ComposePage.vue";
import ReadEmailPage from "../pages/Apps/Email/ReadEmailPage.vue";
import KanbanBoardPage from "../pages/Apps/KanbanBoardPage.vue";
import MyDrivePage from "../pages/Apps/FileManager/MyDrivePage.vue";
import AssetsPage from "../pages/Apps/FileManager/AssetsPage.vue";
import ProjectsPage from "../pages/Apps/FileManager/ProjectsPage.vue";
import PersonalPage from "../pages/Apps/FileManager/PersonalPage.vue";
import ApplicationsPage from "../pages/Apps/FileManager/ApplicationsPage.vue";
import DocumentsPage from "../pages/Apps/FileManager/DocumentsPage.vue";
import MediaPage from "../pages/Apps/FileManager/MediaPage.vue";
import RecantsPage from "../pages/Apps/FileManager/RecantsPage.vue";
import ImportantFilesPage from "../pages/Apps/FileManager/ImportantFilesPage.vue";
import ProductsListPage from "../pages/Ecommerce/ProductsListPage.vue";
import ProductDetailsPage from "../pages/Ecommerce/ProductDetailsPage.vue";
import CreateProductPage from "../pages/Ecommerce/CreateProductPage.vue";
import EditProductPage from "../pages/Ecommerce/EditProductPage.vue";
import CartPage from "../pages/Ecommerce/CartPage.vue";
import CheckoutPage from "../pages/Ecommerce/CheckoutPage.vue";
import OrdersPage from "../pages/Ecommerce/OrdersPage.vue";
import OrderDetailsPage from "../pages/Ecommerce/OrderDetailsPage.vue";
import CreateOrderPage from "../pages/Ecommerce/CreateOrderPage.vue";
import OrderTrackingPage from "../pages/Ecommerce/OrderTrackingPage.vue";
import CustomersPage from "../pages/Ecommerce/CustomersPage.vue";
import CustomerDetailsPage from "../pages/Ecommerce/CustomerDetailsPage.vue";
import CategoriesPage from "../pages/Ecommerce/CategoriesPage.vue";
import SellersPage from "../pages/Ecommerce/SellersPage.vue";
import SellerDetailsPage from "../pages/Ecommerce/SellerDetailsPage.vue";
import CreateSellerPage from "../pages/Ecommerce/CreateSellerPage.vue";
import ReviewsPage from "../pages/Ecommerce/ReviewsPage.vue";
import RefundsPage from "../pages/Ecommerce/RefundsPage.vue";
import CRMContactsPage from "../pages/CRM/CRMContactsPage.vue";
import CRMCustomersPage from "../pages/CRM/CRMCustomersPage.vue";
import LeadsPage from "../pages/CRM/LeadsPage.vue";
import DealsPage from "../pages/CRM/DealsPage.vue";
import ProjectOverviewPage from "../pages/ProjectManagement/ProjectOverviewPage.vue";
import ProjectsListPage from "../pages/ProjectManagement/ProjectsListPage.vue";
import CreateProjectPage from "../pages/ProjectManagement/CreateProjectPage.vue";
import ClientsPage from "../pages/ProjectManagement/ClientsPage.vue";
import TeamsPage from "../pages/ProjectManagement/TeamsPage.vue";
import KanbanBoardsPage from "../pages/ProjectManagement/KanbanBoardsPage.vue";
import UserPage from "../pages/ProjectManagement/UserPage.vue";
import CoursesListPage from "../pages/LMS/CoursesListPage.vue";
import CourseDetailsPage from "../pages/LMS/CourseDetailsPage.vue";
import LessonPreviewPage from "../pages/LMS/LessonPreviewPage.vue";
import CreateCoursePage from "../pages/LMS/CreateCoursePage.vue";
import EditCoursePage from "../pages/LMS/EditCoursePage.vue";
import InstructorsPage from "../pages/LMS/InstructorsPage.vue";
import TicketsPage from "../pages/HelpDesk/TicketsPage.vue";
import TicketDetailsPage from "../pages/HelpDesk/TicketDetailsPage.vue";
import AgentsPage from "../pages/HelpDesk/AgentsPage.vue";
import ReportsPage from "../pages/HelpDesk/ReportsPage.vue";
import MarketplacePage from "../pages/NFTMarketplace/MarketplacePage.vue";
import ExploreAllPage from "../pages/NFTMarketplace/ExploreAllPage.vue";
import LiveAuctionPage from "../pages/NFTMarketplace/LiveAuctionPage.vue";
import NFTDetailsPage from "../pages/NFTMarketplace/NFTDetailsPage.vue";
import WalletConnectPage from "../pages/NFTMarketplace/WalletConnectPage.vue";
import CreatorsPage from "../pages/NFTMarketplace/CreatorsPage.vue";
import CreatorDetailsPage from "../pages/NFTMarketplace/CreatorDetailsPage.vue";
import CreateNFTPage from "../pages/NFTMarketplace/CreateNFTPage.vue";
import PropertyListPage from "../pages/RealEstate/PropertyListPage.vue";
import PropertyDetailsPage from "../pages/RealEstate/PropertyDetailsPage.vue";
import AddPropertyPage from "../pages/RealEstate/AddPropertyPage.vue";
import RealEstateAgentsPage from "../pages/RealEstate/RealEstateAgentsPage.vue";
import AgentDetailsPage from "../pages/RealEstate/AgentDetailsPage.vue";
import AddAgentPage from "../pages/RealEstate/AddAgentPage.vue";
import RealEstateCustomersPage from "../pages/RealEstate/RealEstateCustomersPage.vue";
import WalletPage from "../pages/Finance/WalletPage.vue";
import TransactionPage from "../pages/Finance/TransactionPage.vue";
import EventsPage from "../pages/Events/EventsPage.vue";
import EventsListPage from "../pages/Events/EventsListPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import CreateAnEventPage from "../pages/Events/CreateAnEventPage.vue";
import EditAnEventPage from "../pages/Events/EditAnEventPage.vue";
import ProfilePage from "../pages/Social/ProfilePage.vue";
import AboutPage from "../pages/Social/AboutPage.vue";
import ActivityPage from "../pages/Social/ActivityPage.vue";
import SettingsPage from "../pages/Social/SettingsPage.vue";
import InvoicesPage from "../pages/Invoices/InvoicesPage.vue";
import InvoiceDetailsPage from "../pages/Invoices/InvoiceDetailsPage.vue";
import CreateInvoicePage from "../pages/Invoices/CreateInvoicePage.vue";
import EditInvoicePage from "../pages/Invoices/EditInvoicePage.vue";
import TeamMembersPage from "../pages/Users/TeamMembersPage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import UserProfilePage from "../pages/Profile/UserProfilePage.vue";
import UserTeamPage from "../pages/Profile/UserTeamPage.vue";
import UserProjectsPage from "../pages/Profile/UserProjectsPage.vue";
import StarterPage from "../pages/StarterPage.vue";
import RemixIconPage from "../pages/Icons/RemixIconPage.vue";
import MaterialSymbolsPage from "../pages/Icons/MaterialSymbolsPage.vue";
import AlertsPage from "../pages/UIElements/AlertsPage.vue";
import AvatarPage from "../pages/UIElements/AvatarPage.vue";
import AccordionsPage from "../pages/UIElements/AccordionsPage.vue";
import BadgesPage from "../pages/UIElements/BadgesPage.vue";
import ButtonsPage from "../pages/UIElements/ButtonsPage.vue";
import BreadcrumbPage from "../pages/UIElements/BreadcrumbPage.vue";
import ClipboardPage from "../pages/UIElements/ClipboardPage.vue";
import DropdownsPage from "../pages/UIElements/DropdownsPage.vue";
import ImagesPage from "../pages/UIElements/ImagesPage.vue";
import ModalsPage from "../pages/UIElements/ModalsPage.vue";
import PaginationsPage from "../pages/UIElements/PaginationsPage.vue";
import PopoverPage from "../pages/UIElements/PopoverPage.vue";
import ProgressPage from "../pages/UIElements/ProgressPage.vue";
import TooltipsPage from "../pages/UIElements/TooltipsPage.vue";
import TabsPage from "../pages/UIElements/TabsPage.vue";
import TypographyPage from "../pages/UIElements/TypographyPage.vue";
import VideosPage from "../pages/UIElements/VideosPage.vue";
import TablesPage from "../pages/TablesPage.vue";
import InputSelectPage from "../pages/Forms/InputSelectPage.vue";
import CheckboxesRadiosPage from "../pages/Forms/CheckboxesRadiosPage.vue";
import RichTextEditorPage from "../pages/Forms/RichTextEditorPage.vue";
import FileUploaderPage from "../pages/Forms/FileUploaderPage.vue";
import LineChartsPage from "../pages/Charts/LineChartsPage.vue";
import AreaChartsPage from "../pages/Charts/AreaChartsPage.vue";
import ColumnChartsPage from "../pages/Charts/ColumnChartsPage.vue";
import MixedChartsPage from "../pages/Charts/MixedChartsPage.vue";
import RadialBarChartsPage from "../pages/Charts/RadialBarChartsPage.vue";
import RadarChartsPage from "../pages/Charts/RadarChartsPage.vue";
import PieChartsPage from "../pages/Charts/PieChartsPage.vue";
import PolarChartsPage from "../pages/Charts/PolarChartsPage.vue";
import MoreChartsPage from "../pages/Charts/MoreChartsPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import SignUpPage from "../pages/Authentication/SignUpPage.vue";
import ForgotPasswordPage from "../pages/Authentication/ForgotPasswordPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ConfirmMailPage from "../pages/Authentication/ConfirmMailPage.vue";
import LockScreenPage from "../pages/Authentication/LockScreenPage.vue";
import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import PricingPage from "../pages/ExtraPages/PricingPage.vue";
import TimelinePage from "../pages/ExtraPages/TimelinePage.vue";
import FAQsPage from "../pages/ExtraPages/FAQsPage.vue";
import GalleryPage from "../pages/ExtraPages/GalleryPage.vue";
import TestimonialsPage from "../pages/ExtraPages/TestimonialsPage.vue";
import SearchPage from "../pages/ExtraPages/SearchPage.vue";
import ComingSoonPage from "../pages/ExtraPages/ComingSoonPage.vue";
import BlankPage from "../pages/ExtraPages/BlankPage.vue";
import InternalErrorPage from "../pages/Error/InternalErrorPage.vue";
import WidgetsPage from "../pages/WidgetsPage.vue";
import MapPage from "../pages/MapPage.vue";
import NotificationPage from "../pages/NotificationPage.vue";
import MemberPage from "../pages/MemberPage.vue";
import MyProfilePage from "../pages/MyProfilePage.vue";
import AccountSettingsPage from "../pages/Settings/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage.vue";
import ConnectionsPage from "../pages/Settings/ConnectionsPage.vue";
import PrivacyPolicyPage from "../pages/Settings/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/Settings/TermsConditionsPage.vue";

import ErrorPage from "../pages/ErrorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "EcommercePage",
    meta: { requiresAuth: true, role: "admin" },
    component: EcommercePage,
  },
  {
    path: "/dashboard/crm",
    name: "CRMPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CRMPage,
  },
  {
    path: "/dashboard/project-management",
    name: "ProjectManagementPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProjectManagementPage,
  },
  {
    path: "/dashboard/lms",
    name: "LMSPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LMSPage,
  },
  {
    path: "/dashboard/helpdesk",
    name: "HelpDeskPage",
    meta: { requiresAuth: true, role: "admin" },
    component: HelpDeskPage,
  },
  {
    path: "/dashboard/analytics",
    name: "AnalyticsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AnalyticsPage,
  },
  {
    path: "/dashboard/crypto",
    name: "CryptoPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CryptoPage,
  },
  {
    path: "/dashboard/sales",
    name: "SalesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SalesPage,
  },
  {
    path: "/dashboard/hospital",
    name: "HospitalPage",
    meta: { requiresAuth: true, role: "admin" },
    component: HospitalPage,
  },
  {
    path: "/dashboard/hrm",
    name: "HRMPage",
    meta: { requiresAuth: true, role: "admin" },
    component: HRMPage,
  },
  {
    path: "/dashboard/school",
    name: "SchoolPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SchoolPage,
  },
  {
    path: "/dashboard/call-center",
    name: "CallCenterPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CallCenterPage,
  },
  {
    path: "/dashboard/marketing",
    name: "MarketingPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MarketingPage,
  },
  {
    path: "/dashboard/nft",
    name: "NFTPage",
    meta: { requiresAuth: true, role: "admin" },
    component: NFTPage,
  },
  {
    path: "/dashboard/saas",
    name: "SaaSPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SaaSPage,
  },
  {
    path: "/dashboard/real-estate",
    name: "RealEstatePage",
    meta: { requiresAuth: true, role: "admin" },
    component: RealEstatePage,
  },
  {
    path: "/dashboard/shipment",
    name: "ShipmentPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ShipmentPage,
  },
  {
    path: "/dashboard/finance",
    name: "FinancePage",
    meta: { requiresAuth: true, role: "admin" },
    component: FinancePage,
  },
  {
    path: "/",
    name: "HomePage",
    meta: { requiresAuth: true, role: "admin" },
    component: HomePage,
  },
  {
    path: "/features",
    name: "FeaturesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: FeaturesPage,
  },
  {
    path: "/team",
    name: "OurTeamPage",
    meta: { requiresAuth: true, role: "admin" },
    component: OurTeamPage,
  },
  {
    path: "/faq",
    name: "FAQPage",
    meta: { requiresAuth: true, role: "admin" },
    component: FAQPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ContactPage,
  },
  {
    path: "/apps/to-do-list",
    name: "ToDoListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ToDoListPage,
  },
  {
    path: "/apps/calendar",
    name: "CalendarPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CalendarPage,
  },
  {
    path: "/apps/contacts",
    name: "ContactsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ContactsPage,
  },
  {
    path: "/apps/chat",
    name: "ChatPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ChatPage,
  },
  {
    path: "/apps/email/inbox",
    name: "InboxPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InboxPage,
  },
  {
    path: "/apps/email/compose",
    name: "ComposePage",
    meta: { requiresAuth: true, role: "admin" },
    component: ComposePage,
  },
  {
    path: "/apps/email/read",
    name: "ReadEmailPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ReadEmailPage,
  },
  {
    path: "/apps/kanban-board",
    name: "KanbanBoardPage",
    meta: { requiresAuth: true, role: "admin" },
    component: KanbanBoardPage,
  },
  {
    path: "/apps/file-manager/my-drive",
    name: "MyDrivePage",
    meta: { requiresAuth: true, role: "admin" },
    component: MyDrivePage,
  },
  {
    path: "/apps/file-manager/assets",
    name: "AssetsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AssetsPage,
  },
  {
    path: "/apps/file-manager/projects",
    name: "ProjectsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProjectsPage,
  },
  {
    path: "/apps/file-manager/personal",
    name: "PersonalPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PersonalPage,
  },
  {
    path: "/apps/file-manager/applications",
    name: "ApplicationsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ApplicationsPage,
  },
  {
    path: "/apps/file-manager/documents",
    name: "DocumentsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: DocumentsPage,
  },
  {
    path: "/apps/file-manager/media",
    name: "MediaPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MediaPage,
  },
  {
    path: "/apps/file-manager/recents",
    name: "RecantsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RecantsPage,
  },
  {
    path: "/apps/file-manager/important",
    name: "ImportantFilesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ImportantFilesPage,
  },

  {
    path: "/ecommerce/products-list",
    name: "ProductsListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProductsListPage,
  },
  {
    path: "/ecommerce/product-details",
    name: "ProductDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProductDetailsPage,
  },
  {
    path: "/ecommerce/create-product",
    name: "CreateProductPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateProductPage,
  },
  {
    path: "/ecommerce/edit-product",
    name: "EditProductPage",
    meta: { requiresAuth: true, role: "admin" },
    component: EditProductPage,
  },
  {
    path: "/ecommerce/cart",
    name: "CartPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CartPage,
  },
  {
    path: "/ecommerce/checkout",
    name: "CheckoutPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CheckoutPage,
  },
  {
    path: "/ecommerce/orders",
    name: "OrdersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: OrdersPage,
  },
  {
    path: "/ecommerce/order-details",
    name: "OrderDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: OrderDetailsPage,
  },
  {
    path: "/ecommerce/create-order",
    name: "CreateOrderPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateOrderPage,
  },
  {
    path: "/ecommerce/order-tracking",
    name: "OrderTrackingPage",
    meta: { requiresAuth: true, role: "admin" },
    component: OrderTrackingPage,
  },
  {
    path: "/ecommerce/customers",
    name: "CustomersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CustomersPage,
  },
  {
    path: "/ecommerce/customer-details",
    name: "CustomerDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CustomerDetailsPage,
  },
  {
    path: "/ecommerce/categories",
    name: "CategoriesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CategoriesPage,
  },
  {
    path: "/ecommerce/sellers",
    name: "SellersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SellersPage,
  },
  {
    path: "/ecommerce/seller-details",
    name: "SellerDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SellerDetailsPage,
  },
  {
    path: "/ecommerce/create-seller",
    name: "CreateSellerPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateSellerPage,
  },
  {
    path: "/ecommerce/reviews",
    name: "ReviewsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ReviewsPage,
  },
  {
    path: "/ecommerce/refunds",
    name: "RefundsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RefundsPage,
  },
  {
    path: "/crm/contacts",
    name: "CRMContactsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CRMContactsPage,
  },
  {
    path: "/crm/customers",
    name: "CRMCustomersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CRMCustomersPage,
  },
  {
    path: "/crm/leads",
    name: "LeadsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LeadsPage,
  },
  {
    path: "/crm/deals",
    name: "DealsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: DealsPage,
  },
  {
    path: "/project-management/project-overview",
    name: "ProjectOverviewPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProjectOverviewPage,
  },
  {
    path: "/project-management/projects-list",
    name: "ProjectsListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProjectsListPage,
  },
  {
    path: "/project-management/create-project",
    name: "CreateProjectPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateProjectPage,
  },
  {
    path: "/project-management/clients",
    name: "ClientsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ClientsPage,
  },
  {
    path: "/project-management/teams",
    name: "TeamsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TeamsPage,
  },
  {
    path: "/project-management/kanban-board",
    name: "KanbanBoardsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: KanbanBoardsPage,
  },
  {
    path: "/project-management/users",
    name: "UserPage",
    meta: { requiresAuth: true, role: "admin" },
    component: UserPage,
  },
  {
    path: "/lms/courses-list",
    name: "CoursesListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CoursesListPage,
  },
  {
    path: "/lms/course-details",
    name: "CourseDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CourseDetailsPage,
  },
  {
    path: "/lms/lesson-preview",
    name: "LessonPreviewPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LessonPreviewPage,
  },
  {
    path: "/lms/create-course",
    name: "CreateCoursePage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateCoursePage,
  },
  {
    path: "/lms/edit-course",
    name: "EditCoursePage",
    meta: { requiresAuth: true, role: "admin" },
    component: EditCoursePage,
  },
  {
    path: "/lms/instructors",
    name: "InstructorsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InstructorsPage,
  },
  {
    path: "/help-desk/tickets",
    name: "TicketsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TicketsPage,
  },
  {
    path: "/help-desk/ticket-details",
    name: "TicketDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TicketDetailsPage,
  },
  {
    path: "/help-desk/agents",
    name: "AgentsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AgentsPage,
  },
  {
    path: "/help-desk/reports",
    name: "ReportsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ReportsPage,
  },
  {
    path: "/nft-marketplace/marketplace",
    name: "MarketplacePage",
    meta: { requiresAuth: true, role: "admin" },
    component: MarketplacePage,
  },
  {
    path: "/nft-marketplace/explore-all",
    name: "ExploreAllPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ExploreAllPage,
  },
  {
    path: "/nft-marketplace/live-auction",
    name: "LiveAuctionPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LiveAuctionPage,
  },
  {
    path: "/nft-marketplace/nft-details",
    name: "NFTDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: NFTDetailsPage,
  },
  {
    path: "/nft-marketplace/wallet-connect",
    name: "WalletConnectPage",
    meta: { requiresAuth: true, role: "admin" },
    component: WalletConnectPage,
  },
  {
    path: "/nft-marketplace/creators",
    name: "CreatorsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreatorsPage,
  },
  {
    path: "/nft-marketplace/creator-details",
    name: "CreatorDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreatorDetailsPage,
  },
  {
    path: "/nft-marketplace/create-nft",
    name: "CreateNFTPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateNFTPage,
  },
  {
    path: "/real-estate/property-list",
    name: "PropertyListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PropertyListPage,
  },
  {
    path: "/real-estate/property-details",
    name: "PropertyDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PropertyDetailsPage,
  },
  {
    path: "/real-estate/add-property",
    name: "AddPropertyPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AddPropertyPage,
  },
  {
    path: "/real-estate/agents",
    name: "RealEstateAgentsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RealEstateAgentsPage,
  },
  {
    path: "/real-estate/agent-details",
    name: "AgentDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AgentDetailsPage,
  },
  {
    path: "/real-estate/add-agent",
    name: "AddAgentPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AddAgentPage,
  },
  {
    path: "/real-estate/customers",
    name: "RealEstateCustomersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RealEstateCustomersPage,
  },
  {
    path: "/finance/wallet",
    name: "WalletPage",
    meta: { requiresAuth: true, role: "admin" },
    component: WalletPage,
  },
  {
    path: "/finance/transactions",
    name: "TransactionPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TransactionPage,
  },
  {
    path: "/events/events-grid",
    name: "EventsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: EventsPage,
  },
  {
    path: "/events/events-list",
    name: "EventsListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: EventsListPage,
  },
  {
    path: "/events/event-details",
    name: "EventDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: EventDetailsPage,
  },
  {
    path: "/events/create-an-event",
    name: "CreateAnEventPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateAnEventPage,
  },
  {
    path: "/events/edit-an-event",
    name: "EditAnEventPage",
    meta: { requiresAuth: true, role: "admin" },
    component: EditAnEventPage,
  },
  {
    path: "/social/profile",
    name: "ProfilePage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProfilePage,
  },
  {
    path: "/social/about",
    name: "AboutPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AboutPage,
  },
  {
    path: "/social/activity",
    name: "ActivityPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ActivityPage,
  },
  {
    path: "/social/settings",
    name: "SettingsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SettingsPage,
  },
  {
    path: "/invoices/invoices-lists",
    name: "InvoicesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InvoicesPage,
  },
  {
    path: "/invoices/invoice-details",
    name: "InvoiceDetailsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InvoiceDetailsPage,
  },
  {
    path: "/invoices/create-invoice",
    name: "CreateInvoicePage",
    meta: { requiresAuth: true, role: "admin" },
    component: CreateInvoicePage,
  },
  {
    path: "/invoices/edit-invoice",
    name: "EditInvoicePage",
    meta: { requiresAuth: true, role: "admin" },
    component: EditInvoicePage,
  },
  {
    path: "/users/team-members",
    name: "TeamMembersPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TeamMembersPage,
  },
  {
    path: "/users/users-list",
    name: "UsersListPage",
    meta: { requiresAuth: true, role: "admin" },
    component: UsersListPage,
  },
  {
    path: "/users/add-user",
    name: "AddUserPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AddUserPage,
  },
  {
    path: "/profile/user-profile",
    name: "UserProfilePage",
    meta: { requiresAuth: true, role: "admin" },
    component: UserProfilePage,
  },
  {
    path: "/profile/profile-teams",
    name: "UserTeamPage",
    meta: { requiresAuth: true, role: "admin" },
    component: UserTeamPage,
  },
  {
    path: "/profile/profile-projects",
    name: "UserProjectsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: UserProjectsPage,
  },
  {
    path: "/starter",
    name: "StarterPage",
    meta: { requiresAuth: true, role: "admin" },
    component: StarterPage,
  },
  {
    path: "/icons/material-symbols",
    name: "MaterialSymbolsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MaterialSymbolsPage,
  },
  {
    path: "/icons/remixicon",
    name: "RemixIconPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RemixIconPage,
  },
  {
    path: "/ui-elements/alerts",
    name: "AlertsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AlertsPage,
  },
  {
    path: "/ui-elements/avatars",
    name: "AvatarPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AvatarPage,
  },
  {
    path: "/ui-elements/accordion",
    name: "AccordionsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AccordionsPage,
  },
  {
    path: "/ui-elements/badges",
    name: "BadgesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: BadgesPage,
  },
  {
    path: "/ui-elements/buttons",
    name: "ButtonsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ButtonsPage,
  },
  {
    path: "/ui-elements/breadcrumb",
    name: "BreadcrumbPage",
    meta: { requiresAuth: true, role: "admin" },
    component: BreadcrumbPage,
  },
  {
    path: "/ui-elements/clipboard",
    name: "ClipboardPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ClipboardPage,
  },
  {
    path: "/ui-elements/dropdowns",
    name: "DropdownsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: DropdownsPage,
  },
  {
    path: "/ui-elements/images",
    name: "ImagesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ImagesPage,
  },
  {
    path: "/ui-elements/modal",
    name: "ModalsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ModalsPage,
  },
  {
    path: "/ui-elements/pagination",
    name: "PaginationsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PaginationsPage,
  },
  {
    path: "/ui-elements/popover",
    name: "PopoverPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PopoverPage,
  },
  {
    path: "/ui-elements/progress",
    name: "ProgressPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ProgressPage,
  },
  {
    path: "/ui-elements/tooltips",
    name: "TooltipsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TooltipsPage,
  },
  {
    path: "/ui-elements/tabs",
    name: "TabsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TabsPage,
  },
  {
    path: "/ui-elements/typography",
    name: "TypographyPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TypographyPage,
  },
  {
    path: "/ui-elements/videos",
    name: "VideosPage",
    meta: { requiresAuth: true, role: "admin" },
    component: VideosPage,
  },
  {
    path: "/tables",
    name: "TablesPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TablesPage,
  },
  {
    path: "/forms/input-select",
    name: "InputSelectPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InputSelectPage,
  },
  {
    path: "/forms/checkboxes-radios",
    name: "CheckboxesRadiosPage",
    meta: { requiresAuth: true, role: "admin" },
    component: CheckboxesRadiosPage,
  },
  {
    path: "/forms/rich-text-editor",
    name: "RichTextEditorPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RichTextEditorPage,
  },
  {
    path: "/forms/file-uploader",
    name: "FileUploaderPage",
    meta: { requiresAuth: true, role: "admin" },
    component: FileUploaderPage,
  },
  {
    path: "/charts/line-charts",
    name: "LineChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LineChartsPage,
  },
  {
    path: "/charts/area-charts",
    name: "AreaChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AreaChartsPage,
  },
  {
    path: "/charts/column-charts",
    name: "ColumnChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ColumnChartsPage,
  },
  {
    path: "/charts/mixed-charts",
    name: "MixedChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MixedChartsPage,
  },
  {
    path: "/charts/radialbar-charts",
    name: "RadialBarChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RadialBarChartsPage,
  },
  {
    path: "/charts/radar-charts",
    name: "RadarChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: RadarChartsPage,
  },
  {
    path: "/charts/pie-charts",
    name: "PieChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PieChartsPage,
  },
  {
    path: "/charts/polar-charts",
    name: "PolarChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PolarChartsPage,
  },
  {
    path: "/charts/more-charts",
    name: "MoreChartsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MoreChartsPage,
  },
  {
    path: "/authentication/sign-in",
    name: "SignInPage",
    component: SignInPage,
   meta: { requiresAuth: false },
  },
  {
    path: "/authentication/sign-up",
    name: "SignUpPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SignUpPage,
  },
  {
    path: "/authentication/forgot-password",
    name: "ForgotPasswordPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ForgotPasswordPage,
  },
  {
    path: "/authentication/reset-password",
    name: "ResetPasswordPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ResetPasswordPage,
  },
  {
    path: "/authentication/confirm-email",
    name: "ConfirmMailPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ConfirmMailPage,
  },
  {
    path: "/authentication/lock-screen",
    name: "LockScreenPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LockScreenPage,
  },
  {
    path: "/authentication/logout",
    name: "LogOutPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LogOutPage,
  },
  {
    path: "/extra-pages/pricing",
    name: "PricingPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PricingPage,
  },
  {
    path: "/extra-pages/timeline",
    name: "TimelinePage",
    meta: { requiresAuth: true, role: "admin" },
    component: TimelinePage,
  },
  {
    path: "/extra-pages/faq",
    name: "FAQsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: FAQsPage,
  },
  {
    path: "/extra-pages/gallery",
    name: "GalleryPage",
    meta: { requiresAuth: true, role: "admin" },
    component: GalleryPage,
  },
  {
    path: "/extra-pages/testimonials",
    name: "TestimonialsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TestimonialsPage,
  },
  {
    path: "/extra-pages/search",
    name: "SearchPage",
    meta: { requiresAuth: true, role: "admin" },
    component: SearchPage,
  },
  {
    path: "/extra-pages/coming-soon",
    name: "ComingSoonPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ComingSoonPage,
  },
  {
    path: "/extra-pages/blank-page",
    name: "BlankPage",
    meta: { requiresAuth: true, role: "admin" },
    component: BlankPage,
  },
  {
    path: "/error/internal-error",
    name: "InternalErrorPage",
    meta: { requiresAuth: true, role: "admin" },
    component: InternalErrorPage,
  },
  {
    path: "/widgets",
    name: "WidgetsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: WidgetsPage,
  },
  {
    path: "/maps",
    name: "MapPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MapPage,
  },
  {
    path: "/notifications",
    name: "NotificationPage",
    meta: { requiresAuth: true, role: "admin" },
    component: NotificationPage,
  },
  {
    path: "/members",
    name: "MemberPage",
    meta: { requiresAuth: true, role: "admin" },
    component: MemberPage,
  },
  {
    path: "/my-profile",
    name: "MyProfilePage",
    meta: { requiresAuth: true, role: "admin" },
    component: MyProfilePage,
  },
  {
    path: "/settings/account-settings",
    name: "AccountSettingsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: AccountSettingsPage,
  },
  {
    path: "/settings/change-password",
    name: "ChangePasswordPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ChangePasswordPage,
  },
  {
    path: "/settings/connections",
    name: "ConnectionsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: ConnectionsPage,
  },
  {
    path: "/settings/privacy-policy",
    name: "PrivacyPolicyPage",
    meta: { requiresAuth: true, role: "admin" },
    component: PrivacyPolicyPage,
  },
  {
    path: "/settings/terms-conditions",
    name: "TermsConditionsPage",
    meta: { requiresAuth: true, role: "admin" },
    component: TermsConditionsPage,
  },

  { meta: { requiresAuth: true, role: "admin" },path: "/:pathMatch(.*)*", name: "ErrorPage", 
    component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isAuthenticated;
  const userRole = authStore.user?.role;

  if (to.name === 'SignInPage' && isLoggedIn) {
    return next({ name: 'EcommercePage' }); 
  }

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ name: 'SignInPage' });
  }

  if (to.meta.requiresAuth && to.meta.role && to.meta.role !== userRole) {
    return next({ name: 'ErrorPage' }); 
  }

  next();
})



export default router;
