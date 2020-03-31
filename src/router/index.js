import Vue from 'vue';
import Router from 'vue-router';
import Page404 from "../views/pages/Page404";

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views - /
const Dashboard = () => import('@/views/Dashboard')
// Views - Pages
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
// Views - Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
const CreateUser = () => import('@/views/users/CreateUser')

const Reports = () => import('@/views/reports/Reports')
const Report = () => import('../views/reports/Report.vue')
const CreateReport = () => import('../views/reports/CreateReport.vue')
const EditReport = () => import('../views/reports/EditReport.vue')


const AllReportGroups = () => import('../views/reports/AllReportGroups.vue')
const ReportGroup = () => import('../views/reports/ReportGroup.vue')

const Roles = () => import('../views/roles/Roles.vue')
const CreateRole = () => import('../views/roles/CreateRole.vue')

const Documents = () => import('../views/pages/Documents.vue')
const Document = () => import('../views/pages/Document.vue')


const Profile = () => import('../views/pages/Profile.vue')
const Tags = () => import('../views/pages/Tags.vue')

const SearchResult = () => import('../views/pages/SearchResult.vue')


Vue.use(Router)

export default new Router({
    mode: 'history',
    // mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});


function configRoutes() {
    return [
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },

                {
                    path: 'profile',
                    name: 'Profile',
                    component: Profile
                },
                {
                    path: '/search/:slug',
                    name: 'SearchResult',
                    component: SearchResult
                },

                {
                    path: 'roles',
                    name: 'Roles',
                    component: Roles
                },

                {
                    path: 'roles/create',
                    name: 'CreateRoles',
                    component: CreateRole
                },

                {
                    path: '/users/create',
                    name: 'CreateUser',
                    meta: {
                        label: 'Create User',
                    },
                    component: CreateUser
                },
                {
                    path: '/reports/create',
                    name: 'CreateReport',
                    component: CreateReport
                },

                {
                    path: '/reports/:id/edit',
                    name: 'EditReport',
                    component: EditReport
                },

                {
                    path: '/reports/groups',
                    name: 'AllReportGroups',
                    component: AllReportGroups
                },

                {
                    path: '/reports/groups/:id',
                    name: 'ReportGroup',
                    component: ReportGroup
                },

                {
                    path: '/documents',
                    name: 'Documents',
                    component: Documents
                },

                {
                    path: '/documents/:id',
                    name: 'Document',
                    component: Document
                },

                {
                    path: '/tags',
                    name: 'Tags',
                    component: Tags
                },
                {
                    path: 'reports',
                    meta: {
                        label: 'Reports'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            name: 'Reports',
                            component: Reports
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'Report Details'
                            },
                            name: 'Report',
                            component: Report
                        },

                    ]
                },
                {
                    path: 'users',
                    meta: {
                        label: 'Users'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            name: 'Users',
                            component: Users
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'User Details'
                            },
                            name: 'User',
                            component: User
                        },

                    ]
                },

            ]
        },
        {
            path: '*',
            name: 'Page404',
            component: Page404
        }
    ]
}


//  DEMO PURPOSE
//         {
//           path: 'theme',
//           redirect: '/theme/colors',
//           name: 'Theme',
//           component: {
//             render (c) { return c('router-view') }
//           },
//           children: [
//             {
//               path: 'colors',
//               name: 'Colors',
//               component: Colors
//             },
//             {
//               path: 'typography',
//               name: 'Typography',
//               component: Typography
//             }
//           ]
//         },
//         {
//           path: 'charts',
//           name: 'Charts',
//           component: Charts
//         },
//         {
//           path: 'widgets',
//           name: 'Widgets',
//           component: Widgets
//         },
//         {
//           path: 'users',
//           meta: {
//             label: 'Users'
//           },
//           component: {
//             render(c) {
//               return c('router-view')
//             }
//           },
//           children: [
//             {
//               path: '',
//               name: 'Users',
//               component: Users
//             },
//             {
//               path: ':id',
//               meta: {
//                 label: 'User Details'
//               },
//               name: 'User',
//               component: User
//             }
//           ]
//         },
//         {
//           path: 'base',
//           redirect: '/base/cards',
//           name: 'Base',
//           component: {
//             render (c) { return c('router-view') }
//           },
//           children: [
//             {
//               path: 'cards',
//               name: 'Cards',
//               component: Cards
//             },
//             {
//               path: 'forms',
//               name: 'Forms',
//               component: Forms
//             },
//             {
//               path: 'switches',
//               name: 'Switches',
//               component: Switches
//             },
//             {
//               path: 'tables',
//               name: 'Tables',
//               component: Tables
//             },
//             {
//               path: 'tabs',
//               name: 'Tabs',
//               component: Tabs
//             },
//             {
//               path: 'breadcrumbs',
//               name: 'Breadcrumbs',
//               component: Breadcrumbs
//             },
//             {
//               path: 'carousels',
//               name: 'Carousels',
//               component: Carousels
//             },
//             {
//               path: 'collapses',
//               name: 'Collapses',
//               component: Collapses
//             },
//             {
//               path: 'jumbotrons',
//               name: 'Jumbotrons',
//               component: Jumbotrons
//             },
//             {
//               path: 'list-groups',
//               name: 'List Groups',
//               component: ListGroups
//             },
//             {
//               path: 'navs',
//               name: 'Navs',
//               component: Navs
//             },
//             {
//               path: 'navbars',
//               name: 'Navbars',
//               component: Navbars
//             },
//             {
//               path: 'paginations',
//               name: 'Paginations',
//               component: Paginations
//             },
//             {
//               path: 'popovers',
//               name: 'Popovers',
//               component: Popovers
//             },
//             {
//               path: 'progress-bars',
//               name: 'Progress Bars',
//               component: ProgressBars
//             },
//             {
//               path: 'tooltips',
//               name: 'Tooltips',
//               component: Tooltips
//             }
//           ]
//         },
//         {
//           path: 'buttons',
//           redirect: '/buttons/standard-buttons',
//           name: 'Buttons',
//           component: {
//             render (c) { return c('router-view') }
//           },
//           children: [
//             {
//               path: 'standard-buttons',
//               name: 'Standard Buttons',
//               component: StandardButtons
//             },
//             {
//               path: 'button-groups',
//               name: 'Button Groups',
//               component: ButtonGroups
//             },
//             {
//               path: 'dropdowns',
//               name: 'Dropdowns',
//               component: Dropdowns
//             },
//             {
//               path: 'brand-buttons',
//               name: 'Brand Buttons',
//               component: BrandButtons
//             }
//           ]
//         },
//         {
//           path: 'icons',
//           redirect: '/icons/coreui-icons',
//           name: 'CoreUI Icons',
//           component: {
//             render (c) { return c('router-view') }
//           },
//           children: [
//             {
//               path: 'coreui-icons',
//               name: 'Icons library',
//               component: CoreUIIcons
//             },
//             {
//               path: 'brands',
//               name: 'Brands',
//               component: Brands
//             },
//             {
//               path: 'flags',
//               name: 'Flags',
//               component: Flags
//             }
//           ]
//         },
//         {
//           path: 'notifications',
//           redirect: '/notifications/alerts',
//           name: 'Notifications',
//           component: {
//             render (c) { return c('router-view') }
//           },
//           children: [
//             {
//               path: 'alerts',
//               name: 'Alerts',
//               component: Alerts
//             },
//             {
//               path: 'badges',
//               name: 'Badges',
//               component: Badges
//             },
//             {
//               path: 'modals',
//               name: 'Modals',
//               component: Modals
//             }
//           ]
//         }
//       ]
//     },
//     {
//       path: '/pages',
//       redirect: '/pages/404',
//       name: 'Pages',
//       component: {
//         render (c) { return c('router-view') }
//       },
//       children: [
//         {
//           path: '404',
//           name: 'Page404',
//           component: Page404
//         },
//         {
//           path: '500',
//           name: 'Page500',
//           component: Page500
//         },
//         {
//           path: 'login',
//           name: 'Login',
//           component: Login
//         },
//         {
//           path: 'register',
//           name: 'Register',
//           component: Register
//         }
//       ]
//     }
//   ]
// }

