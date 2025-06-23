<template>
  <div :class="[
    'sidebar-area bg-white dark:bg-[#0c1427] fixed overflow-hidden z-[7] top-0 h-screen transition-all rounded-r-md',
    { active: stateStoreInstance.open },
  ]">
    <div
      class="logo bg-white dark:bg-[#0c1427] border-b border-gray-100 dark:border-[#172036] px-[25px] pt-[19px] pb-[15px] absolute z-[2] right-0 top-0 left-0">
      <RouterLink to="/dashboard" class="transition-none relative flex items-center">
        <img src="#" alt="logo-icon" />
        <span class="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-md">
          musical garage
        </span>
      </RouterLink>
      <button type="button"
        class="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
        @click="stateStoreInstance.onChange">
        <i class="material-symbols-outlined"> close </i>
      </button>
    </div>
    <div class="pt-[89px] px-[25px] pb-[20px] h-screen hover-scroll-bar">
      <div class="accordion">
        <span class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs">
          Main
        </span>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              dashboard
            </i>
            <span class="title leading-none"> Dashboard </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
              18
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    eCommerce
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/crm"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    CRM
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-success-500 bg-success-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                      Hot
                    </span>
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/project-management"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Project Management
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/lms"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    LMS
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/helpdesk"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    HelpDesk
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/analytics"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Analytics
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/crypto"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Crypto
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/sales"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Sales
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/hospital"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Hospital
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/hrm"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    HRM
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/school"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    School
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/call-center"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Call Center
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/marketing"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Marketing
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/nft"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    NFT
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/saas"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    SaaS
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/real-estate"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Real Estate
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/shipment"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Shipment
                  </RouterLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <RouterLink to="/dashboard/finance"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Finance
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              note_stack
            </i>
            <span class="title leading-none"> Front Pages </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Home
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/features"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Features
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/team"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Our Team
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/faq"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    FAQ’s
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/contact"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
          Apps
        </span>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/apps/to-do-list"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              format_list_bulleted
            </i>
            <span class="title leading-none"> To Do List </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/apps/calendar"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              date_range
            </i>
            <span class="title leading-none"> Calendar </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/apps/contacts"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              contact_page
            </i>
            <span class="title leading-none"> Contacts </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/apps/chat"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              chat
            </i>
            <span class="title leading-none"> Chat </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              mail
            </i>
            <span class="title leading-none"> Email </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-success-500 bg-success-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
              3
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/email/inbox"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Inbox
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/email/compose"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Compose
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/email/read"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Read
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/apps/kanban-board"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              team_dashboard
            </i>
            <span class="title leading-none"> Kanban Board </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              folder_open
            </i>
            <span class="title leading-none"> File Manager </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-danger-500 bg-danger-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
              7
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/my-drive"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    My Drive
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/assets"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Assets
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/projects"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Projects
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/personal"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Personal
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/applications"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Applications
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/documents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Documents
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/apps/file-manager/media"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Media
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
          PAGES
        </span>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              shopping_cart
            </i>
            <span class="title leading-none"> eCommerce </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">

                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/products-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Products List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/product-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Product Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/create-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Product
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/edit-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Edit Product
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/cart"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Cart
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/checkout"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Checkout
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/orders"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Orders
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/order-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Order Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/create-order"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Order
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/order-tracking"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Order Tracking
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Customers
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/customer-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Customer Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/categories"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Categories
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/sellers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Sellers
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/seller-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Seller Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/create-seller"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Seller
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/reviews"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Reviews
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ecommerce/refunds"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Refunds
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              handshake
            </i>
            <span class="title leading-none"> CRM </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/crm/contacts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Contacts
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/crm/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Customers
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/crm/leads"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Leads
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/crm/deals"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Deals
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              description
            </i>
            <span class="title leading-none"> Project Management </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/project-overview"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Project Overview
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/projects-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Projects List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/create-project"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Project
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/clients"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Clients
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/teams"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Teams
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/kanban-board"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Kanban Board
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/project-management/users"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Users
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              auto_stories
            </i>
            <span class="title leading-none"> LMS </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/courses-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Courses List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/course-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Course Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/lesson-preview"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Lesson Preview
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/create-course"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Course
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/edit-course"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Edit Course
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/lms/instructors"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Instructors
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              support
            </i>
            <span class="title leading-none"> HelpDesk </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/help-desk/tickets"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Tickets
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/help-desk/ticket-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Ticket Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/help-desk/agents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Agents
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/help-desk/reports"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Reports
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              store
            </i>
            <span class="title leading-none"> NFT Marketplace </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/marketplace"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Marketplace
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/explore-all"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Explore All
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/live-auction"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Live Auction
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/nft-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    NFT Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/creators"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Creators
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/creator-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Creator Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/wallet-connect"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Wallet Connect
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/nft-marketplace/create-nft"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create NFT
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              real_estate_agent
            </i>
            <span class="title leading-none"> Real Estate </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/property-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Property List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/property-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Property Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/add-property"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Add Property
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/agents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Agents
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/agent-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Agent Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/add-agent"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Add Agent
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/real-estate/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Customers
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              calculate
            </i>
            <span class="title leading-none"> Finance </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/finance/wallet"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Wallet
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/finance/transactions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Transactions
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              local_activity
            </i>
            <span class="title leading-none"> Events </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/events/events-grid"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Events Grid
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/events/events-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Events List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/events/event-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Event Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/events/create-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create An Event
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/events/edit-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Edit An Event
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              share
            </i>
            <span class="title leading-none"> Social </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/social/profile"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Profile
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/social/settings"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Settings
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              content_paste
            </i>
            <span class="title leading-none"> Invoices </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/invoices/invoices-lists"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Invoices
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/invoices/invoice-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Invoice Details
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/invoices/create-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Create Invoice
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/invoices/edit-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Edit Invoice
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              person
            </i>
            <span class="title leading-none"> Users </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/users/team-members"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Team Members
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/users/users-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Users List
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/users/add-user"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Add User
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              account_box
            </i>
            <span class="title leading-none"> Profile </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/profile/user-profile"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    User Profile
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/profile/profile-teams"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Teams
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/profile/profile-projects"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Projects
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/starter"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              star_border
            </i>
            <span class="title leading-none"> Starter </span>
          </RouterLink>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
          MODULES
        </span>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              emoji_emotions
            </i>
            <span class="title leading-none"> Icons </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/icons/material-symbols"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Material Symbols
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/icons/remixicon"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    RemixIcon
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              qr_code_scanner
            </i>
            <span class="title leading-none"> UI Elements </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/alerts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Alerts
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/avatars"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Avatars
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/accordion"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Accordion
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/badges"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Badges
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/buttons"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Buttons
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/breadcrumb"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Breadcrumb
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/clipboard"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Clipboard
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/dropdowns"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Dropdowns
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/images"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Images
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/modal"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Modal
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/pagination"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Pagination
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/popover"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Popover
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/progress"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Progress
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/tooltips"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Tooltips
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/tabs"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Tabs
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/typography"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Typography
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/ui-elements/videos"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Videos
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a href="https://tailwindcss.com/docs/guides/nuxtjs" target="_blank"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/tables"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              table_chart
            </i>
            <span class="title leading-none"> Tables </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              forum
            </i>
            <span class="title leading-none"> Forms </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/forms/input-select"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Input & Select
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/forms/checkboxes-radios"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Checkboxes & Radios
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/forms/rich-text-editor"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Rich Text Editor
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/forms/file-uploader"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    File Uploader
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              pie_chart
            </i>
            <span class="title leading-none"> Charts </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/line-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Line
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/area-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Area
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/column-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Column
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/mixed-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Mixed
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/radialbar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    RadialBar
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/radar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Radar
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/pie-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Pie
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/polar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Polar
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/charts/more-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    More
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              lock_open
            </i>
            <span class="title leading-none"> Authentication </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/sign-in"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Sign In
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/sign-up"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Sign Up
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/forgot-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Forgot Password
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/reset-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Reset Password
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/confirm-email"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Confirm Email
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/authentication/lock-screen"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Lock Screen
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <button @click="handleLogout"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              content_copy
            </i>
            <span class="title leading-none"> Extra Pages </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/pricing"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Pricing
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/timeline"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Timeline
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/faq"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    FAQ
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/gallery"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Gallery
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/testimonials"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Testimonials
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/search"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Search
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/coming-soon"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Coming Soon
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/extra-pages/blank-page"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Blank Page
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              error
            </i>
            <span class="title leading-none"> Errors </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/not-found"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    404 Error Page
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/error/internal-error"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Internal Error
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/widgets"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              widgets
            </i>
            <span class="title leading-none"> Widgets </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/maps"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              map
            </i>
            <span class="title leading-none"> Maps </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/notifications"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              notifications
            </i>
            <span class="title leading-none"> Notifications </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/members"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              people
            </i>
            <span class="title leading-none"> Members </span>
          </RouterLink>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
          Others
        </span>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <RouterLink to="/my-profile"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              account_circle
            </i>
            <span class="title leading-none"> My Profile </span>
          </RouterLink>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              settings
            </i>
            <span class="title leading-none"> Settings </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/settings/account-settings"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Account Settings
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/settings/change-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Change Password
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/settings/connections"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Connections
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/settings/privacy-policy"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Privacy Policy
                  </RouterLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <RouterLink to="/settings/terms-conditions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Terms & Conditions
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
              unfold_more
            </i>
            <span class="title leading-none"> Multi Level Menu </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a href="#"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    First
                  </a>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <button type="button"
                    class="sidemenu-link toggle rounded-md flex items-center relative transition-all font-medium text-gray-500 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Second
                    <span
                      class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                      2
                    </span>
                  </button>
                  <div class="accordion-collapse hidden">
                    <div class="pt-[6px] ltr:pl-[20px] rtl:pr-[20px]">
                      <ul class="sidebar-sub-menu">
                        <li class="sidemenu-item mb-[4px] last:mb-0">
                          <a href="#"
                            class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                            Second 1
                          </a>
                        </li>
                        <li class="sidemenu-item mb-[4px] last:mb-0">
                          <a href="#"
                            class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                            Second 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a href="#"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]">
                    Third
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
          <button @click="logout"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]">
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
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
