export default {
    state: {
        reports: []
    },
    actions: {

    },
    mutations: {
    },
    getters: {

    }
}
// const state = {
//     reports: []
// };
// const actions = {
//     async getReports({ commit }) {
//         const response = await graphqlClient.query({
//             query: gql`
//                 query {
//                     Reports {
//                         id
//                         title
//                     }
//                 }
//             `
//         });
//         commit('SET_REPORTS', response.data.Reports);
//     },
// };
// const mutations = {
//     SET_REPORTS: (state, reports) => (state.reports = reports),
// };
// const getters = {
//     reports: state => state.reports,
//     reportsLength: state => state.reports.length,
// };
