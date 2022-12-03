const routes ={
    HOME: {
        name: 'Home',
        url: '/'
    },
    DETAILS: {
        name: 'Details',
        url: '/details/:id',
        completeUrl: (id: number) => `/details/${id}`
    }
}

export default routes;