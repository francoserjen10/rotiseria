const productQueries = {
    selectAll: 'SELECT * FROM producto',
    deleteById: 'DELETE FROM producto WHERE producto_id = ?',
    updateById: 'UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, rubro_id = ? WHERE producto_id = ?',
    insertImageUrl: 'UPDATE producto SET url_image = ?, url_image_delete = ?, display_url_image = ? WHERE producto_id = ?;',
    insert: 'INSERT INTO producto (nombre, descripcion, precio, rubro_id, url_image, url_image_delete, display_url_image) values (?,?,?,?,?,?,?);',
}

export default productQueries;