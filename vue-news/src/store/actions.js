import { 
    // fetchNewsList,
    // fetchJobsList,
    // fetchAsksList,
    fetchList, 
    fetchUserInfo, 
    fetchCommentItem 
} from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // FETCH_ASK({ commit }) {
    //     return fetchAsksList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });

    },
    // #2
    FETCH_LIST({ commit }, pageName) {
        // #3
        return fetchList(pageName)
            .then(response => {
                // #4
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    },
}