import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
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
import WalletPage from "../pages/Finance/WalletPage.vue";
import TransactionPage from "../pages/Finance/TransactionPage.vue";
import EventsPage from "../pages/Events/EventsPage.vue";
import EventsListPage from "../pages/Events/EventsListPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import CreateAnEventPage from "../pages/Events/CreateAnEventPage.vue";
import EditAnEventPage from "../pages/Events/EditAnEventPage.vue";
import InvoicesPage from "../pages/Invoices/InvoicesPage.vue";
import InvoiceDetailsPage from "../pages/Invoices/InvoiceDetailsPage.vue";
import CreateInvoicePage from "../pages/Invoices/CreateInvoicePage.vue";
import EditInvoicePage from "../pages/Invoices/EditInvoicePage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import ForgotPasswordPage from "../pages/Authentication/ForgotPasswordPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import MyProfilePage from "../pages/MyProfilePage.vue";
import AccountSettingsPage from "../pages/Settings/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

import ProductCategoryList from "@/components/Pages/Category/ProductCategoryList.vue";
import ProductCategoryAdd from "@/components/Pages/Category/ProductCategoryAdd.vue";
import ProductCategoryEdit from "@/components/Pages/Category/ProductCategoryEdit.vue";
// items
import ItemListPage from "../pages/Items/ItemListPage.vue"
import ItemEditPage from "../pages/Items/ItemEditPage.vue" 
import ItemAddPage from "../pages/Items/ItemAddPage.vue" 
import ItemShowPage from "../pages/Items/ItemShowPage.vue" 

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "EcommercePage",
    meta: { requiresAuth: true, role: "admin" },
    component: EcommercePage,
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
  // category
  {
    path: "/categories",
    name: "CategoryProduct",
    meta: { requiresAuth: true, role: "admin" },
    component: ProductCategoryList,
  },
  {
    path: "/category/add",
    name: "CategoryAdd",
    meta: { requiresAuth: true, role: "admin" },
    component: ProductCategoryAdd,
  },
  {
    path: "/category/edit/:id",
    name: "CategoryEdit",
    meta: { requiresAuth: true, role: "admin" },
    component: ProductCategoryEdit,
  },
// Item
  {
    path: "/items",
    name: "item.index",
    meta: { requiresAuth: true, role: "admin" },
    component: ItemListPage,
  },
  {
    path: "/item/:id/show",
    name: "item.show",
    meta: { requiresAuth: true, role: "admin" },
    component: ItemShowPage,
  },
    {
    path: "/item/create",
    name: "item.create",
    meta: { requiresAuth: true, role: "admin" },
    component: ItemAddPage,
  },
    {
    path: "/item/:id/edit",
    name: "item.edit",
    meta: { requiresAuth: true, role: "admin" },
    component: ItemEditPage,
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
    path: "/authentication/sign-in",
    name: "SignInPage",
    component: SignInPage,
    meta: { requiresAuth: false },
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
    path: "/authentication/logout",
    name: "LogOutPage",
    meta: { requiresAuth: true, role: "admin" },
    component: LogOutPage,
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
    meta: { requiresAuth: true, role: "admin" },
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: ErrorPage,
  },
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

  if (to.name === "SignInPage" && isLoggedIn) {
    return next({ name: "EcommercePage" });
  }

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ name: "SignInPage" });
  }

  if (to.meta.requiresAuth && to.meta.role && to.meta.role !== userRole) {
    return next({ name: "ErrorPage" });
  }

  next();
});

export default router;
