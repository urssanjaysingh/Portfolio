import {
    createSelector,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const requestsAdapter = createEntityAdapter({});

const initialState = requestsAdapter.getInitialState();

export const requestsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRequests: builder.query({
            query: () => ({
                url: '/requests',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                },
            }),
            keepUnusedDataFor: 5,
            transformResponse: (responseData) => {
                const loadedRequests = responseData.map((request) => {
                    request.id = request._id;
                    return request;
                });
                return requestsAdapter.setAll(loadedRequests);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: "Request", id: "LIST" },
                        ...result.ids.map((id) => ({ type: "Request", id })),
                    ];
                } else return [{ type: "Request", id: "LIST" }];
            },
        }),
        createRequest: builder.mutation({
            query: (requestData) => ({
                url: '/requests',
                method: 'POST',
                body: requestData,
            }),
            invalidatesTags: [{ type: 'Request', id: 'LIST' }],
        }),
        deleteRequest: builder.mutation({
            query: (requestId) => ({
                url: `/requests/${requestId}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Request", id: "LIST" }],
        }),
    }),
});

export const { useGetAllRequestsQuery, useDeleteRequestMutation, useCreateRequestMutation, } = requestsApiSlice; // Export the mutation hook

// Returns the query result object
export const selectRequestsResult = requestsApiSlice.endpoints.getAllRequests.select();

// Creates a memoized selector
const selectRequestsData = createSelector(
    selectRequestsResult,
    (requestsResult) => requestsResult.data // normalized state object with ids & entities
);

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllRequests,
    selectById: selectRequestById,
    selectIds: selectRequestIds,
    // Pass in a selector that returns the requests slice of state
} = requestsAdapter.getSelectors((state) => selectRequestsData(state) ?? initialState);
