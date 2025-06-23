<template>
  <div
    :class="[
      'sidebar-area bg-white dark:bg-[#0c1427] fixed overflow-hidden z-[7] top-0 h-screen transition-all rounded-r-md',
      { active: stateStoreInstance.open },
    ]"
  >
    <div
      class="logo bg-white dark:bg-[#0c1427] border-b border-gray-100 dark:border-[#172036] px-[25px] pt-[19px] pb-[15px] absolute z-[2] right-0 top-0 left-0"
    >
      <RouterLink
        to="/dashboard"
        class="transition-none relative flex items-center"
      >
        <img src="#" alt="logo-icon" />
        <span
          class="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-md"
        >
          musical garage
        </span>
      </RouterLink>
      <button
        type="button"
        class="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
        @click="stateStoreInstance.onChange"
      >
        <i class="material-symbols-outlined"> close </i>
      </button>
    </div>
    <div class="pt-[89px] px-[25px] pb-[20px] h-screen hover-scroll-bar">
      <div class="accordion">
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs"
        >
          Main
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              dashboard
            </i>
            <span class="title leading-none"> Dashboard </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto"
            >
              18
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    eCommerce
                  </RouterLink>
                </li>

                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/project-management"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Project Management
                  </RouterLink>
                </li>

                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/helpdesk"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    HelpDesk
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/analytics"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Analytics
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/crypto"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Crypto
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/sales"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sales
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/hospital"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Hospital
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/hrm"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    HRM
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/school"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    School
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/call-center"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Call Center
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/marketing"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Marketing
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/nft"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    NFT
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/saas"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    SaaS
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/real-estate"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Real Estate
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/shipment"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Shipment
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink
                    to="/dashboard/finance"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Finance
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          PAGES
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              shopping_cart
            </i>
            <span class="title leading-none"> eCommerce </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/products-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Products List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/product-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Product Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/create-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Product
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/edit-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit Product
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/cart"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Cart
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/checkout"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Checkout
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/orders"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Orders
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/order-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Order Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/create-order"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Order
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/order-tracking"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Order Tracking
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customers
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/customer-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customer Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/categories"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Categories
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/sellers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sellers
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/seller-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Seller Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/create-seller"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Seller
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/reviews"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Reviews
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/ecommerce/refunds"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Refunds
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              calculate
            </i>
            <span class="title leading-none"> Finance </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/finance/wallet"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Wallet
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/finance/transactions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Transactions
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              local_activity
            </i>
            <span class="title leading-none"> Events </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/events/events-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Events List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/events/event-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Event Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/events/create-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create An Event
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/events/edit-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit An Event
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              content_paste
            </i>
            <span class="title leading-none"> Invoices </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/invoices/invoices-lists"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Invoices
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/invoices/invoice-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Invoice Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/invoices/create-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Invoice
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/invoices/edit-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit Invoice
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              person
            </i>
            <span class="title leading-none"> Users </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/users/users-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Users List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/users/add-user"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Add User
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          Others
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <RouterLink
            to="/my-profile"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              account_circle
            </i>
            <span class="title leading-none"> My Profile </span>
          </RouterLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              settings
            </i>
            <span class="title leading-none"> Settings </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/settings/account-settings"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Account Settings
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink
                    to="/settings/change-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Change Password
                  </RouterLink>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            @click="logout"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              logout
            </i>
            <span class="title leading-none"> Logout </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const stateStoreInstance = stateStore;

    const logout = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          await axios.post(
            "http://127.0.0.1:8000/api/v1/admin/logout",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }

        localStorage.removeItem("token");
        authStore.logout();
        router.push("/authentication/sign-in");
      } catch (error) {
        console.error("Logout failed:", error);
        authStore.logout();
        router.push("/authentication/sign-in");
      }
    };

    const initializeAccordions = () => {
      const accordions = document.querySelectorAll<HTMLElement>(
        ".accordion-button.toggle, .sidemenu-link.toggle"
      );
      accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
          const siblingAccordions = Array.from(
            this.closest(".accordion-collapse")?.querySelectorAll<HTMLElement>(
              ".accordion-button.toggle, .sidemenu-link.toggle"
            ) || accordions
          );
          siblingAccordions.forEach((acc) => {
            if (acc !== accordion) {
              acc.classList.remove("open");
              acc.setAttribute("aria-expanded", "false");
              const nextSibling = acc.nextElementSibling as HTMLElement;
              if (nextSibling) nextSibling.style.display = "none";
            }
          });

          this.classList.toggle("open");
          const panel = this.nextElementSibling as HTMLElement;
          if (panel) {
            if (panel.style.display === "block") {
              panel.style.display = "none";
              this.setAttribute("aria-expanded", "false");
            } else {
              panel.style.display = "block";
              this.setAttribute("aria-expanded", "true");
            }
          }
        });
      });
    };

    onMounted(() => {
      initializeAccordions();
    });

    return {
      stateStoreInstance,
      logout,
    };
  },
});
</script>
