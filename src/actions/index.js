import shoes from '../apis/shoes'

export const fetchProducts = () => async dispatch => {
    const response = await shoes.get('/admin/api/2021-01/products.json', { mode: 'cors'})

    dispatch({type: 'FETCH_PRODUCTS', payload: response.data})
}

export const fetchProduct = (id) => async dispatch => {
    const response = await shoes.get(`/admin/api/2021-01/products/${id}.json`)

    dispatch({type: 'FETCH_PRODUCTS', payload: response.products})
}

export const toggleView = (view) => {
    return {type: 'TOGGLE_VIEW', payload: view}
}