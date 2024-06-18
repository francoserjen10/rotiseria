const productQueries = {
    selectAll: 'SELECT * FROM producto',
    deleteById: 'DELETE FROM producto WHERE producto_id = ?',
    updateById: 'UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, rubro_id = ? WHERE producto_id = ?',
}

export default productQueries;