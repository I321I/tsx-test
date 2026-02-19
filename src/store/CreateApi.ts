import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface apiContent {
    title: string
    id: string
}

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://todo-backend-worker.yeh19921026.workers.dev/api/todos' }),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        getTodos: build.query<apiContent[], void>({
            query: () => "",
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Todo' as const, id })),
                        { type: 'Todo', id: 'todos' },
                    ]
                    : [{ type: 'Todo', id: 'todos' }],
        }),
        addTodo: build.mutation<apiContent, apiContent>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body: body,
                headers: { "content-type": "application/json" },
            }),
            invalidatesTags: [{ type: 'Todo', id: 'todos' }]
        }),
        removeTodo: build.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Todo', id: id }]
        })
    }),
}
)
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useRemoveTodoMutation,
} = todosApi